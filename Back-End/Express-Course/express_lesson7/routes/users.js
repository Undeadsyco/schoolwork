var express = require('express');
var router = express.Router();
var models = require('../models')
var passport = require('../services/passport')

/* GET users listing. */
router.get('/', function (req, res, next) {
  if(req.user){
    models.users.findAll({})
    .then(users => {
      if(req.user.Admin == 1){
        res.render('users', { users: users})
      } else {
        res.send('you dont have access to this page')
      }
    })
  }
});

router.get('/signup', function (req, res, next) {
  res.render('signup')
})

router.post('/signup', function (req, res, next) {
  models.users.findOrCreate({
    where: { Username: req.body.username },
    defaults: {
      FirstName: req.body.firstname,
      LastName: req.body.lastname,
      Email: req.body.email,
      Password: req.body.password
    }
  })
    .spread(function (result, created) {
      if (created) {
        res.redirect('login')
      } else {
        res.send('this user already exists')
      }
    })
})

router.get('/login', function (req, res, next) {
  res.render('login')
})

router.post('/login', passport.authenticate('local',
  {
    failureRedirect: '/users/login'
  }),
  function (req, res, next) {
    res.redirect(`profile`)
  }
)

router.get('/profile', function (req, res, next) {
  if (req.user) {
    models.users.findByPk(parseInt(req.user.UserId))
      .then(user => {
        if (user) {
          res.render('profile', {
            FirstName: user.FirstName,
            LastName: user.LastName,
            Email: user.Email,
            Username: user.Username
          })
        } else {
          res.send('User not found')
        }
      })
  } else {
    res.redirect('/users/login')
  }
})

router.get('/:id', function(req, res, next){
  if(req.user){
    models.users.findByPk(req.params.id)
    .then(user => res.render('specificUser', { user: user }))
  }
})

router.get('/:id', function(req, res, next){
  if(req.user){
    models.user.findByPk(parseInt(req.params.id))
    .then(user => {
      if(req.user.Admin){
          models.user.update(req.body, { where: { UserId: req.params.id}})
          .then(result => res.redirect('/'))
      } else{
        res.send('you can not delete users')
      }
    })
  }
})

module.exports = router;
