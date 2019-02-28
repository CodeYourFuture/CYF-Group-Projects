const express = require("express");
const router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get("/", function(req, res, next) {
  /**
   * Define a callback function to render the
   * homepage once the products data has been loaded
   */
  const renderProducts = function(error, file) {
    if (error) {
      throw error;
    }

    const fileData = file.toString();
    const productsData = JSON.parse(fileData);
    res.render("index", {
      title: "AcmeInc",
      description: "We sell the finest goods and services.",
      products: productsData
    });
  };

  /**
   * Load the products file
   */
  const productsFilePath = __dirname + "/../data/products.json";
  fs.readFile(productsFilePath, renderProducts);
});

module.exports = router;
