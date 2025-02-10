Feature ('Guestbook Feature');

Scenario('I can create a guest book entry', async ({I, personOrbituaryPage}) => {
    // ======= TEST DATA =======
    const expectedDecedentName = 'Virginia';
    const guestbookEntryData = {
        message: 'I am so sorry for the loss',
        senderName: 'QA Auto',
        senderEmail: 'qatest@gmail.com'
    };
    const guestbookSuccessMessageText = 'Please allow 24 hours for your entry to be reviewed for appropriate content.'

    // ======= TEST STEPS =======
    // 1. Open the page
    I.amOnPage('/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379')
    personOrbituaryPage.waitForDecedentNameHeading()

    // 2. Assert that the decedent's first name appears in the Name section
    personOrbituaryPage.verifyDecedentNameIsDisplayed(expectedDecedentName)

    // 3&4. Leave a Guest Book entry
    personOrbituaryPage.createGuestBookEntry(guestbookEntryData);

    // 5. Verify if the Guest Book entry is created
    personOrbituaryPage.verifyIfTheGuestBookEntryIsCreated(guestbookSuccessMessageText)
})