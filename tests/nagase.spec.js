const {test,expect,chromium}=require('@playwright/test');
const { type } = require('os');
const { title } = require('process');

test('open URL and validate', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page1 = await context.newPage();

  try {
    await page1.goto("https://www.nagase.com", { waitUntil: 'domcontentloaded' });

    console.log("Waiting for menu buttons...");
    await page1.waitForSelector("//li[@class='menu-item-drawer']//button[@class='menu-title']", { timeout: 10000 });

    const headers = page1.locator("//li[@class='menu-item-drawer']//button[@class='menu-title']");
    const count = await headers.count();
    console.log("Menu count:", count);

    const newHeaders = [];
    for (let i = 0; i < count; i++) {
      const text = await headers.nth(i).innerText();
      newHeaders.push(text);
    }

    console.log("Menu titles:", newHeaders);

    // Validate title
    await expect(page1).toHaveTitle('Designing Businesses Through Innovation & Science | NAGASE');

  } catch (err) {
    console.error("❌ Test failed with error:", err);
  } finally {
    await browser.close(); // ensure clean close
  }
});
