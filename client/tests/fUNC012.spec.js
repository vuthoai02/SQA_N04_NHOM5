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
    await driver.get("https://e-energy.netlify.app/")
    await driver.manage().window().setRect({ width: 992, height: 1095 })
    {
      const element = await driver.findElement(By.css(".MuiButton-contained"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css(".MuiButton-contained")).click()
    await driver.findElement(By.name("customerCode")).click()
    await driver.findElement(By.name("customerCode")).sendKeys("PE1125S23")
    await driver.findElement(By.name("customerName")).click()
    await driver.findElement(By.name("customerName")).sendKeys("Nguyễn Thị Phương")
    await driver.findElement(By.name("phoneNumber")).click()
    await driver.findElement(By.name("phoneNumber")).sendKeys("0123456789")
    await driver.findElement(By.name("address")).click()
    await driver.findElement(By.name("address")).sendKeys("Ngô Thỳ Nhậm, Hà Đông, Hà Nội")
    await driver.findElement(By.name("meterSeries")).click()
    await driver.findElement(By.name("meterSeries")).sendKeys("1234567")
    await driver.findElement(By.name("paymentCode")).click()
    await driver.findElement(By.name("paymentCode")).sendKeys("1234")
    await driver.findElement(By.name("stationCode")).click()
    await driver.findElement(By.name("stationCode")).sendKeys("124")
    await driver.findElement(By.name("businessChargeCode")).click()
    await driver.findElement(By.name("businessChargeCode")).sendKeys("123")
    await driver.findElement(By.name("taxCode")).click()
    await driver.findElement(By.name("taxCode")).sendKeys("1244")
    {
      const element = await driver.findElement(By.css(".css-5zrdtn"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    assert(await driver.findElement(By.css(".MuiTableRow-root:nth-child(3) > .MuiTableCell-root:nth-child(1)")).getText() == "Nguyễn Thị Phương")
  })
})
