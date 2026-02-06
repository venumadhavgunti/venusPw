import {test, expect} from '@playwright/test'
import { chromium, Browser, Page } from '@playwright/test'
test('login.spec.ts', async() => {
    const browser = await chromium.launch({ headless : false})
    const page = await browser.newPage()
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    //await page.pause()
    await page.locator('//*[@id = "username"]').fill('student')
    await page.locator('//*[@id = "password"]').fill('Password123')
  //  await page.waitForSelector('#submit', {timeout: 3000})
    await page.locator('//*[@id = "submit"]').click()
    await browser.close()
})