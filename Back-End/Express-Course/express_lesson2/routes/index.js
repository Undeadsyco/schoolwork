var express = require('express');
var router = express.Router();

let animals=['pig', 'goat', 'dog', 'cat']

/* GET home page. */
router.get('/', (req, res, next)=>{
  // let queryAnimal = req.query.animal;
  // if (animals.includes(queryAnimal)){
  //   res.send('yep we have a ' + queryAnimal + ' here.')
  // }else{
  //   res.send('nope, no ' + queryAnimal + ' here')
  //} 
  res.set('Content-type', 'application/html')
  res.render('index', {title: "hello"})
});

router.post('/', (req, res,)=>{
  let bodyanimal = req.body;
  if(animals.includes(bodyanimal.animal)){
    res.send('already have a '+bodyanimal.animal+', thanks')
  }else{
    animals.push(bodyanimal.animal)
    res.send(animals)
  }
});

router.put('/', (req, res,)=>{
  res.send('You successfully created a PUT route');
});

router.delete('/', (req, res,)=>{
  res.send('You successfully created a DELETE route');
});

module.exports = router;
