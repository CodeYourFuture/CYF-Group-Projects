# Bookshelf Project

In this small project we will create a bookshelf that we can interact with.

This project will help with learning AJAX and DOM manipulation.

We will also introduce two patterns for structuring our code.

## Getting started

1. Open the `index.html` file in a web browser.
2. Open the console and look at the console error. It tells us that the file `bookshelf.js` cannot be found.
3. Create a file called `bookshelf.js` and refresh the webpage the error should go away.

## Creating a button

1. In our `bookshelf.js` file create a button using the [`createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) method.
2. Set the button's id attribute to `fetch-books-btn` using the [`setAttribute`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) method.
3. Create a text node with the text `Fetch Books` using the [`createTextNode`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode) method.
4. Append the text node to the button using the [`appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) method.
5. Add an event listener that will call a method called fetchBooks when the button is clicked using the [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) method.
6. Finally append the button to the document body.

Refresh the webpage to see a reference error `fetchBooks` is undefined.

In the next stage we will define the `fetchBooks` function.

## Wiring up the button

1. Create a new function named `fetchBooks`.
2. Inside the `fetchBooks` function add a console log statement.
3. Refresh the webpage and click the `Fetch Books` button. You should see the statement appear in the console.
4. If it everything has worked delete the console log statement else try and debug what has gone wrong, retracing the steps if needed.

In the next stage we will fetch the data for the books.

## Fetching the books data

Add the following code within the `fetchBooks` function.

```js
const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
fetch(booksJSON)
    .then(response => response.json())
    .then(books => {
        /* TODO: create the bookshelf */
        console.log(books)
    })
```

This is the [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) method. We are using it to fetch the books data. It executes asynchronously, meaning that we have to use a promise chain to interact with the data the fetch statement returns.

Refresh the webpage and click the `Fetch Books` button. You should see the books data in the console.

## Creating the bookshelf

Create a new function named `processBooks` that takes the books JSON as a parameter.

Replace the inline function that contains the `TODO` comment with the `processBooks` function.

Your fetch statement should look like the following.

```js
fetch(booksJSON)
    .then(response => response.json())
    .then(processBooks)
```

Write your solution inside the `processBooks` function. The function should create an unordered list containing list items with the author and titles of the books. Each list item should also have an id attribute set to the book id.

When you click the `Fetch Books` button it should add the following HTML to the webpage.

```html
<ul>
    <li id="1">The Catcher in the Rye by J. D. Salinger</li>
    <li id="2">To Kill a Mockingbird by Harper Lee</li>
    <li id="3">The Grapes of Wrath by John Steinbeck</li>
    <li id="4">The Great Gatsby by F Scott Fitzgerald</li>
    <li id="5">Moby-Dick by Herman Melville</li>
</ul>
```

### Hint

Use the [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method to iterate over the books array and create the list items.

## Removing the button

When you click the `Fetch Books` button it continues to add more and more lists of books. Let us remove this button once we have created the first list.

1. Add a `then` statement to the promise chain and have it call a function called `removeBtn`.
2. Create the function `removeBtn`.
3. Inside this function find the button element using the [`getElementById`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) method.
4. Remove the event listener using the [`removeEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) method.
5. Finally remove the element using the [`remove`](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove) method.

Refresh the webpage and click the `Fetch Books` button. The button should disappear once the bookshelf is displayed.

### Troubleshooting

If you are using Internet Explorer you may discover that the `remove` method does not exist. Try using the [`removeChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) method on the button's `parentNode`.

## Organising the bookshelf

To organise our bookshelf we are going to need to move the books around.

1. Add ⬆ and ⬇ buttons to the book list items.

The HTML should look like the following.

```html
<li id="1">
    <button>⬆</button>
    <button>⬇</button>
    - The Catcher in the Rye by J. D. Salinger
</li>
```

2. Create a function named `moveUp` that accepts a parameter called `id` and contains a console log statement that says `move up` followed by the `id`.
3. Create a similar function named `moveDown`.

We are going to wire up those two functions so that when the ⬆ and ⬇ buttons are clicked they get triggered. However we don't want to attach event listeners to every button (that's crazy!) so we are going to use a common ancestor (a parent node) to handle the event for us. This is pattern is called _event delegation_ and it is very useful for simplifying event handling.

4. Add an event listener to the unordered list node using the `addEventListener` method that will call an inline function when a `click` event is triggered.

The inline function will receive the event as a parameter.

5. Inside our inline function look at the `event.target.textContent` to determine whether to call `moveUp` or `moveDown`. We will also need to know which book to move so pass `event.target.parentElement.id` to the choosen method.

Refresh the webpage, click the `Fetch Books` button. We should see our bookshelf complete with buttons to move the books up and down the list.

6. Implement the `moveUp` and `moveDown` buttons with what you have learnt from the lesson. You will need to use the [`insertBefore`](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore) method.

![Solution](assets/solution.gif)

## Creating a module (✨Bonus✨)

In the console type `fetchBooks`. It will execute our function. So far we have written our code directly into the global scope. This is not a good thing, it can cause lots of unforseen problems.

Let us encapsulate our code in a module which does not pollute the global scope.

1. Wrap all of the code into an immediately-invoked function expression (IIFE) and assign it to a new property on the window called `bookshelf`.

```js
window.bookshelf = (function() {
    /* Our code goes here */
}())
```

2. Refresh the webpage. Everything should still work but `fetchBooks` is no longer available as a method in the console.

## Revealing the module (✨Bonus✨)

Let us regain control over how the module is intialised.

1. Wrap the code responsible for creating the button into a function named `createBtn`.

If we refresh our webpage at this point nothing will appear. We are going to need to call the new `createBtn`. We will reveal this function to the global scope so that it can be called outside of our module.

2. At the bottom of the file but inside the IIFE return an object containing an `init` property that references our `createBtn` function.

```js
window.bookshelf = (function() {
    /* our code */
    return {
        init: createBtn
    }
}())
```

This pattern is called the _revealing module pattern_ and it is very useful for encapsulating data and functionality.

So that we can still test all the functions easily, ensure that they are revealed also.

```js
return {
    init: createBtn,
    removeBtn,
    fetchBooks,
    moveUp,
    moveDown,
    processBooks
}
```

3. Inside the HTML file below the `script` tag add another script tag that calls our `init` method on the `bookshelf`.

```html
<script>bookshelf.init()</script>
```

Refresh the webpage. Everything should still work but we have regained control over how the module is initialised.
