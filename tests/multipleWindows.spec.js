//for multiple browsers/windows/pages we have to create our own page using browser context

const {test,expect,chromium}=require('@playwright/test')

/**
 * first need to launch new browser using launch method present in chromium 
 * then create new context
 * then new page (we can create multiple pages)
 * 
 */
test('handeling multiple windows',async()=>{
    const myBrowser=await chromium.launch();
const myContext=await myBrowser.newContext();

const page1= await myContext.newPage();
const page2=await  myContext.newPage();
await page1.goto("https://www.amazon.com")
await expect(page1).toHaveTitle("Amazon.com");

await page2.goto("https://www.facebook.com")
await expect(page2).toHaveTitle("Facebook – log in or sign up");

// const allPages=myContext.pages();// this will return the no of pages present in the current context  
// console.log(allPages.length)  
})

test.only('multi tabs from single page',async()=>{
    const browser=await chromium.launch();
    const context= await browser.newContext();

    const page1=await context.newPage();

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")

    const page2= await Promise.all([
        context.waitForEvent('page'),
        page1.locator("//a[@href='http://www.orangehrm.com']").click()
    ])

    // await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ")
})