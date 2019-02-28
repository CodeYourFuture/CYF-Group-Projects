const express = require("express");
const router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get("/", function(req, res, next) {
  /**
   * Define a callback function to render the
   * homepage once the entries have been loaded
   */
  const renderEntries = function(error, file) {
    if (error) {
      throw error;
    }

    const fileData = file.toString();
    const entriesData = JSON.parse(fileData);
    res.render("index", {
      title: "Frequenty Asked Questions",
      description: "Search for an answer to your question below.",
      entries: entriesData
    });
  };

  /**
   * Load the entries file
   */
  const entriesFilePath = __dirname + "/../data/entries.json";
  fs.readFile(entriesFilePath, renderEntries);
});

module.exports = router;
