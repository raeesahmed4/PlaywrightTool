// Include playwright model
const {test,expect} =require('@playwright/test');
const { appendFile } = require('fs');
// Write a test
test('Validate Youtube Title', async({page})=>{

// Go to URL
await page.goto('https://www.youtube.com/')
// Search with Keys
await page.getByLabel('Accept the use of cookies and other data for the purposes described').click();
await page.getByPlaceholder('Search').click()
await page.getByPlaceholder('Search').fill('cypress by tester talk')
await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
await page.getByRole('button', { name: 'Search', exact: true }).click();
// Clcik on Play List
await page.getByRole('link', { name: 'Cypress by Testers Talk☑️' }).click();
// Validate the Title
await expect(page).toHaveTitle('Cypress Tutorial Full Course 2023 | Learn Cypress in 5 Hrs - YouTube')
})

