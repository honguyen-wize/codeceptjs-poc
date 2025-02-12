Feature: API Orbituary Feature
    As a user
    I want to get a person obituary record from API

  Scenario Outline: I can get a person obituary record from API
   When I send the a GET request to the obituary API endpoint "<obituaryUrl>"
   Then I should see the response status code is "<expectedStatusCode>"
   And I should see the response status text is "<expectedStatusText>"
  
  Examples:
    | obituaryUrl                                                                   | expectedStatusCode    | expectedStatusText |
    | /us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379 | 200                   | OK                 |
    | /us/obituaries/chicagotribune/name/first-last-obituary?pid=999999999          | 404                   | Not Found          |
