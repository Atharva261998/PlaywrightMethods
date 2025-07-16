class checkOut{

    constructor(page)
    {
        
        this.checkOutButton= page.locator(".btn.btn-primary").last()
        // this.waiting=page.locator("div li").first()
        this.autoWait=page.waitForLoadState("networkidle")
        this.waitingFor=page.locator(".payment__types")
    }

    async clickOnCheckoutButton()
    {
        // await this.waiting.waitFor()
        await this.checkOutButton.click();
        await this.autoWait;
        await this.waitingFor.waitFor();


    }
}

module.exports={checkOut}