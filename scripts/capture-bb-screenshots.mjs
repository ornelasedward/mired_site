import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/images/case-studies/because-bitcoin");

const captures = [
  { url: "https://becausebitcoin.com/", name: "becausebitcoin-home", wait: 4000, fullPage: false },
  { url: "https://bbterminal.com/", name: "bb-terminal-home", wait: 4000, fullPage: false },
  { url: "https://bbterminal.com/", name: "bb-terminal-full", wait: 4000, fullPage: true },
  { url: "https://www.bbtraderx.com/dashboard", name: "bb-traderx-dashboard", wait: 5000, fullPage: false },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});

for (const { url, name, wait } of captures) {
  const page = await context.newPage();
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(wait);
    await page.screenshot({
      path: path.join(outDir, `${name}.png`),
      fullPage: capture.fullPage ?? false,
    });
    console.log(`Captured ${name}`);
  } catch (err) {
    console.error(`Failed ${name}:`, err.message);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log("Done");
