class paymentPage
{
    constructor(page)
    {
        //form fill
        this.cardNumber= page.locator(".input.txt.text-validated").first();
        this.dropDown1=page.locator(".input.ddl").first();
        this.dropDown2=page.locator(".input.ddl").last();
        //dynamic dropdown
        this.dynamicDrop=page.locator(".input.txt.text-validated").last();
        this.dropOptions=page.locator("section .ta-results.list-group.ng-star-inserted")

        //button click
        this.placeOrderButton=page.locator(".btnn.action__submit.ng-star-inserted")
        
        
    }
    async fillTheForm(cardNumber)
    {
        await this.cardNumber.fill(cardNumber);
        await this.dropDown1.selectOption("02");
        await this.dropDown2.selectOption("14");
    }

    async dynamicDropdown(countryName)
    {
        await this.dynamicDrop.pressSequentially("ind")
            
            await this.dropOptions.waitFor();
        
            const newCount=  await this.dropOptions.locator("button").count();
        
            for(let i=0;i<newCount;i++){
                if(await this.dropOptions.locator("button").nth(i).textContent() === countryName){
                    await this.dropOptions.locator("button").nth(i).click();
                    break;
                }
            }
    }

    async clickOnPlaceOrder()
    {
        await this.placeOrderButton.click();
    }
}

module.exports={paymentPage}