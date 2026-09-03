import { chromium } from "playwright";
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const c = await b.newContext({ viewport: { width: 1440, height: 1000 } });
const p = await c.newPage();
await p.goto("http://localhost:4312/", { waitUntil: "networkidle" });
await p.waitForTimeout(800);
const y = await p.evaluate(() => {
  const svg = document.querySelector(".stage-svg");
  return svg ? window.scrollY + svg.getBoundingClientRect().top - 240 : 700;
});
await p.evaluate((y) => window.scrollTo(0, y), y);
await p.waitForTimeout(900);
await p.screenshot({ path: "audit-out/D1-desktop-desk.png" });
await b.close();
