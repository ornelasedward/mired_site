import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/images/case-studies/comanche-comms");

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});

async function dismissCookie(page) {
  const cookieBtn = page.getByRole("button", { name: /got it/i });
  if (await cookieBtn.isVisible().catch(() => false)) {
    await cookieBtn.click();
    await page.waitForTimeout(500);
  }
}

const page = await context.newPage();

try {
  await page.goto("https://comanchecomms.com/", {
    waitUntil: "networkidle",
    timeout: 60000,
  });
  await page.waitForTimeout(4000);
  await dismissCookie(page);

  // Catalog: featured products grid
  const featured = page.locator("text=Featured Products").first();
  if (await featured.isVisible().catch(() => false)) {
    await featured.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
  }
  await page.screenshot({
    path: path.join(outDir, "comanche-catalog.png"),
    fullPage: false,
  });
  console.log("Captured comanche-catalog.png");
} catch (err) {
  console.error("Catalog capture failed:", err.message);
}

// Operations: product page with pricing/variants (cart/checkout tooling context)
const productPage = await context.newPage();
try {
  await productPage.goto("https://comanchecomms.com/products/hytera-hp782", {
    waitUntil: "networkidle",
    timeout: 60000,
  });
  await productPage.waitForTimeout(4000);
  await dismissCookie(productPage);

  await productPage.screenshot({
    path: path.join(outDir, "comanche-operations.png"),
    fullPage: false,
  });
  console.log("Captured comanche-operations.png (product page)");
} catch (err) {
  console.error("Product page failed, falling back to cart:", err.message);
  try {
    await productPage.goto("https://comanchecomms.com/cart", {
      waitUntil: "networkidle",
      timeout: 60000,
    });
    await productPage.waitForTimeout(3000);
    await dismissCookie(productPage);
    await productPage.screenshot({
      path: path.join(outDir, "comanche-operations.png"),
      fullPage: false,
    });
    console.log("Captured comanche-operations.png (cart)");
  } catch (cartErr) {
    console.error("Cart fallback failed:", cartErr.message);
  }
} finally {
  await productPage.close();
}

await page.close();
await browser.close();
console.log("Done");
