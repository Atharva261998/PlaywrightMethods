
class LoginPage{

    constructor(page)
    {
        this.page=page;
        this.username=page.locator("[type='email']");
        this.password=page.locator("[type='password']");
        this.loginButton=page.locator("[name='login']")
    }

    async goto()
    {
       await  this.page.goto("https://rahulshettyacademy.com/client/")
    }

    async validCred(userName,password)
    {
        await this.username.fill(userName);
        await this.password.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle')
    }

}

module.exports={LoginPage}












// class LoginPage{
//     constructor(page)
//     {
//         this.page=page;
//         this.userName=page.locator("[type='email']");
//         this.password=page.locator("[type='password']");
//         this.loginButton=page.locator("[name='login']");
//     }
//     async goto(){
//         await this.page.goto("https://rahulshettyacademy.com/client/")
//     }

//     async validCredintials(userName,password){
//        await this.userName.fill();
//        await this.password.fill();
//        await this.loginButton.click();
// }
// }

// module.export={LoginPage};

//{ waitUntil: 'domcontentloaded' }