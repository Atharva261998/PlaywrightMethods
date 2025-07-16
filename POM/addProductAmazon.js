const { expect } = require("allure-playwright");

exports.addProductAmazon=

class addProductAmazon{

    constructor(page){
        this.page=page;
        this.watch=page.locator("img[alt$='Watches'][src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Watches_1x._SY116_CB566164844_.jpg']");
        this.productBox=page.locator(".a-link-normal.s-line-clamp-2.s-link-style.a-text-normal")

        this.colorProduct=page.locator("ul[class$='a-unordered-list a-nostyle a-button-list a-declarative a-button-toggle-group a-horizontal dimension-values-list'] [data-asin='B0CG6NR413']")
    }

    async selectProduct(productName){
        const product= this.page.waitForSelector('.a-link-normal._fluid-quad-image-label-v2_style_centerImage__30wh-.aok-block.image-window')
        // await expect(product).toBeVisible()
        await this.watch.click();

        const count=await this.productBox.count();

        for(let i=0;i<count;i++){
            const text= await this.productBox.nth(i).textContent();
            if(text.trim().includes(productName.trim())){
                await this.productBox.nth(i).click();
                break;
            }
        }
        await this.page.waitForSelector(".a-size-large.product-title-word-break")
        await this.colorProduct.click();
    } 
} 

