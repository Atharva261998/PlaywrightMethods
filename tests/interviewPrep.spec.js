const {test}=require("@playwright/test")

test("first test",async({browser})=>{
    const Browser=await browser.newContext();
    const page=await Browser.newPage();


    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    const button= page.locator("#openwindow");

    // const [newPage]=await Promise.all([
    //     Browser.waitForEvent('page'),
    //     button.click()
    // ])

    const [newPage]=await Promise.all([
        Browser.waitForEvent('page'),
        button.click()
    ])
   
    await newPage.getByRole("button",{name:"Access all our Courses"})
    // await page.locator(".radioButton").first().click();
    // const drop=await page.locator("#autocomplete").pressSequentially("ind");
    // await drop.selectOption("India")
    // // await page.getByRole("button",{name:"India"}).click();
    // await page.locator("#dropdown-class-example").selectOption("option1");
    // await page.pause();
})