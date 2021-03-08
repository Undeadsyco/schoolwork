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

const filmList = `SELECT * From film`

router.get('/film', function(req, res, next) {
  connection.query(filmList, function(err, result){
    if(err){
      console.log(err.message)
      return
    }
    res.render('film', { films: result })
  })
});



router.get('/film/:id', function(req, res, next){
  let filmId = parseInt(req.params.id)
  console.log(filmId)

  const filmDetails = `
    SELECT * FROM film
    JOIN film_actor USING(film_id)
    JOIN actor USING(actor_id)
    WHERE film_id = ${filmId}`

  connection.query(filmDetails, function(err, result){
    if(result.length > 0){
      res.render('filmDetails', { film: result[0], actorList: result })
    } else{
      res.send("not a valid id")
    }
  })
})



module.exports = router;
