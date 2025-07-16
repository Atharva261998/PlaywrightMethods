const { expect } = require('@playwright/test');

exports.autoLogin=

class{

    constructor(page){
        this.page=page;
        //locators for register
        this.header=page.locator('.header-middle')
        this.signUp=page.getByRole('link',{name:' Signup / Login'})
        this.name=page.getByPlaceholder('Name')
        this.emailId=page.locator("input[name$='email'][data-qa$='signup-email']")
        this.signButton=page.getByRole('button',{name:'Signup'})

        //locators for account creation
        this.mrCheck=page.locator('#id_gender1');
        this.password=page.locator('#password');

        this.day=page.locator('#uniform-days');
        this.selectDate=page.locator('#days');

        this.month=page.locator('#uniform-months');
        this.selectMonth=page.locator('#months');

        this.year=page.locator('#uniform-years');
        this.selectYear=page.locator('#years')

        //address infirmation
        this.firstName=page.locator('#first_name')
        this.lastName=page.locator('#last_name')
        this.companyName=page.locator('#company')
        this.address=page.locator("input[name$='address1']");
        this.country=page.locator('#country');
        // this.countrySelect=page.locator('#country');
        this.state=page.locator('#state');
        this.city=page.locator('#city');
        this.zip=page.locator('#zipcode');
        this.mobileNo=page.locator('#mobile_number');
        this.createAccountButton=page.getByRole('button',{name:'Create Account'})
    }

    async goto(){
        await this.page.goto("https://automationexercise.com/")
    }

    async registerUser(name,email){
     await expect(this.header).toBeVisible()
     await this.signUp.click();
     await this.name.fill(name);
     await this.emailId.fill(email);
     await this.signButton.click();
    }
    async waitForMonthsDropdown() {
    // Wait explicitly for the dropdown to be visible (or attached)
    await this.month.waitFor({ state: 'visible' });
  }
    async accountCreation(password){
        await this.mrCheck.check();
        await this.password.fill(password);
        await this.day.click();
        await this.selectDate.selectOption({label:'7'})
        await this.month.click();
        await this.selectMonth.selectOption({value:'8'});
        await this.year.click();
        await this.selectYear.selectOption({label:'2021'})

    }
  

    async addressInfo(firstName,lastName,companyName,address1,stateName,zipCode,cityName,mobileNumber){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.companyName.fill(companyName);
        await this.address.fill(address1);
        await this.country.click();
        await this.country.selectOption({label:'India'});
        await this.state.fill(stateName);
        await this.city.fill(cityName);
        await this.zip.fill(zipCode)
        await this.mobileNo.fill(mobileNumber)
        await this.createAccountButton.click();
        
    }
}