const {test}=require('@playwright/test')
import { contactUs } from '../../POM/automationExercise/contactUs';

test('upload file',async({page})=>{
     
    const upload=new contactUs(page)
    const title=('Automation Exercise')
    const name='Atharva';
    const email='ath@gmail.com';
    const subject='history';
    await upload.goto();
    await upload.uploadFileFlow(title,name,email,subject)
    
})