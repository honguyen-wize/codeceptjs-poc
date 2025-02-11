/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type personOrbituaryPage = typeof import('./pages/PersonOrbituaryPage.js');
type ChaiWrapper = import('codeceptjs-chai');
type SQLHelper = import('./helpers/SQLHelper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, personOrbituaryPage: personOrbituaryPage }
  interface Methods extends WebDriver, REST, ChaiWrapper, SQLHelper {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
