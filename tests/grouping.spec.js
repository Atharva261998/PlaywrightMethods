const {test,expect}=require('@playwright/test')

test.beforeAll(async()=>{
    console.log('before all')
})

test.afterAll(async()=>{
    console.log('after all')
})

test.beforeEach(async()=>{
    console.log('after all')
})
test.afterEach(async()=>{
    console.log('after all')
})

test.describe('group 1 result',()=>{
    test('1 test',async()=>{
   await  console.log('group 1 ')
})

test('2 test',async()=>{
   await  console.log('group 2 ')
})

})

test.describe('group 2 result',()=>{
    test('3 test',async()=>{
   await  console.log('group 3 ')
})

test('4 test',async()=>{
   await  console.log('group 4 ')
})
})

