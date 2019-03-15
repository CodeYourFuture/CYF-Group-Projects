/*
  DO NOT EDIT THE LINE BELOW
  -------------------------- */
const generateTable = require("./lib/tables");

/*
YOU MAY EDIT THE LINES BELOW
---------------------------- */

/**
 * Write a function that returns the number of days until
 * the next class on Saturday.
 *
 * For example, if the current day is Thursday, it should
 * return the number 2.
 *
 * Hint: make sure that your function will also work if it
 * is run on a Sunday!
 *
 * @param {String} currentDay (Example: Wednesday)
 * @param {Array<String>} daysOfWeek The array will be: ['Monday', 'Tuesday', Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday]
 * @return {Number}
 */
function numberOfDaysUntilNextClass(currentDay, daysOfWeek) {
  return -1;
}

/**
 * Write a function that returns the number of hours
 * until the next dinner time.
 *
 * For example, if currentHour is 18 (6pm) and the
 * hourOfDinner is 19 (7pm), it should return 1.
 *
 * Hint: make sure that your function will also work if the
 * currentHour is after the hourOfDinner. For example, if it
 * is run at 11pm at night, it should return the number of
 * hours until dinner the next day.
 *
 * @param {Number} currentHour (Example: 14)
 * @param {Number} hourOfDinner (Example: 19)
 * @return {Number}
 */
function hoursUntilNextDinner(currentHour, hourOfDinner) {
  return -1;
}

/**
 * Write a function that returns an array including all of
 * the hours that have already passed today.
 *
 * For example, if it is 4am, it should return an array
 * that includes the hours of midnight (0), 1am, 2am and
 * 3am: [0, 1, 2, 3].
 *
 * @param {Number} currentHour (Example: 14)
 * @param {Array<Number>} hoursOfDay The array will be: [0, 1, 2, 3, ..., 14, 15, 16, ..., 23] (0 = midnight)
 * @return {Array<Number>}
 */
function hoursPassedToday(currentHour, hoursOfDay) {
  return [];
}

/**
 * Write a function that returns an array including all of
 * the hours that are left today.
 *
 * For example, if it is 8pm, it should return an array
 * that includes the hours of 9pm, 10pm and 11pm:
 * [21, 22, 23].
 *
 * @param {Number} currentHour (Example: 14)
 * @param {Array<Number>} hoursOfDay The array will be: [0, 1, 2, 3, ..., 14, 15, 16, ..., 23] (0 = midnight)
 * @return {Array<Number>}
 */
function hoursAheadToday(currentHour, hoursOfDay) {
  return [];
}

/**
 * Write a function that returns the number of hours left
 * to study before the next class.
 *
 * The next class happens at 11am on Saturday.
 *
 * Hint: To complete this function, you must use the other
 * functions your group has written in this exercise. Use
 * your imagination to think about how you can get the
 * total number of hours left between now and the next
 * class.
 *
 * You should return a number that represents the total
 * hours left until the next class. For example, if it is
 * 8pm on Friday, you should return 15.
 *
 * @param {Number} currentHour (Example: 14)
 * @param {Array<Number>} hoursOfDay The array will be: [0, 1, 2, 3, ..., 14, 15, 16, ..., 23] (0 = midnight)
 * @param {String} currentDay (Example: Wednesday)
 * @param {Array<String>} daysOfWeek The array will be: ['Monday', 'Tuesday', Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday]
 * @return {Number}
 */
function hoursToStudy(currentHour, hoursOfDay, currentDay, daysOfWeek) {
  return -1;
}

/*
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const hoursOfDay = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23
];
const now = new Date();
const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });
const currentHour = now.getHours();

generateTable("Schedule", [
  { "Days until the next class": numberOfDaysUntilNextClass(currentDay, daysOfWeek) },
  { "Hours until next dinner at 7pm": hoursUntilNextDinner(currentHour, 19) },
  { "Hours passed today": hoursPassedToday(currentHour, hoursOfDay).join(", ") },
  { "Hours ahead today": hoursAheadToday(currentHour, hoursOfDay).join(", ") },
  { "Hours left to study": hoursToStudy(currentHour, hoursOfDay, currentDay, daysOfWeek) }
]);
