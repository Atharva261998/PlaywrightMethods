const{test}=require('@playwright/test')
import { invalidCred } from '../../POM/automationExercise/invalidCred';

test('invalid cred',async({page})=>{
   const invalid= new invalidCred(page)
   const email='ath@gmail.com';
   const pass='ath@123'
   await invalid.hitURL();
   await invalid.invalidCred(email,pass);
})
