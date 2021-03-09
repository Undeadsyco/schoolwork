var express = require('express');
var router = express.Router();
var models = require('../models')
var authService = require('../services/auth')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function (req, res, next) {
  models.users.findOrCreate({
    where: { UserName: req.body.username },
    defaults: {
      UserId: req.body.userId,
      FirstName: req.body.firstName,
      LastName: req.body.lastName,
      Email: req.body.email,
      UserName: req.body.userName,
      Password: authService.hashPassword(req.body.password),
      Admin: 0
    }
  })
    .spread(function (result, created) {
      if (created) {
        res.send('user successfully created')
      } else {
        res.send('user already exists')
      }
    })
})

router.post('/login', function (req, res, next) {
  models.users.findOne({
    where: { UserName: req.body.userName }
  })
    .then(user => {
      if (!user) {
        console.log('user not found')
        return res.status(401).json({ message: 'login Failed' })
      } else {
        let passwordMatch = authService.comparePasswords(req.body.password, user.Password)
        if(passwordMatch){
          let token = authService.signUser(user)
          res.cookie('jwt', token)
          res.send('login successful')
        } else{
          console.log('worng password')
          res.send('worng password')
        }
      }
    })
})

router.get('/profile', function (req, res, next) {
  let token = req.cookies.jwt
  if (token) {
    authService.verifyUser(token)
      .then(user => {
        if (user) {
          res.send(JSON.stringify(user))
        } else {
          res.status(401)
          res.send('must be logged in')
        }
      })
  } else {
    res.status(401)
    res.send('must be logged in')
  }
})

router.get('/logout', function (req, res, next) {
  res.cookie('jwt', "", { expires: new Date(0) })
  res.send('logged out')
})

router.get('/:id', function(req, res, next){
  let token = req.cookies.jwt
  if(token){
    authService.verifyUser(token)
    .then(user => {
      if(user.Admin == 1){
        models.users.findByPk(req.params.id)
        .then(userfound => {
          res.send(JSON.stringify(userfound))
        })
      }else{
        res.status(401)
        res.send('you are not allowed here')
      }
    })
  } else{
    res.status(401)
    res.send('must be logged in')
  }
})

module.exports = router;