import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

const Register = ({ handleError }) => {
  const [showCalender, setShowCalender] = useState(false)
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleRegistration = async (event) => {
    event.preventDefault()
    try {
      const res = await axios({
        method: 'POST',
        url: 'register/',
        data: { username, password },
        headers: { 'Content-type': 'application/json' }
      })

      if (res.data.message) {
        setShowCalender(true)
      }
    } catch (err) {
      handleError("Can't Register User")
    }
    setUserName('')
    setPassword('')
  }

  return !showCalender ? (
    <div>
      <h1> Sign Up </h1>

      <form onSubmit={handleRegistration}>
        <input
          type='text'
          value={username}
          autoFocus
          placeholder=' username'
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          type='password'
          value={password}
          placeholder=' password'
          autoComplete='on'
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className='button'>Sign Up!</button>
      </form>
      <p>
        <Link to='/login'>Already have account? Login!</Link>
      </p>
    </div>
  ) : (
    <Redirect to='/tasks' />
  )
}

export default Register
