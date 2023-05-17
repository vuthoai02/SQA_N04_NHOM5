// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('FUNC_008', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('FUNC_008', async function() {
    await driver.get("https://e-energy.netlify.app")
    await driver.findElement(By.id("search")).click()
    await driver.findElement(By.id("search")).sendKeys("PE5245n34")
    await driver.findElement(By.css(".MuiButtonBase-root:nth-child(2) > .MuiSvgIcon-colorPrimary")).click()
    assert(await driver.findElement(By.css(".MuiTableRow-hover:nth-child(1) > .MuiTableCell-root:nth-child(1)")).getText() == "Vũ Minh Hiếu")
  })
})
