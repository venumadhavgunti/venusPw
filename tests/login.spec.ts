import { test, expect } from '@playwright/test'
import { chromium } from '@playwright/test'
test('login.spec.ts', async({page}) => {
  //test('login.spec.ts', async() => {
    const browser = await chromium.launch({ headless : false})
    //const page = await browser.newPage()
   const newPage = await page.context().newPage() 
    await newPage.goto('https://practicetestautomation.com/practice-test-login/')
    await newPage.pause()
    await newPage.locator('//*[@id = "username"]').fill('student')
    await newPage.locator('//*[@id = "password"]').fill('Password123')
  //  await page.waitForSelector('#submit', {timeout: 3000})
    await newPage.locator('//*[@id = "submit"]').click()
    await browser.close()
})