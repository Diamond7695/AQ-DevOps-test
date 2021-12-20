
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(5000)
})
test(`click the Draw button that will show choices`, async ()=>{
    await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed
    expect(displayed).toBe(true)
})
test("Add button that shows bots", async()=>{
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.xpath('(/button[test( ="add to Duo"])[1]')).click()
})