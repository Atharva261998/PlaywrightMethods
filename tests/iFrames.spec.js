const {test,expect}=require('@playwright/test')

test.skip('handle iFrames',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const allFrames= await page.frames()
    const countOfAllFrames=await allFrames.length;
    console.log(countOfAllFrames)

    const frame= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});

    await frame.locator("input[name='mytext1']").fill('Atharva QA lead ')
    await page.waitForTimeout(5000)
})

test('nested iFrame',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frame3=await page.frames({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})

    await frame3.locator('').fill("AtharvaQa Lead")

    const nestedFrame=await frame3.childFrames();// it will give the array
    await nestedFrame[0].locator('').check();


})