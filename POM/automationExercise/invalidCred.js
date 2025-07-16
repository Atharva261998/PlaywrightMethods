const {expect}=require('@playwright/test')

exports.invalidCred=

class invalidCred{

    constructor(page){
        this.page=page;
        this.loginButton=page.locator('.fa.fa-lock');
        this.inputEmail=page.locator("input[type='email']");
        this.inputPassword=page.getByPlaceholder('Password');
        this.logButt=page.getByRole('button',{name:'Login'});
       this.errorMessage=page.getByText('Your email or password is incorrect!')

    }

    async hitURL(){
        await this.page.goto('https://automationexercise.com/')
    }

    async invalidCred(email,password){
        await this.loginButton.click();
        await this.inputEmail.first().fill(email);
        await this.inputPassword.fill(password);
        await this.logButt.click();
        await expect(this.errorMessage).toBeVisible();
    }


}