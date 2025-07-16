// // @ts-check
// import { defineConfig, devices } from '@playwright/test';
// import { on } from 'events';

// import fs from 'fs';

// const resultsDir = 'test-results';

// if (fs.existsSync(resultsDir)) {
//   fs.rmSync(resultsDir, { recursive: true, force: true });
// }


// export default defineConfig({
//   testDir: './tests',
//  timeout:60000,
//  expect:{
//   timeout: 5000
//  },
//  reporter:'html',
//  projects:[
//   {
//     name:'chromium',
//     use: {
//       browserName:"webkit",
//       headless:false,
//       screenshot:'on',
//       video:'retain-on-failure',
//       trace:'on',
//       viewport:{width:720,height:720},
//       // ...devices["iPhone 11"],
//       ignoreHTTPSErrors:true,
//       // permissions:['geolocations']
//      }
//   },
//   //  {
//   //   name:'firefox',
//   //   use:{
//   //     browserName:"firefox",
//   //     headless:false,
//   //   }
//   // }
//  ]
  

 
// });



