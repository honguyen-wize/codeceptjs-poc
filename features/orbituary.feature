Feature: Orbituary Feature
    In order to leave a message for the deceased
    As a user
    I want to be able to leave a message to the guest book

  Scenario: I can create a guest book entry
    Given I get a Janus Person Record
    When I am on the Orbituary page
    Then I should see the Name section on the Orbituary page
    And I should see the decedent first name appears in the Name section
    When I leave a Guest Book entry with message "I am so sorry for the loss", senderName "QA Auto", and senderEmail "qatest@gmail.com"
    Then I should see the message "Please allow 24 hours for your entry to be reviewed for appropriate content." in the review page
  