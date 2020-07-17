const Task = require('../models/taskModels')

const taskQueries = {}

taskQueries.getAllTasks = async (req, res) => {
  try {
    console.log(req.user)
    const tasks = await Task.find()
    return res.status(200).json(tasks)
  } catch (err) {
    res.status(500).json({ taskCount: 0, message: "Can't get tasks" })
  }
}

taskQueries.createTask = async (req, res) => {
  try {
    const { title, endDate, startDate, allDay, notes = '' } = req.body
    const task = await Task.create({
      title,
      endDate,
      startDate,
      allDay,
      notes
    })
    res
      .status(201)
      .json({ _id: task._id, title, endDate, startDate, allDay, notes })
  } catch (err) {
    res.status(500).json({ message: "Can't add Task" })
  }
}

taskQueries.updateTask = async (req, res) => {
  try {
    const id = req.params.id
    const updatedTask = req.body
    const task = await Task.findOneAndUpdate(
      { _id: id },
      { $set: updatedTask },
      { new: true }
    )
    if (!task) {
      return res.status(404).json({ message: `Can't find task with id ${id}` })
    }

    res.status(200).json({ message: `Task modified with ID: ${id}` })
  } catch (err) {
    console.log(err)
    res
      .status(500)
      .json({ message: `Can't update task of ${req.params.id} id` })
  }
}

taskQueries.deleteTask = async (req, res) => {
  try {
    const id = req.params.id
    const deletedTask = await Task.findOneAndDelete({ _id: id })
    if (!deletedTask) {
      return res.status(404).json({ message: `Can't find task with id ${id}` })
    }

    res.status(200).json({ message: `Task deleted with ID: ${id}` })
  } catch (e) {
    res
      .status(500)
      .json({ message: `Can't delete task of ${req.params.id} id` })
  }
}

module.exports = { taskQueries }
