const express = require("express");
const router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get("/", function(req, res, next) {
  /**
   * Define a callback function to render the
   * homepage once the topics data has been loaded
   */
  const renderTopics = function(error, file) {
    if (error) {
      throw error;
    }

    const fileData = file.toString();
    const topicsData = JSON.parse(fileData);
    res.render("index", {
      title: "Progress Tracker",
      description:
        "Keep track of your progress learning new topics. Add a topic below and rate your knowledge of the topic between 1 (no knowledge) and 10 (very confident).",
      columns: [
        {
          label: "Topic",
          hideLabel: true
        },
        {
          label: "Before Class"
        },
        {
          label: "After Class"
        },
        {
          label: "Monday"
        },
        {
          label: "Wednesday"
        },
        {
          label: "Thursday"
        },
        {
          label: "Friday"
        },
        {
          label: "Edit",
          hideLabel: true
        }
      ],
      topics: topicsData
    });
  };

  /**
   * Load the topics file
   */
  const topicsFilePath = __dirname + "/../data/topics.json";
  fs.readFile(topicsFilePath, renderTopics);
});

module.exports = router;
