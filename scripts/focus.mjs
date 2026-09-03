import { chromium } from "playwright";
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const c = await b.newContext({ viewport: { width: 1440, height: 1000 } });
const p = await c.newPage();
await p.goto("http://localhost:4312/", { waitUntil: "networkidle" });
await p.waitForTimeout(600);
const order = [];
let hit = -1;
for (let i = 0; i < 16; i++) {
  await p.keyboard.press("Tab");
  const info = await p.evaluate(() => {
    const a = document.activeElement;
    return { label: a?.getAttribute("aria-label") || a?.textContent?.trim().slice(0, 34), inStudio: !!a?.closest("section[aria-labelledby='studio-heading']") };
  });
  order.push(`${i + 1}. ${info.inStudio ? "[studio] " : ""}${info.label}`);
  if (info.inStudio && info.label?.includes("SyncHearts") && hit < 0) {
    hit = i + 1;
    await p.evaluate(() => document.activeElement?.scrollIntoView({ block: "center" }));
    await p.waitForTimeout(1200);
    await p.screenshot({ path: "audit-out/D4-keyboard-focus.png" });
  }
}
console.log(order.join("\n"));
await b.close();
