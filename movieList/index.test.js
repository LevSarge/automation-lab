const {Builder, By, Capabilities} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Adding a movie', async () => {
    let addMovie = await driver.findElement(By)

    await addMovie.sendKeys('The Two Towers\n')

    await driver.sleep(2000)

    addMovie = await driver.findElement(By.css)
})

test('Deleting a movie', async () => {

})