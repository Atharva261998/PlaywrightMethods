const {test,expect}=require('@playwright/test')
import { login } from '../POM/login';
import { home } from '../POM/home';

test('login functionalility',async({page})=>{
    //login
    const newLogin=new login(page)
     await newLogin.hitURL();

     await newLogin.validCredentials('Atharva@1998','Test@123')

     //home
     const newHome=new home(page);
     await newHome.selectItem('Sony xperia z5')
     
})