const mongoose = require('mongoose')

const URI = process.env.DATABASE_URL

// connect to mongodb
const connectDB = async () => {
  try {
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    console.log('Connected to MongoDB')
  } catch (err) {
    console.log(err)
  }
}

module.exports = connectDB
