const {test,expect,chromium}=require('@playwright/test');
import { amazonLogin } from '../POM/amazonLogin';
import { addProductAmazon } from '../POM/addProductAmazon';
test('login to amazon',async({page})=>{
    
//login to amazon 
 const emailId='athukulk@gmail.com';
 const pass='Rogerfederer@1998';

 const name="GFitbit Versa 4 Fitness Smartwatch with Daily Readiness, GPS, 24/7 Heart Rate, 40+ Exercise Modes, Sleep Tracking and more, Pink Sand/Copper Rose, One Size (S & L Bands Included)";


    const amazonlogin=new amazonLogin(page);
    await amazonlogin.goto();
    await amazonlogin.loginPage(emailId,pass)

     
    const addProduct= new addProductAmazon(page)
    await addProduct.selectProduct(name);
  

})



