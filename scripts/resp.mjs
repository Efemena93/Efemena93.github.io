import { chromium } from "playwright";
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const jobs = [
  [1440, 1000, "D1-desktop-1440", false, 0],
  [768, 1100, "D2-tablet-768", false, 1],
  [375, 900, "D3-mobile-375", true, 1],
];
for (const [w, h, name, mobile, artifact] of jobs) {
  const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: mobile, hasTouch: mobile });
  const p = await c.newPage();
  await p.goto("http://localhost:4312/", { waitUntil: "networkidle" });
  await p.waitForTimeout(800);
  if (artifact) {
    await p.evaluate(() => {
      const a = document.querySelectorAll("article")[0];
      window.scrollTo(0, window.scrollY + a.getBoundingClientRect().top - 90);
    });
    await p.waitForTimeout(700);
  }
  await p.screenshot({ path: `audit-out/${name}.png` });
  await c.close();
}
// reduced motion, at the desk
const c = await b.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: "reduce" });
const p = await c.newPage();
await p.goto("http://localhost:4312/", { waitUntil: "networkidle" });
await p.waitForTimeout(900);
await p.evaluate(() => {
  const s = document.querySelector(".stage-svg");
  window.scrollTo(0, window.scrollY + s.getBoundingClientRect().top - 240);
});
await p.waitForTimeout(800);
await p.screenshot({ path: "audit-out/D5-reduced-motion.png" });
await c.close();
await b.close();
console.log("ok");
