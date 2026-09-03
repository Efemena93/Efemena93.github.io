import { chromium } from "playwright";
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const B = "http://localhost:4312";

// 1440 desktop — hero + studio
let c = await b.newContext({ viewport: { width: 1440, height: 1000 } });
let p = await c.newPage();
await p.goto(B + "/", { waitUntil: "networkidle" });
await p.waitForTimeout(900);
await p.screenshot({ path: "audit-out/D1-desktop-top.png" });
await p.evaluate(() => document.querySelector("#studio-heading")?.scrollIntoView());
await p.waitForTimeout(900);
await p.screenshot({ path: "audit-out/D1-desktop-studio.png" });

await c.close();

// 768 tablet
c = await b.newContext({ viewport: { width: 768, height: 1100 } });
p = await c.newPage();
await p.goto(B + "/", { waitUntil: "networkidle" });
await p.evaluate(() => document.querySelector("#studio-heading")?.scrollIntoView());
await p.waitForTimeout(900);
await p.screenshot({ path: "audit-out/D2-tablet-768.png" });
await c.close();

// 375 mobile
c = await b.newContext({ viewport: { width: 375, height: 1000 }, isMobile: true, hasTouch: true });
p = await c.newPage();
await p.goto(B + "/", { waitUntil: "networkidle" });
await p.evaluate(() => document.querySelector("#studio-heading")?.scrollIntoView());
await p.waitForTimeout(900);
await p.screenshot({ path: "audit-out/D3-mobile-375.png" });
await c.close();

// reduced motion
c = await b.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: "reduce" });
p = await c.newPage();
await p.goto(B + "/", { waitUntil: "networkidle" });
await p.evaluate(() => document.querySelector("#studio-heading")?.scrollIntoView());
await p.waitForTimeout(900);
await p.screenshot({ path: "audit-out/D5-reduced-motion.png" });
await c.close();

// 200% zoom
c = await b.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
p = await c.newPage();
await p.goto(B + "/", { waitUntil: "networkidle" });
await p.evaluate(() => { document.body.style.zoom = "200%"; });
await p.waitForTimeout(600);
const zoomOverflow = await p.evaluate(() => {
  const de = document.documentElement;
  return { scrollWidth: de.scrollWidth, clientWidth: de.clientWidth };
});
await p.screenshot({ path: "audit-out/zoom-200.png" });
await c.close();
console.log(JSON.stringify({ zoomOverflow }));
await b.close();
