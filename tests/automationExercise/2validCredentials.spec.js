const{test,expect}=require('@playwright/test')
const { validLogin } = require('../../POM/automationExercise/validLogin')

test('login with valid credential',async({page})=>{
    const email='atharvak@gmail.com';
    const password='Atharva@123'
    const validCred=new validLogin(page);

    await validCred.hitURL();
    await validCred.validLogin(email,password)

})