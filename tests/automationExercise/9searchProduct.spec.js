const{test}=require('@playwright/test')
const { searchProduct } = require('../../POM/automationExercise/searchProduct')

test('search Product',async({page})=>{

   const search= new searchProduct(page)
   await search.goto()
   await search.searchProducts();
})