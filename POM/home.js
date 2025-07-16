exports.home=
class home{
    constructor(page){
        this.page=page;
        this.productList=page.locator("//div[@class='col-lg-4 col-md-6 mb-4']//h4//a");
        this.addToCartButton=page.getByRole('button',{name:'Add to cart'})
    }

   async selectItem(productName) {
        // const count = await this.productList.count();
        // for (let i = 0; i < count; i++) {
        //     const text = await this.productList.nth(i).textContent();
        //     if (text.trim() === productName) {
        //         await this.productList.nth(i).click();
        //         break;
        //     }
        // }

      const count=await this.productList.count();
      for(let i=0;i<count;i++){
        const text=await this.productList.nth(i).textContent();
        if(text.trim() === productName){
            await this.productList.nth(i).click();
            break;
        }
      }

      
     }

}