const{test,expect}=require('@playwright/test')

test('start automation',async({page})=>{
   await page.goto("https://demoblaze.com/")
   await page.title();
   await expect(page).toHaveTitle("STORE")
   await expect(page).toHaveURL("https://demoblaze.com/")
})

test('second test execution',async({page})=>{
   await page.goto("https://www.amazon.com")
})