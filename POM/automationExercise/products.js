const {expect}=require('@playwright/test')
exports.products=

    class products{

        constructor(page){
            this.page=page;
            this.title=page.getByText('head title');
            this.productButton=page.locator(".nav.navbar-nav i[class='material-icons card_travel']");
            this.allProductsVerify=page.locator(".title.text-center")
            this.viewProduct=page.locator('a[href="/product_details/1"]')
            this.productName=page.locator(".product-information h2")
            this.women=page.getByRole('link',{name:'Women'})
            this.dress=page.locator('#Women ul li')
        }

        async goto(){
            await this.page.goto('https://automationexercise.com/')
        }

        async verifyProducts(){
            await expect(this.page).toHaveTitle('Automation Exercise');
            await this.productButton.click();
            await expect(this.allProductsVerify).toBeVisible();
            await this.viewProduct.click();
            await expect(this.productName).toBeVisible()
            await this.women.click(); 
            // await this.dress.filter({hasText:'Dress'}).first().click();

            const count=await this.dress.count();
            for(let i=0;i<count;i++){
                const text=await this.dress.nth(i).textContent();
                if(text.trim()=== 'Dress'){
                    await this.dress.nth(i).click();
                    break;
                }
            }

        }
    }