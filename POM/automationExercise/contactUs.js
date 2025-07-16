const {expect}=require('@playwright/test')
exports.contactUs=
class contactUs{

    constructor(page){
        this.page=page;
        this.contactUs=page.locator('li a i.fa.fa-envelope');
        this.verify=page.locator('div.contact-form h2.title.text-center ');
        this.name=page.locator(".form-group.col-md-6 input[name='name']");
        this.email=page.locator(".form-group.col-md-6 input[name='email']");
        this.subject=page.locator("div .form-group.col-md-12 input[name='subject']")
        this.fileButton=page.locator("input[name='upload_file']")
        this.submit=page.getByRole('button',{name:'submit'});
        
        

    }

    async goto(){
        await this.page.goto('http://automationexercise.com');

    }

    async uploadFileFlow(title,name,email,subject){
        await expect(this.page).toHaveTitle(title)
        await this.contactUs.click();
        await expect(this.verify).toBeVisible();
        await this.name.fill(name);
        await this.email.fill(email);
        await this.subject.fill(subject);
        await this.fileButton.setInputFiles('tests/uploadFiles/Atharva_Kulkarni_Resume_01.pdf')
        await this.submit.click();
         await this.page.waitForTimeout(1000);

    }
}