import React, { useState, useContext, useEffect } from 'react'
import { TaskContext } from '../contexts/TaskContext'
import Paper from '@material-ui/core/Paper'
import {
  ViewState,
  EditingState,
  IntegratedEditing
} from '@devexpress/dx-react-scheduler'
import {
  Scheduler,
  WeekView,
  DateNavigator,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  TodayButton,
  Toolbar,
  ViewSwitcher,
  MonthView,
  DayView,
  AllDayPanel
} from '@devexpress/dx-react-scheduler-material-ui'
import schedulerServices from '../shared/schedulerServices'

const TaskScheduler = ({ handleError }) => {
  const { tasks, dispatch } = useContext(TaskContext)

  const [currentViewName, setCurrentViewName] = useState('Week')
  const [scheduledTasks, setScheduledTasks] = useState([])

  useEffect(() => {
    for (const task of tasks) {
      task.id = task._id
      task.startDate = new Date(task.startDate)
      task.endDate = new Date(task.endDate)
    }
    setScheduledTasks(tasks)
  }, [tasks])

  const commitChanges = async ({ added, changed, deleted }) => {
    if (added) {
      try {
        const res = await schedulerServices.createTask(added)
        const newTask = { _id: res.data._id, ...added }
        dispatch({
          type: 'ADD_TASK',
          task: { ...newTask }
        })
      } catch (err) {
        handleError("Can't add task")
      }
    }

    if (changed) {
      const updatedData = Object.values(changed)[0]
      const id = Object.keys(changed)[0]
      try {
        await schedulerServices.updateTask(id, updatedData)
        dispatch({ type: 'UPDATE_TASK', task: { _id: id, ...updatedData } })
      } catch (err) {
        handleError("Can't update task")
      }
    }

    if (deleted !== undefined) {
      try {
        await schedulerServices.deleteTask(deleted)
        dispatch({ type: 'DELETE_TASK', task: { _id: deleted } })
      } catch (err) {
        handleError("Can't delete task")
      }
    }
  }

  return (
    <Paper>
      <Scheduler data={scheduledTasks} height={660}>
        <ViewState
          currentViewName={currentViewName}
          onCurrentViewNameChange={setCurrentViewName}
        />
        <EditingState onCommitChanges={commitChanges} />
        <IntegratedEditing />
        <DayView startDayHour={10} endDayHour={19} />
        <WeekView startDayHour={10} endDayHour={19} />
        <MonthView startDayHour={10} endDayHour={19} />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <ViewSwitcher />
        <Appointments />
        <AppointmentTooltip showCloseButton showOpenButton />
        <AppointmentForm />
        <AllDayPanel />
      </Scheduler>
    </Paper>
  )
}

export default TaskScheduler
