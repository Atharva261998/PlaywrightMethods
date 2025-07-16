// @ts-check
import { defineConfig, devices } from '@playwright/test';

import fs from 'fs';

const resultsDir = 'test-results';

if (fs.existsSync(resultsDir)) {
  fs.rmSync(resultsDir, { recursive: true, force: true });
}


export default defineConfig({
  testDir: './tests',
  fullyParallel:false,
  workers:process.env.CI?1:undefined,
 timeout:200000,
 expect:{
  timeout: 10000
 },
reporter:"html",
  use: {
    browserName:"chromium",
    headless:false,
    trace: 'on-first-retry', 
    
   } 
 
});



