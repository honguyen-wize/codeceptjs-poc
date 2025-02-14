const { I } = inject();

let response

Given('I send the a GET request to the obituary API endpoint {string}', async (obituaryUrl) => {
    response = await I.sendGetRequest(obituaryUrl)
})


Then('I should see the response status code is {string}', async (expectedStatusCode) => {
    I.assertEqual(response.status, parseInt(expectedStatusCode))
})

Then ('I should see the response status text is {string}', async (expectedStatusText) =>{
    I.assertEqual(response.statusText, expectedStatusText)
})