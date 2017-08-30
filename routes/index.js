var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Progress Tracker',
    description: 'Keep track of your progress learning new topics. Add a topic below and rate your knowledge of the topic between 1 (no knowledge) and 10 (very confident).',
    columns: [
      {
        label: 'Topic',
        hideLabel: true
      },
      {
        label: 'Before Class',
      },
      {
        label: 'After Class',
      },
      {
        label: 'Monday',
      },
      {
        label: 'Wednesday',
      },
      {
        label: 'Thursday',
      },
      {
        label: 'Friday',
      },
      {
        label: 'Edit',
        hideLabel: true
      }
    ],
    topics: [
      {
        title: 'Callbacks',
        beforeClass: 1,
        afterClass: 2,
        monday: 3,
        wednesday: 4,
        thursday: 5
      }
    ]
  });
});

module.exports = router;
