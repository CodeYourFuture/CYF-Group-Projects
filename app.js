/**
 * To complete this group project, you will need to write code to make this app
 * do the following:
 *
 * 1. Load books data when the "Load" button is clicked
 * 2. Filter the books data to find books that are **not** marked as read
 * 3. Show the list of unread books in the "Unread Books" table. The book's
 *    title, author and publish date should be shown.
 * 4. Show the current number of unread books in the Unread Books Count
 * 5. Also filter the books data to find books that are marked as read
 * 6. Show the list of read books in the "Read Books" table and show the number
 *    of read books in the Read Books Count
 * 7. Clicking on a book in the "Read Books" table should "star" it. Starred
 *    books should appear with a yellow background. This can be applied by
 *    adding the `starred` class to the table row (`<tr>`) for each starred book
 * 8. **STRETCH GOAL** When a book is starred, send a POST request to the
 *    account.starUrl
 */

/**
 * This is the account details that you will use with this exercise.
 *
 * Do not edit this code.
 */
var account = {
  accountEmail: "example@codeyourfuture.io",
  booksUrl: "/data/books.json",
  starUrl: "/star",
  unreadBooks: [],
  readBooks: [],
};

/**
 * Add an event listener that will call the fetchBooks function when the
 * loadButton is clicked.
 *
 * Try using the addEventListener method.
 *
 * You may edit this code.
 */
var loadButton = document.querySelector("#loadButton");

/**
 * Complete the fetchBooks function so that it calls the fetch function. The
 * account.booksUrl variable should be passed as the first parameter:
 *
 * fetch(account.booksUrl)
 *
 * When the request promise resolves, convert the response to JSON using the
 * json method:
 *
 * .then(response => response.json())
 *
 * Then call a function named processBooks and pass the JSON to it.
 */
function fetchBooks() {
  // Add your implementation here
}

/**
 * Write a function called processBooks that takes 1 parameter named
 * allBooks that is an array of objects. Each book object in the allBooks array
 * has an isRead property.
 *
 * This function should filter the allBooks array into a new array called
 * unreadBooks. The unreadBooks array should only contains books where the
 * isRead property is false.
 *
 * Then assign the account.unreadBooks variable to the unreadBooks array you
 * just created.
 *
 * Finally the call the render function and pass the account object to it.
 */

// Write your processBooks function here

/**
 * Complete the render function that updates the DOM with the account details.
 *
 * In the index.html file you will see that some example HTML has been written
 * for you. Using DOM methods like createElement and appendChild you should
 * insert the account.unreadBooks data into the DOM.
 *
 * A DOM update for the account email address has already been provided for you
 * as an example.
 */
function render(account) {
  var accountEmailNode = document.createTextNode(account.accountEmail);
  document.querySelector("#accountEmail").appendChild(accountEmailNode);

  // Add your implementation here
}

/**
 * Write any additional functions that you need to complete the group project
 * below. You may also have to add to or change the existing processBooks and
 * render functions.
 *
 * For example, you might want to have functions that find unread/read books,
 * send fetch requests and more.
 */
