const { expect } = require('@playwright/test');


exports.validLogin=
class validLogin{

    constructor(page){
        this.page=page;
        this.homePage=page.locator('#slider');
        this.loginButton=page.locator('.fa.fa-lock');
        this.loginToYourAcc=page.locator('.login-form h2');
        this.inputEmail=page.locator("input[type='email']");
        this.inputPassword=page.getByPlaceholder('Password');
        this.logButt=page.getByRole('button',{name:'Login'});
        this.loginSuccess=page.locator('.nav.navbar-nav a b')
        this.deleteAcc=page.locator("a[href='/delete_account']");
        this.verifyDelete=page.locator('h2 b')

        
    }

    async hitURL(){
        await this.page.goto("https://automationexercise.com/")
    }

    async validLogin(email,password){
        await expect(this.homePage).toBeVisible();
        await this.loginButton.click();
        await expect(this.loginToYourAcc).toBeVisible();
        await this.inputEmail.first().fill(email)
        await this.inputPassword.fill(password)
        await this.logButt.click();
        await expect(this.loginSuccess).toBeVisible();
        await this.deleteAcc.click();
        await expect(this.verifyDelete).toBeVisible();

    }
}