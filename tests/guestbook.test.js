Feature ('Guestbook Feature')
    .tag('@webdriver')
    .tag("@guestbook")
    .tag("@janus")

Scenario('I can create a guest book entry', async ({I, personOrbituaryPage}) => {
    // ======= TEST DATA =======
    const personOrbituaryData = await I.getJanusPersonRecord()
    const guestbookEntryData = {
        message: 'I am so sorry for the loss',
        senderName: 'QA Auto',
        senderEmail: 'qatest@gmail.com'
    };
    const guestbookSuccessMessageText = 'Please allow 24 hours for your entry to be reviewed for appropriate content.'

    // ======= TEST STEPS =======
    // 1. Open the page
    I.amOnPage(`/us/obituaries/chicagotribune/name/${personOrbituaryData.FirstName}-${personOrbituaryData.LastName}-obituary?pid=${personOrbituaryData.PersonId}`)
    personOrbituaryPage.waitForDecedentNameHeading()

    // 2. Assert that the decedent's first name appears in the Name section
    personOrbituaryPage.verifyDecedentNameIsDisplayed(personOrbituaryData.FirstName)

    // 3&4. Leave a Guest Book entry
    personOrbituaryPage.createGuestBookEntry(guestbookEntryData);

    // 5. Verify if the Guest Book entry is created
    personOrbituaryPage.verifyIfTheGuestBookEntryIsCreated(guestbookSuccessMessageText)
}).tag('@prodsafe')