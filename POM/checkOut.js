class CheckOut{
    constructor(page){
        this.page=page
        this.inventoryItem=page.locator(".inventory_item")

    }

    async addToCart(text){
        const inventoryCount=await this.inventoryItem.count();

        for(let i=0;i<inventoryCount;i++){
            if(await this.inventoryItem.nth(i).locator("#item_4_title_link").textContent()=== text){
                await this.inventoryItem.nth(i).locator("#add-to-cart-sauce-labs-backpack").click();
                break;
            }
        }

    }
}

module.exports={CheckOut}