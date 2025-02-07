const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: '*/*test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.qa-legacy.com',
      browser: 'chrome',
      desiredCapabilities: {
        chromeOptions: {
          args: ['--window-size=1920,1080']
        }
      }
    },
  },
  include: {
    I: './steps_file.js',
    personOrbituaryPage: "./pages/PersonOrbituaryPage.js",
  },
  name: 'codeceptjs-poc'
}