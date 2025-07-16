const {expect}=require('@playwright/test');

exports.searchProduct=

class searchProduct{

    constructor(page){
        this.page=page;
        this.productLink=page.locator("div ul a[href='/products']")
        this.productPage=page.locator('.title.text-center')
        this.searchProduct=page.locator('#search_product')
        this.searchButtonClick=page.locator('#submit_search')
        this.productContent=page.locator(".productinfo.text-center p ")
    }

    async goto(){
        await this.page.goto("https://automationexercise.com/")
    }

    async searchProducts(){
        await this.productLink.click();
        await this.page.waitForTimeout(5000);

        await expect(this.productPage).toHaveText('All Products')
        await this.searchProduct.fill('Men Tshirt')
        await this.searchButtonClick.click();
        await expect(this.productContent).toBeVisible();
        await this.page.waitForTimeout(3000)

    }


}