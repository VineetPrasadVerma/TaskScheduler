const mongoose = require('mongoose')

const tasksSchema = new mongoose.Schema({
  title: { type: String, default: '' },
  endDate: { type: Date },
  startDate: { type: Date },
  allDay: { type: Boolean, default: false }
})

module.exports = mongoose.model('Task', tasksSchema)
