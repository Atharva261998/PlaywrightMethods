const {test,expect}=require("@playwright/test")

test("hiddenelement",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    // await page.goto("https://www.google.com")
    // await page.goBack();
    // await page.goForward();
    // await page.pause();

    //handeling the hidden elements
    console.log("element is visible",await expect(page.locator(".inputs.displayed-class")).toBeVisible());
    await page.locator("#displayed-text").screenshot({path:"screenShot.png"})
    await page.getByRole("button",{name:"Hide"}).click();
    await expect(page.locator(".inputs.displayed-class")).toBeHidden();

    //handeling the alert popups using playwright methos on
    
    await page.locator("#alertbtn").click();
    await page.on("alert popup",alert=> alert.accept());

    await page.locator("#confirmbtn").click();
    await page.on("confirm",confirm =>confirm.dismiss());

    //handeling the frames atteched to the main browser page
    const framePage=await page.frameLocator("#courses-iframe")
    await framePage.locator("li a[href='lifetime-access']:visible").click();
    const text=await framePage.locator(".text h2").textContent();
     console.log(text.split(" ")[1])

})

test("Visual Testing",async({page})=>{
    await page.goto("https://www.google.com")

    expect( await page.screenshot()).toMatchSnapshot('landing.png')
})