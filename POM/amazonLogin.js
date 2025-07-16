  
exports.amazonLogin=
  class amazonLogin {

    constructor(page){
        this.page=page;
        this.button=page.getByRole('button',{name:'Continue shopping'});
        this.hover=page.getByText('Account & Lists');
        this.clickSignIn=page.locator("div[id='nav-flyout-ya-signin'] span");
        this.email=page.locator('#ap_email_login');
        this.contttinueButton=page.locator('.a-button-input')
        this.password=page.locator('#ap_password');
        this.finalSignIn=page.getByRole('button',{name:'Sign in'})
        
    }

    async goto(){
        await this.page.goto('https://www.amazon.com')
    }

    async loginPage(emailID,Password){
        await this.button.click();
        await this.hover.hover();
        await this.clickSignIn.click();
        await this.email.fill(emailID);
        await this.contttinueButton.click();
        await this.password.fill(Password)
        await this.finalSignIn.click();
    }


  }