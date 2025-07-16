import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByAltText('Continue shopping').click();
  await page.getByPlaceholder('Search Amazon').fill('table tennis')
  await page.locator("input[value='Go']").click();

    await page.waitForSelector('.a-size-base-plus.a-spacing-none.a-color-base.a-text-normal');

  // const productNames=await page.$$('.a-size-base-plus.a-spacing-none.a-color-base.a-text-normal');
  // for(let i=0;i<productNames.length;i++){
  //   const allProductNames= await productNames[i].textContent();
  //   console.log(allProductNames)
  // }

  // const pName="JOOLA Infinity Edge"
  // const allProductsCart= await page.locator('.puis-card-container.s-card-container.s-overflow-hidden.aok-relative.puis-expand-height.puis-include-content-margin.puis.puis-v1pfvhdyb17azh26l1nclajlx70.s-latency-cf-section.puis-card-border');
  // const count=await allProductsCart.count();

  // for(let i=0;i<count;i++){
  //   const specialPName= allProductsCart.nth(i);
  //   const productText=await specialPName.textContent();
  //   if(productText?.includes(pName) ){
  //     await specialPName.locator('#a-autoid-3-announce').click();
  //   }
  //   break;
  // }

  const pNamePartial = "JOOLA Infinity Edge"; // Use a unique part of the name

const allProductsCart = page.locator('.puis-card-container');
const count = await allProductsCart.count();

for (let i = 0; i < count; i++) {
  const productCard = allProductsCart.nth(i);
  const productText = await productCard.textContent();

  if (productText?.includes(pNamePartial)) {
    console.log('✅ Product matched:', productText.trim());

    // Try to find an Add to Cart button inside this card
    const addToCartBtn = productCard.locator('input[type="submit"][value*="Add"]');

    if (await addToCartBtn.isVisible()) {
      await addToCartBtn.click();
      console.log('🛒 Added to cart!');
    } else {
      console.log('⚠️ Add to Cart button not found.');
    }
    break; // exit after finding the product
  }
}

});