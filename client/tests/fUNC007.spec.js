// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('FUNC_007', function() {
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
  it('FUNC_007', async function() {
    await driver.get("https://e-energy.netlify.app/register")
    await driver.findElement(By.id(":r0:")).click()
    await driver.findElement(By.id(":r0:")).sendKeys("vuthoai")
    await driver.findElement(By.id(":r1:")).click()
    await driver.findElement(By.id(":r1:")).sendKeys("PE1434242")
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("123456")
    await driver.findElement(By.css(".MuiButton-root")).click()
    assert(await driver.findElement(By.id(":r2:-helper-text")).getText() == "Không được để trống!")
  })
})
