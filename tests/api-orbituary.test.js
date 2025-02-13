Feature ('API Orbituary Feature')
    .tag('@rest')
    .tag("@janus")

let obituariesData = new DataTable(['obituaryUrl', 'expectedStatusCode', 'expectedStatusText'])
obituariesData.add(['/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379', 200, 'OK'])
obituariesData.add(['/us/obituaries/chicagotribune/name/first-last-obituary?pid=999999999', 404, 'Not Found'])

Data(obituariesData).Scenario ('I can get a person orbituary record from API', async ({I, current}) => {
    const response = await I.sendGetRequest(current.obituaryUrl)
    // console.log('response:', response)
    I.assertEqual(response.status, current.expectedStatusCode)
    I.assertEqual(response.statusText, current.expectedStatusText)
})