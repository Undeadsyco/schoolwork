var express = require('express');
var router = express.Router();

let flowers = ["Orchid", "Iris", "Hydrangea", "Amaryllis", "Dahlia", "Daffodil", "Bleeding Heart"]

/* GET home page. */
router.get('/', function(req, res, next) {
  let flowerBody = req.body
  if(flowers.includes(flowerBody.flower)){
    res.send(`Yes we have that ${flowerBody.flower} in our garden`)
  } else{
    res.send(`Nope, we do not have ${flowerBody.flower} in our garden, but maybe we should plant it`)
  }
});

router.post('/', function(req, res){
  let flowerBody = req.body
  if(flowers.includes(flowerBody.flower)){
    res.send(`We already have ${flowerBody.flower}'s, no need to add it`)
  } else{
    flowers.push(flowerBody.flower)
    res.send(flowers)
  }
})

module.exports = router;
