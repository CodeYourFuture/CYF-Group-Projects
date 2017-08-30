var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'AcmeInc',
    description: 'We sell the finest goods and services.',
    products: [
      {
        urlPath: 'lorem',
        title: 'Lorem',
        price: 21,
        rating: '4.5/5',
        commentCount: 3,
      },
      {
        urlPath: 'ipsum',
        title: 'Ipsum',
        price: 15,
        rating: '4.75/5',
        commentCount: 1,
        isTopRated: true,
      },
      {
        urlPath: 'dolor',
        title: 'Dolor',
        price: 32,
      },
      {
        urlPath: 'sit',
        title: 'Sit',
        price: 42,
      },
      {
        urlPath: 'amet',
        title: 'Amet',
        price: 12,
      }
    ]
  });
});

module.exports = router;
