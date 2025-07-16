const {test,expect,chromium}=require('@playwright/test')

test('dropDown',async({page})=>{
    await page.goto("https://www.redbus.in/", { waitUntil: 'domcontentloaded' })

      await page.waitForTimeout(3000);

const fromInput = page.locator(".inputWrapper___017bdb");
  await fromInput.waitFor({ state: 'visible', timeout: 20000 });

// await fromInput.click();
await fromInput.fill('Pune', {delay: 100}); // mimic human typing

// Wait for dropdown option to appear and click it
const suggestion = page.locator('text=Pune'); // or a more specific locator
await suggestion.waitFor({state: 'visible'});
await suggestion.click();
})