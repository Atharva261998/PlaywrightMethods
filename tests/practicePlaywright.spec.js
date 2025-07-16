const {test,expect}= require('@playwright/test');
const {LoginPage}=require('../POM/loginPage')
const{Popup}=require("../POM/handlePopup")
const{CheckOut}=require("../POM/checkOut")
const dataset=JSON.parse(JSON.stringify(require("../utils/practicePlaywright.json")))


test("navigae to the webpage",async({page})=>{
    //open the webPage

    //login 
   

   const loginpage= new LoginPage(page);

   await loginpage.goTo();
   await loginpage.loginCred(dataset.username,dataset.password)

    //handle popup

    const popup=new Popup(page)
    await popup.handle();
    

    //checkout

    const check=new CheckOut(page)
    await check.addToCart(dataset.text)

   
    //add item by playwright method 

    //go to cart
    await page.locator(".shopping_cart_link").click();

    //checkout
    await page.getByRole("button",{name:"Checkout"}).click();

    //checkOut Info
    const firstName="Atharva";
    const postalCode="400709";
    await page.locator("#first-name").fill(firstName);
    await page.locator("#postal-code").fill(postalCode);

    //continue button
    await page.getByRole("button",{name:"Continue"}).click();
    

})

