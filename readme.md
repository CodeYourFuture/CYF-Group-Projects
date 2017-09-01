# Shop Comments and Rating

This repository contains initial work on a shopping app. To complete the app, you'll need to implement the functions which allow a visitor to rate and comment on a shop product.

This repository is part of CodeYourFuture's [group projects](https://github.com/CodeYourFuture/group-projects).

![Screenshot of starting point](screenshot.png)

## What you need to do

- Create a [MongoDB](https://www.mongodb.com/) database and a collection to store products.
- Move the [existing data](https://github.com/NateWr/group-project-progress-chart/tree/master/data) into the database.
- Create a [route](https://expressjs.com/en/guide/routing.html) on your server to display each product. For instance, a product with a `urlPath` of `lorem` should be available at `/product/lorem`.
- On the single-product page, add a [form](http://marksheet.io/html-forms.html) which allows a user to rate the product between `1` (worst) and `5` (best), and leave a comment. All existing comments should be listed below the product on the single-product page.
- On the front page where products are listed, display the average rating in each product and a count of the number of comments that have been left.
- On the front page, list the products in order of their ratings, with the highest ratings first.
- On the front page, apply the class `product--top` to the highest-rated product so that it is visually distinct from the other products.

## Stretch goals

- Try to implement the commenting feature using only [ajax requests](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started), so that the comment appears without reloading the page.
- Try to implement one or more of the following sorting options: **Highest Rated**, **Lowest Rated**, **A-Z**, **Z-A**, **Most Comments**.
