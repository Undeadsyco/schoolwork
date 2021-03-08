var express = require('express');
var router = express.Router();
var mySql = require('mysql')

var connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "Muddhawg1",
  database: "sakila"
})

connection.connect(
  function(err){
    if(err){
      console.error(err.message)
      return
    }
    console.log("yay, you are connected to the database")
  }
)

/* GET home page. */
router.get('/actor/:id', function(req, res, next) {
  let actorId = parseInt(req.params.id)
  console.log(actorId)

  const idQuery = `SELECT * FROM actor WHERE actor_id=${actorId}`

  connection.query(idQuery, (err, result) => {
    console.log(result)
    if(result.length > 0){
      res.render('index', {actor: result[0]})
    } else {
      res.send("not a valid id")
    }
  })
});

const actorList = `SELECT * FROM actor`

router.get('/actor', function(req, res, next){
  connection.query(actorList, function(err, result){
    res.render('actor', { actors: result })
  })
})

router.post("/actor", function(req, res, next){
  console.log(req.body)
  const newActor = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  }

  const selectActor = `
    SELECT * 
    FROM actor
    WHERE first_name = '${newActor.first_name}'
    AND last_name = '${newActor.last_name}'
  `

  connection.query(selectActor, function(err, result){
    if(err){
      console.log(err.message)
    } else{
      if(result.length > 0){
        res.send('Sorry, that actor is already listed')
      } else{
        let newActorQuery = `
          INSERT INTO actor(first-name, last_name)
          VALUES('${newActor.first_name}', '${newActor.last_name}')`

        connection.query(newActorQuery, function(err, insertResult){
          if(err){
            res.render('error', { message: 'Oops, something went wrong' })
          } else {
            res.redirect('/actor')
          }
        })
      }
    }
  })
})

module.exports = router;
