"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

import { site } from "@/content/site";

/**
 * Contact form.
 *
 * Accessibility decisions worth naming:
 *  - labels are visible and persistent, never placeholders-as-labels;
 *  - errors appear inline, are linked to their field with aria-describedby,
 *    are summarised in an assertive live region, and are never signalled by
 *    colour alone — each carries the word "Error";
 *  - there is no CAPTCHA. A honeypot field plus a submission-timing check
 *    stops naive bots without putting a puzzle in front of a human.
 *
 * There is no backend in this project. Set FORM_ENDPOINT to a form service
 * (Formspree, Basin, a route handler of your own) and it posts; leave it
 * unset and it composes a pre-filled email instead, which always works.
 */

const FORM_ENDPOINT = ""; // TODO: form service endpoint, or leave empty for mailto

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  // Set in an effect rather than during render: Date.now() is impure, and a
  // re-render would otherwise reset the clock the timing check depends on.
  const mountedAt = useRef(0);
  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  function validate(data: FormData): Errors {
    const next: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name) next.name = "Error: please tell me your name.";
    if (!email) next.email = "Error: please add an email address so I can reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Error: that does not look like an email address.";
    if (message.length < 10)
      next.message = "Error: please add a little more detail — at least a sentence.";

    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: a real person never fills a field they cannot see.
    if (String(data.get("company") ?? "")) return;
    // Timing: a form completed in under three seconds was not typed.
    if (mountedAt.current && Date.now() - mountedAt.current < 3000) return;

    const found = validate(data);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      const firstKey = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }

    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio enquiry — ${data.get("name")}`);
      const body = encodeURIComponent(
        `${data.get("message")}\n\n— ${data.get("name")}\n${data.get("email")}`,
      );
      window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      setStatus(response.ok ? "sent" : "failed");
      if (response.ok) form.reset();
    } catch {
      setStatus("failed");
    }
  }

  const errorList = Object.values(errors);

  return (
    <form onSubmit={onSubmit} noValidate className="measure">
      {/* Error summary — assertive, because a failed submit needs to interrupt. */}
      <div role="alert" aria-live="assertive" className="sr-only">
        {errorList.length > 0
          ? `${errorList.length} problem${errorList.length > 1 ? "s" : ""} with the form. ${errorList.join(" ")}`
          : ""}
      </div>

      {errorList.length > 0 ? (
        <div className="forced-border mb-8 rounded border-l-2 border-l-clay bg-paper p-5">
          <p className="label-type mb-2 text-clay-deep">
            Please fix {errorList.length} {errorList.length > 1 ? "things" : "thing"}
          </p>
          <ul className="space-y-1">
            {errorList.map((message) => (
              <li key={message} className="text-small text-charcoal-soft">
                {message}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="space-y-8">
        <Field
          id="name"
          label="Your name"
          autoComplete="name"
          error={errors.name}
          required
        />
        <Field
          id="email"
          type="email"
          label="Email"
          autoComplete="email"
          error={errors.email}
          required
        />
        <Field
          id="message"
          label="What are you working on?"
          hint="A sentence or two is plenty. I read everything."
          error={errors.message}
          textarea
          required
        />

        {/* Honeypot. Hidden from everyone, including screen readers. */}
        <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === "sending"}
          className="label-type forced-border inline-flex min-h-11 items-center rounded bg-charcoal px-6 py-3 text-ivory transition-colors duration-150 hover:bg-charcoal-soft disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send"}
        </button>

        <p aria-live="polite" className="text-small text-charcoal-muted">
          {status === "sent"
            ? "Thank you — that is on its way."
            : status === "failed"
              ? "That did not send. Email me directly and I will pick it up."
              : site.contact.responseTime}
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  hint,
  error,
  type = "text",
  textarea = false,
  required = false,
  autoComplete,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  autoComplete?: string;
}) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  const shared = {
    id,
    name: id,
    required,
    autoComplete,
    "aria-invalid": error ? (true as const) : undefined,
    "aria-describedby": describedBy,
    className: [
      "w-full rounded border bg-paper px-4 py-3 text-body text-charcoal",
      "placeholder:text-charcoal-muted",
      error ? "border-clay-deep" : "border-line-strong",
    ].join(" "),
  };

  return (
    <div>
      <label htmlFor={id} className="label-type mb-2 block text-charcoal">
        {label}
        {required ? (
          <span className="ml-1 text-charcoal-muted">(required)</span>
        ) : (
          <span className="ml-1 text-charcoal-muted">(optional)</span>
        )}
      </label>

      {hint ? (
        <p id={hintId} className="mb-2 text-small text-charcoal-muted">
          {hint}
        </p>
      ) : null}

      {textarea ? (
        <textarea {...shared} rows={6} />
      ) : (
        <input {...shared} type={type} />
      )}

      {error ? (
        <p id={errorId} className="mt-2 text-small text-clay-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}
