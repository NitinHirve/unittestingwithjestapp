/**
 * 
 * Test file extentions  : 
 * 
 *  -  .test.js
 *  -  .spec.js
 *  -  folder( __test__ ) = we can add .js files in this folder and it will be auto detect as test files.
 * 
 * Priority order to get the Elements :
 * 
 *  1. byRole
 *  2. byLabelText
 *  3. byPlaceholderText
 *  4. byText
 *  5. byDisplayValue
 *  6. byAltText
 *  7. byTitle
 *  8. byTestId 
 * 
 * Roles :
 * 
 * - h1 to h6 - heading
 * - input = textbox
 * - button = button
 * - <ul> = list
 * - <li> - listitem
 * 
 * 
 * Type of Query :
 * 
 * getBy...  - 0 Matches - Throw error
 * queryBy...- 0 Matches - Return nul
 * findBy... - 0 Matches - Throw error - Retry (Async/Await)- Yes
 * 
 * 
 * Test driven development :
 * 
 *  - Write text cases first and then develop the functionality.
 * 
 * premitive type checks  = toBe() //boolean, string,number,etc...
 * non-premitive type checks = toEqual() //Objects, arrays, etc...
 * 
 * 
 * React testing library fro API testing : 
 * 
 *  - Mock Service Worker
 * 
 * 
 * For debugging the rendered app : 
 * 
 * - screen.debug();
 * 
 */