import React, { createContext, useReducer, useEffect } from 'react'
import { taskReducer } from '../reducers/TaskReducer'
import axios from 'axios'

export const TaskContext = createContext()

const TaskContextProvider = (props) => {
  const [tasks, dispatch] = useReducer(taskReducer, [])

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get('tasks/')
        dispatch({ type: 'GET_TASK', tasks: res.data.tasks })
      } catch (err) {
        props.handleError("Can't get task")
      }
    }

    fetchTasks()
  }, [])

  // console.log(tasks)
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider
