require('dotenv').config()

const express = require('express')
const cors = require('cors')
const connectDB = require('./config/connection')
const taskRoutes = require('./routes/taskRoutes')

// Database Connection
connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/tasks', taskRoutes)

app.get('*', (req, res) => {
  res.status(404).json('404 Not found')
})

app.listen(process.env.PORT, () =>
  console.log(`TaskScheduler Server has started on PORT ${process.env.PORT}`)
)
