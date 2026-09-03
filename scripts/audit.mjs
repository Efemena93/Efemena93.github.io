import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs/promises";

const B = "http://localhost:4312";
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
await fs.mkdir("audit-out", { recursive: true });

const routes = [
  "/", "/work/", "/work/holding-pattern/", "/work/synchearts/", "/work/olive-ilive/",
  "/about/", "/field-notes/", "/field-notes/feelings-are-requirements/",
  "/field-notes/asking-about-the-hard-thing/", "/field-notes/care-is-a-system/",
  "/field-notes/what-a-label-costs/", "/resume/", "/contact/",
];

const rows = [];
const pageErrors = [];
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();
p.on("pageerror", (e) => pageErrors.push(String(e).slice(0, 130)));
p.on("console", (m) => { if (m.type() === "error") pageErrors.push("console: " + m.text().slice(0, 130)); });

for (const r of routes) {
  const resp = await p.goto(B + r, { waitUntil: "networkidle" });
  await p.waitForTimeout(350);
  const scan = await new AxeBuilder({ page: p })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
  const stats = await p.evaluate(() => {
    const t = document.querySelector("main")?.innerText ?? "";
    return {
      words: t.trim().split(/\s+/).filter(Boolean).length,
      todo: (t.match(/\[TODO|Lorem ipsum/gi) || []).length,
      h1: document.querySelectorAll("main h1").length,
    };
  });
  const name = r === "/" ? "home" : r.replace(/\//g, "_").replace(/^_|_$/g, "");
  await p.screenshot({ path: `audit-out/${name}.png`, fullPage: false });
  rows.push({
    route: r, status: resp.status(), ...stats,
    axe: scan.violations.map((v) => `${v.id}(${v.nodes.length})`),
  });
}

// Every internal link.
const seen = new Set();
const broken = [];
for (const r of routes) {
  await p.goto(B + r, { waitUntil: "domcontentloaded" });
  const hrefs = await p.evaluate(() =>
    Array.from(document.querySelectorAll("a[href]")).map((a) => a.getAttribute("href")));
  for (const h of hrefs) {
    if (!h || seen.has(h)) continue;
    seen.add(h);
    if (h.startsWith("http") || h.startsWith("mailto:") || h.startsWith("#")) continue;
    const res = await p.request.get(B + h);
    if (!res.ok()) broken.push(`${h} -> ${res.status()} (from ${r})`);
  }
}

// Draft routes must not exist.
const gone = {};
for (const d of [
  "/work/windchill-engineering-change/", "/work/vochub/", "/work/virtualbuddy/",
  "/field-notes/reading-a-silence/",
  "/field-notes/the-outcome-does-not-have-to-be-an-app/",
]) gone[d] = (await p.request.get(B + d)).status();

// Keyboard order on the homepage.
await p.goto(B + "/", { waitUntil: "networkidle" });
await p.waitForTimeout(500);
const tabOrder = [];
for (let i = 0; i < 9; i++) {
  await p.keyboard.press("Tab");
  tabOrder.push(await p.evaluate(() => document.activeElement?.textContent?.trim().slice(0, 24)));
}
await ctx.close();

// Responsive: 320 / 768 / 1024 / 1440.
const responsive = [];
for (const w of [320, 768, 1024, 1440]) {
  const c = await b.newContext({ viewport: { width: w, height: 900 }, isMobile: w < 768, hasTouch: w < 768 });
  const pg = await c.newPage();
  for (const r of ["/", "/work/holding-pattern/", "/field-notes/", "/resume/"]) {
    await pg.goto(B + r, { waitUntil: "networkidle" });
    await pg.waitForTimeout(300);
    const overflow = await pg.evaluate(() => {
      const de = document.documentElement;
      if (de.scrollWidth <= de.clientWidth + 1) return null;
      const bad = [];
      for (const el of document.querySelectorAll("body *")) {
        const rect = el.getBoundingClientRect();
        if (rect.right > de.clientWidth + 1 && rect.width > 0)
          bad.push(el.tagName.toLowerCase() + "." + String(el.className).slice(0, 60));
      }
      return { scrollWidth: de.scrollWidth, clientWidth: de.clientWidth, culprits: bad.slice(0, 5) };
    });
    responsive.push({ width: w, route: r, overflow });
    if (r === "/") await pg.screenshot({ path: `audit-out/w${w}-home.png`, fullPage: false });
  }
  await c.close();
}

// Reduced motion.
const rmc = await b.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
const rm = await rmc.newPage();
await rm.goto(B + "/", { waitUntil: "networkidle" });
await rm.waitForTimeout(700);
const reduced = await rm.evaluate(() => ({
  motionAttr: document.documentElement.dataset.motion,
  running: Array.from(document.querySelectorAll("*"))
    .flatMap((el) => el.getAnimations?.() ?? [])
    .filter((a) => a.playState === "running").length,
}));
await rmc.close();

// Forced colours / high contrast smoke test.
const fc = await b.newContext({ viewport: { width: 1440, height: 900 }, forcedColors: "active" });
const fp = await fc.newPage();
await fp.goto(B + "/", { waitUntil: "networkidle" });
await fp.screenshot({ path: "audit-out/forced-colors-home.png" });
await fc.close();

await b.close();
console.log(JSON.stringify({
  routes: rows, internalLinksChecked: seen.size, broken,
  draftRoutes: gone, tabOrder, responsive, reduced,
  pageErrors: [...new Set(pageErrors)],
}, null, 1));
