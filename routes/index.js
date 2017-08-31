const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Frequenty Asked Questions',
    description: 'Search for an answer to your question below.'
  });
});

module.exports = router;
