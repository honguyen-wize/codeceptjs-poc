Feature('Guest Book Feature');

Scenario('Guest Book Test',  async ({ I }) => {
    // ======= TEST DATA =======
    const expectedDecedentFirstName = 'Virginia'
    const guestbookMessageText = 'I am so sorry for the loss'
    const guestbookSenderName = 'QA Auto'
    const guestbookSenderEmail = 'qatest@gmail.com'
    const guestbookSuccessMessageText = 'Please allow 24 hours for your entry to be reviewed for appropriate content.'

    // ======= LOCATORS =======
    const decedentNameHeadingLocator = '[data-component="NameHeadingText"]'
    const guestBookFormLocator = {id: 'guestbook-form'}
    const guestBookFormMessageTextFieldLocator = 'textarea[name="_GuestbookForm_Message"]'
    const guestbookSenderNameInputLocator = 'input[name="_GuestbookForm_From"]'
    const guestbookSenderEmailInputLocator = 'input[name="_GuestbookForm_Email"]'
    const guestBookFormSubmitButtonLocator = 'button[data-component="AffiliateGuestbookSubmitButton"]'
    const guestBookSuccessMessageLocator = '[data-component="AffiliateGuestbookSuccessBox"] p'
    

    // ======= TEST STEPS =======
    // 1. Open the page
    I.amOnPage('/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379')
    I.waitForElement(decedentNameHeadingLocator)

    // 2. Assert that the decedent's first name appears in the Name section
    I.see(expectedDecedentFirstName, decedentNameHeadingLocator)

    // 3. Scroll down until the Guest Book is visible
    I.scrollTo(guestBookFormLocator)

    // 4. Leave a Guest Book entry
    I.fillField(guestBookFormMessageTextFieldLocator, guestbookMessageText)
    I.fillField(guestbookSenderNameInputLocator, guestbookSenderName)
    I.fillField(guestbookSenderEmailInputLocator, guestbookSenderEmail)
    I.forceClick(guestBookFormSubmitButtonLocator)
    I.waitForElement(guestBookSuccessMessageLocator)
    I.see(guestbookSuccessMessageText, guestBookSuccessMessageLocator)
});
