const express = require('express')
var router = express.Router()
var models = require('../models')

router.get('/', function (req, res, next) {
  models.film.findAll({
    attributes: ['film_id', 'title', 'description', 'rental_rate', 'rating'],
    include: [{
      attributes: ['actor_id', 'first_name', 'last_name'],
      model: models.actor
    }]
  })
    .then(filmsFound => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(filmsFound))
    })
})

router.get('/:id', function(req, res, next){
  models.film.findByPk(parseInt(req.params.id), {
    attributes: ['film_id', 'title', 'description', 'rental_rate', 'rating'],
    include: [{
      attributes: ['actor_id', 'first_name', 'last_name'],
      model: models.actor
    }]
  })
  .then(filmFound => {
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(filmFound))
  })
})

router.put('/:id', function(req, res, next){
  let filmId = parseInt(req.params.id)
  models.film.update(
    { title: req.body.title }, 
    { where: { film_id: filmId } }
  )
  .then(result => res.redirect('/films'))
  .catch(err => {
    res.status(400)
    res.send('there was a problem updating the title')
  })
})

module.exports = router