const { I } = inject();

class personOrbituaryPage {
  // ======= LOCATORS =======
  
  constructor() {
    this.decedentNameHeading = '[data-component="NameHeadingText"]',
    this.guestBookForm = {id: 'guestbook-form'},
    this.guestBookFormFields = {
        guestBookFormMessageTextField: 'textarea[name="_GuestbookForm_Message"]',
        guestbookSenderNameInput: 'input[name="_GuestbookForm_From"]',
        guestbookSenderEmailInput: 'input[name="_GuestbookForm_Email"]',
        guestBookFormSubmitButton: 'button[data-component="AffiliateGuestbookSubmitButton"]'
    },
    this.guestBookSuccessMessage = '[data-component="AffiliateGuestbookSuccessBox"] p'
  }
  
  // ======= TEST METHODS =======
  waitForDecedentNameHeading() {
    I.waitForElement(this.decedentNameHeading)
  }

  verifyDecedentNameIsDisplayed(decedentName) {
    I.see(decedentName, this.decedentNameHeading)
  }

  createGuestBookEntry(guestBookData) {
    // Scroll to the Guest Book form
    I.scrollTo(this.guestBookForm)

    // Fill out the form fields
    I.fillField(this.guestBookFormFields.guestBookFormMessageTextField, guestBookData.message)
    I.fillField(this.guestBookFormFields.guestbookSenderNameInput, guestBookData.senderName)
    I.fillField(this.guestBookFormFields.guestbookSenderEmailInput, guestBookData.senderEmail)

    // Submit the form
    I.forceClick(this.guestBookFormFields.guestBookFormSubmitButton)
  }

  verifyIfTheGuestBookEntryIsCreated (guestbookSuccessMessageText) {    
    I.waitForVisible(this.guestBookSuccessMessage)
    I.see(guestbookSuccessMessageText, this.guestBookSuccessMessage)
  }
}

// For inheritance
module.exports = new personOrbituaryPage();
