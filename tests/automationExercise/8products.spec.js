const {test}=require('@playwright/test')
import { products } from '../../POM/automationExercise/products'

test('verify all products and product details',async({page})=>{

 const product=new products(page)
    await product.goto();
    await product.verifyProducts();
})