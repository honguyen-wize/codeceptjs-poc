## Installation
- `npm install`

## Run the tests

### Run all the tests
- `npx codeceptjs run --steps`

### Run all the tests for Janus Beta
To run all tests related to Janus Beta, use the following command:
- `npx codeceptjs run --grep '@janus'`

### Run all of the Webdriver-based tests
This will run all tests tagged with @webdriver:
- `npx codeceptjs run --grep '@webdriver'`

### Run all of the REST-based tests
For tests that interact with REST APIs, use:
- `npx codeceptjs run --grep '@rest'`

### Run all the tests that are safe for production
To run tests that are safe to execute in a production environment, use:
- `npx codeceptjs run --grep '@prodsafe'`

### Run the BDD tests
- `npx codeceptjs run --features features/orbituary.feature --steps`
- `npx codeceptjs run --features features/orbituary_api.feature --steps`