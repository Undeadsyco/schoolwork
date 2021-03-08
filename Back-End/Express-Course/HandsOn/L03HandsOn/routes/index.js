var express = require('express');
var router = express.Router();
let story = require('../models/storyLine')

/* GET home page. */
router.get('/beginning', function(req, res, next) {
  let beginning = story.Storyline.find(part=>{
    return part.storyPart === req.params.storyPart
  })
  res.render('beginning', { beginning });
});

router.get('/middle', function(req, res, next) {
  let middle = story.Storyline.find(part=>{
    return part.storyPart === req.params.storyPart
  })
  res.render('middle', { middle });
});

router.get('/end', function(req, res, next) {
  let part = story.Storyline.find(part=>{
    return part.storyPart === req.params.storyPart
  })
  res.render('end', { part });
});

module.exports = router;
