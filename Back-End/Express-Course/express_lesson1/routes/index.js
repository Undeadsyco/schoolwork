var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'My Dogs', 
    dogs: [
      {name: 'Sophie'},
      {name: 'Maria'},
      {name: 'Pork'},
      {name: 'Rain'},
      {name: 'Hardie'}
    ] 
  });
});

module.exports = router;
