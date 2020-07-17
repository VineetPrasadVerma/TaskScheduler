const express = require('express')
const router = express.Router()
const passport = require('passport')
const { userQueries } = require('../controllers/indexController')

// handle signup
router.post('/register', userQueries.createUser)

// handle user login
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.status(200).json()
})

// LOGOUT ROUTE
router.get('/logout', (req, res) => {
  req.logout()
  res.status(200).json()
})

module.exports = router
