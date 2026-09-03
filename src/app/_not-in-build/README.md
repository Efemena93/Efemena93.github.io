# Not in the build

Next.js treats a folder whose name starts with `_` as private: nothing inside
is routed. Pages live here when they exist in the repository but must not be
published yet.

## `resume/`

The résumé page renders real structure around placeholder employment data
(`[TODO: job title]`, `[TODO: employer]`). Those markers were publicly visible
at `/resume`, linked from the homepage — the worst thing on the site.

It is parked here until verified employment history exists. Nothing has been
deleted, and the page works: moving the folder back up to `src/app/resume`
restores the route.

The content-validation gate in `src/content/validate.ts` will fail the build
if the placeholders are still present when it returns.
