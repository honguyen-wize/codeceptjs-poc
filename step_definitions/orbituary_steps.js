const { I,  personOrbituaryPage} = inject();

let personOrbituaryData

Given('I get a Janus Person Record', async () => {
  personOrbituaryData = await I.getJanusPersonRecord()
})

When('I am on the Orbituary page', () => {
  I.amOnPage('/us/obituaries/chicagotribune/name/roger-buss-obituary?pid=197843617')
});

Then('I should see the Name section on the Orbituary page', async () =>{
  personOrbituaryPage.waitForDecedentNameHeading()
});

Then('I should see the decedent first name appears in the Name section', async () => {  
  personOrbituaryPage.verifyDecedentNameIsDisplayed(personOrbituaryData.FirstName)
})

When ('I leave a Guest Book entry with message {string}, senderName {string}, and senderEmail {string}', async (message, senderName, senderEmail) => {
  const guestbookEntryData = {
    message: message,
    senderName: senderName,
    senderEmail: senderEmail
  }
  personOrbituaryPage.createGuestBookEntry(guestbookEntryData);
})

Then('I should see the message {string} in the review page', async (guestbookSuccessMessageText) => {
  personOrbituaryPage.verifyIfTheGuestBookEntryIsCreated(guestbookSuccessMessageText)
})
