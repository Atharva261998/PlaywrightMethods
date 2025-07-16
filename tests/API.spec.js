const {test,expect}=require('@playwright/test')

//we can test rest API with playwright for that playwright provides a fixture called request
//GET request
test('get API request to get the response',async({request})=>{
   const response= await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    //status code
    expect(response.status()).toBe(200)
})

test('another get request',async({request})=>{
    const myRequestTwo=await request.get("https://reqres.in/api/users/2")
    console.log(await myRequestTwo.json());
    expect( myRequestTwo.status()).toBe(200);
})

//POST request
//while sending the post request we need to send request payload as well
 var userId;
// test.only('Post request for creating the data',async({request})=>{
//     const postResponse=await request.post('https://reqres.in/api/users',
//                         {
//                             data:{ "name":"Atharva","age":"26"},
//                             headers:{"Accept":"Application/json"}
//                         }
        
        
//     )
//     console.log(await postResponse.json());
//     expect(postResponse.status()).toBe(201);

//     var res=await postResponse.json()
//     userId=res.id
// })

test.only('Post request for creating the data', async ({ request }) => {
  const postResponse = await request.post('https://reqres.in/api/users', {
    data: {
      name: "Atharva",  // ✅ lowercase "name"
      age: "26"
    },
    headers: {
      Accept: "application/json"
    }
  });


  const res = await postResponse.json();  // ✅ parse response once

  console.log(res); // show the full response
   userId = res.id; // ✅ access the generated ID

  console.log('🆔 Created user ID:', userId);
});
