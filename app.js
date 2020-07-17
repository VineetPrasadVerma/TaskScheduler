require('dotenv').config()

const passport = require('passport')
const LocalStrategy = require('passport-local')
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/connection')
const taskRoutes = require('./routes/taskRoutes')
const indexRoutes = require('./routes/indexRoutes')
const User = require('./models/userModels')

// Database Connection
connectDB()

const app = express()

app.use(cors())
app.use(express.json())

// PASSPORT CONFIGURATION
app.use(require('express-session')({
  secret: 'Feleena is cute cat',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use('/', indexRoutes)
app.use('/tasks', taskRoutes)

app.listen(process.env.PORT, () =>
  console.log(`TaskScheduler Server has started on PORT ${process.env.PORT}`)
)
