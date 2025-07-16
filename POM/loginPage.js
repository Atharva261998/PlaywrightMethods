class LoginPage{

    constructor(page){
        this.page=page;
        this.userName=page.locator("#user-name");
        this.passWord= page.getByPlaceholder("Password");
        this.button= page.getByRole("button",{name:'Login'});
    }
    async goTo(){
        await this.page.goto("https://www.saucedemo.com/")
    }

    async loginCred(username,password){
        await this.userName.fill(username);
        await this.passWord.fill(password);
        await this.button.click();

    }

}

module.exports={LoginPage}