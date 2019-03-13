const generateTable = require('./lib/tables');

/**
 * IGNORE THE LINES ABOVE
 * PLEASE DO NOT EDIT LINES ABOVE
 */







/**
 * Write a function that converts grades into a string format
 * that shows grade out of 100, e.g. "76/100".
 * 
 * The function needs to return an ARRAY of strings.
 * 
 * @param {Array<number>} gradesArr (Example: [0.76, 0.45])
 * @return {Array<string>} (Example: ['76/100', '45/100'])
 */
function gradeOutOfHundred(gradesArr) {
    
}

/**
 * Write a function that sorts grades from highest to lowest
 * and shows grades in a string format like above, e.g. "76/100".
 * 
 * The function needs to return an ARRAY of strings.
 * 
 * @param {Array<*>} gradesArr (Example: [0.76, 0.45])
 * @return {Array<string>} (Example: ['76/100', '45/100'])
 */
function sortGrades(gradesArr) {
    
}

/**
 * Write a function that outputs an array of grades that are
 * passing (grades that are more than 50/100). Output needs to
 * show grades in a string format out of 100, e.g. "76/100".
 * 
 * The function needs to return an ARRAY of strings.
 * 
 * @param {Array<*>} gradesArr (Example: [0.76, 0.45])
 * @return {Array<string>} (Example: ['76/100', '45/100'])
 */
function showOver50(gradesArr) {
    
}

/**
 * Write a function that outputs the average grade. Calculate your
 * average based on the values of gradeArr,
 * i.e. calculate average based on [0.76, 0.45, ...].
 * 
 * The function needs to return a NUMBER rounded to 3 decimal places.
 * 
 * @param {Array<*>} gradesArr (Example: [0.76, 0.45])
 * @return {number}
 */
function calculateAverage(gradesArr) {
    
}






/**
 * IGNORE THE FOLLOWING LINES
 * PLEASE DO NOT EDIT LINES BELOW
 */

/**
 * The array below shows the grades of all 10 students in
 * ACME School of Code.
 */
const classGrades = [0.76, 0.45, 0.77, 0.55, 0.52, 0.63, 0.48, 0.66, 0.44, 0.59];

generateTable('Grades (x/100) in ACME School of Code', gradeOutOfHundred(classGrades));
generateTable('Sorted Grades (x/100) in ACME School of Code', sortGrades(classGrades));
generateTable('Passing Grades (x/100) in ACME School of Code', showOver50(classGrades));
generateTable('Average Grade (0.xxx) in ACME School of Code', calculateAverage(classGrades));
