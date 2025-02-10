/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type personOrbituaryPage = typeof import('./pages/PersonOrbituaryPage.js');

declare namespace CodeceptJS {
  interface SupportObject { 
    I: I, 
    current: any,
    personOrbituaryPage: personOrbituaryPage }
  interface Methods extends WebDriver {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
