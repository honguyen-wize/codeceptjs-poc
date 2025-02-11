const { I } = inject();
// Add in your custom step files

Given('I have a defined step', () => {
  console.log('===I have a defined step')
  I.amOnPage('/us/obituaries/chicagotribune/name/roger-buss-obituary?pid=197843617')
  // TODO: replace with your own step
});

Then('I see the element', () =>{
  I.waitForElement('[data-component="NameHeadingText"]')
  console.log('===I see NameHeadingTextg')
});