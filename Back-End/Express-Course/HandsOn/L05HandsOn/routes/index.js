var express = require('express');
var router = express.Router();
var mysql = require('mysql2')
var models = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/category', function(req, res, next) {
  models.category.findAll().then(categories => {
    res.render('category', { categories: categories})
  })
})

router.post('/category', function(req, res, next){
  models.category.findOrCreate({
    where: {
      name: req.body.name,
      default_price: req.body.default_price
    }
  })
  .spread(function(result, created){
    if(created){
      res.redirect('/category')
    } else{
      res.send('This is already listed')
    }
  })
})

router.get('/category/:id', function(req, res, next){
  let categoryId = parseInt(req.params.id)
  models.category.findOne({
    where: { category_id: categoryId }
  })
  .then(category => {
    res.render('specificCategory', { category: category })
  })
})

module.exports = router;
