const User = require('../models/userModels')
const passport = require('passport')

const userQueries = {}

userQueries.createUser = async (req, res) => {
  try {
    const { username, password } = req.body
    const newUser = new User({ username })
    await User.register(newUser, password)
    passport.authenticate('local')(req, res, () => {
      res.status(200).json({ message: true })
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: false })
  }
}

module.exports = { userQueries }
