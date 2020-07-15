import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler'
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

const TaskScheduler = () => {
  const schedulerData = [
    {
      id: 0,
      startDate: new Date(2020, 6, 15, 9, 45),
      endDate: new Date(2020, 6, 15, 11, 45),
      title: 'Meeting'
    },
    {
      id: 1,
      startDate: new Date(2020, 6, 15, 12, 0),
      endDate: new Date(2020, 6, 15, 13, 30),
      title: 'Go to a gym'
    },
    {
      id: 2,
      startDate: new Date(2020, 6, 15, 14, 45),
      endDate: new Date(2020, 6, 15, 16, 45),
      title: 'Feleena'
    }
  ]

  const [currentViewName, setCurrentViewName] = useState('Week')
  const [data, setData] = useState(schedulerData)

  // console.log(data)
  const commitChanges = ({ added, changed, deleted }) => {
    let appointments = data
    console.log(appointments)
    if (added) {
      console.log('Vineet', added)

      const startingAddedId = appointments.length > 0 ? appointments[appointments.length - 1].id + 1 : 0
      appointments = [...appointments, { id: startingAddedId, ...added }]
    }
    if (changed) {
      console.log('Vikas', changed)
      appointments = appointments.map(appointment => (
        changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment))
    }
    if (deleted !== undefined) {
      console.log('vinay', deleted)

      appointments = appointments.filter(appointment => appointment.id !== deleted)
    }

    setData(appointments)
  }

  return (
    <Paper>
      <Scheduler data={data} height={660}>
        <ViewState
          // defaultCurrentDate='2018-11-01'
          currentViewName={currentViewName}
          onCurrentViewNameChange={setCurrentViewName}
        />

        <EditingState
          onCommitChanges={commitChanges}
        />
        <IntegratedEditing />

        <DayView startDayHour={10} endDayHour={19} />
        <WeekView startDayHour={10} endDayHour={19} />
        <MonthView startDayHour={10} endDayHour={19} />

        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <ViewSwitcher />
        <Appointments />
        <AppointmentTooltip
          showCloseButton
          showOpenButton
        />
        <AppointmentForm />
        <AllDayPanel />
      </Scheduler>
    </Paper>
  )
}

export default TaskScheduler
