const express = require("express");
const app = express();
const exphbs = require('express-handlebars');
const fs = require("fs");
// const readPosts = require("./helpers/readPosts")

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// The extensions 'html' allows us to serve file without adding .html at the end 
// i.e /my-cv will server /my-cv.html
app.use(express.static("public", { 'extensions': ['html'] }));

// app.get (path, handle)
app.get('/', function (req, res) {
  res.render("index");

}); 

// app.get('/my-cv', function (req, res) {
//   res.render("my-cv", {
//     //title: 'Etzalis Profile', // insert your name instead 
//     subheading: "updated cv",

//   });
// });

// app.get('/admin', function (req, res) {
//   res.render("admin", {
//     title: 'Admin', // insert your name instead 
//     subheading: "updates on admin work"

//   });
// });

// app.get("/api/posts", function (req, res) {
//   readPosts(function (error, posts) {
//     res.header("Access-Control-Allow-Origin", "*"); // permision same origin policy
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.json(posts);
//   });
// });

// app.get('/contact', function (req, res) {
//   res.render("contact", {
//     title: 'Get in Touch', // insert your name instead 
//     subheading: "fill the form"
//   });
// });

// app.get('/', function (req, res) {
//   const filePath = __dirname + '/data/posts.json';
//   const callbackFunction = function (error, file) {
//     // we call .toString() to turn the file buffer to a String 
//     const fileData = file.toString();
//     // we use JSON.parse to get an object out the String 
//     const postsJson = JSON.parse(fileData).reverse();
//     // send the json to the Template to render 

//     res.render('index',
//       {
//         title: 'Etzali Profile',
//         // insert your name instead 
//         posts: postsJson,
//       });
//   };
//   fs.readFile(filePath, callbackFunction);
// });



// what does this line mean: process.env.PORT || 3000
app.listen(process.env.PORT || 3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});