# Changes Requested on Messaging App


- Change color of messages from self
- Make button in header stand out.
- Change background color of add message field.


This repository contains initial work on a FAQ app. To complete the app, you'll need to implement the functions which allow a visitor to search for a question and ask a new question.

This repository is part of CodeYourFuture's [group projects](https://github.com/CodeYourFuture/group-projects).

![Screenshot of starting point](screenshot.png)

## What you need to do

- Create a [MongoDB](https://www.mongodb.com/) database and a collection to store questions and answers.
- Move the [existing data](data) into the database. Add several more entries on whatever topics you would like.
- Allow a user to search for a word or phrase and display only entries which contain that word or phrase. You'll want to use MongoDB's [$regex](https://docs.mongodb.com/manual/reference/operator/query/regex/) feature to search your database.
- Add a [form](http://marksheet.io/html-forms.html) which allows a user to ask a new question.
- Only questions with answers should be shown on the front page or included in search results.
- Allow a user to indicate whether an answer was helpful using the **Yes** and **No** buttons. Their response should be reflected in the numbers included below each answer: "25/?? people found this helpful."
- Create a [route](https://expressjs.com/en/guide/routing.html) on your server to display a list of unanswered questions. Allow users to submit an answer to an unanswered question.

## Stretch goals

- Try to implement the search feature using only [ajax requests](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started), so that the results appear without reloading the page.
- Try to sort the entries with the most helpful entries listed first. Try to do the same for the search results.
- Try to prevent entries that are _very_ unhelpful from being shown in the main page.
