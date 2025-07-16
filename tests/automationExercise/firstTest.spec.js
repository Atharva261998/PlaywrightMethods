const{test,expect}=require('@playwright/test')
const{autoLogin}=require('../../POM/automationExercise/autoLogin')

test('register and verify',async({page})=>{

   const register= new autoLogin(page)
    const name='Atharva Kulkarni';
    const email='atharvak@gmail.com';
    const password='Atharva@123';
    const firstName="Atharva";
    const lastName="kulkarni";
    const company='Hexaware';
    const address1='loma it park';
    const stateName='maharashtra';
    const zipCode='400709';
    const cityName='Navi Mumbai';
    const MobileNumber='93487654876'

   await register.goto()

   await register.registerUser(name,email)
   await register.accountCreation(password);

   await register.addressInfo(firstName,lastName,company,address1,stateName,zipCode,cityName,MobileNumber)
   await register.waitForMonthsDropdown();

   await page.waitForTimeout(5000)
    
})