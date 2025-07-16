exports.login=

class login{
    constructor(page){
        this.page=page;
        this.loginLink="#login2";
        this.userId='#loginusername';
        this.userPassword='#loginpassword';
        this.loginButton=page.getByRole('button',{name:'Log in'})

    }

    async hitURL(){
        await this.page.goto("https://demoblaze.com/")
    }

    async validCredentials(username,password){
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.userId).fill(username);
        await this.page.locator(this.userPassword).fill(password);
        await this.loginButton.click();
    }
}