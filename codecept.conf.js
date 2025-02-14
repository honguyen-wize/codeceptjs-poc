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
    REST: {
      endpoint: 'https://www.qa-legacy.com',
      defaultHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      prettyPrintJson: true
    },
    ChaiWrapper: {
      require: 'codeceptjs-chai'
    },
    SQLHelper: {
      require: './helpers/SQLHelper.js',
    }
  },
  include: {
    I: './steps_file.js',
    personOrbituaryPage: "./pages/PersonOrbituaryPage.js",
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: [
      './step_definitions/orbituary_steps.js', 
      './step_definitions/orbituary_api_steps.js'
    ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'codeceptjs-poc'
}