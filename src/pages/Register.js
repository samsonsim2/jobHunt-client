import React, { useState, useEffect } from 'react'
import FormRow from '../components/FormRow'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Button, Paper } from '@mui/material'
import AlertBar from '../components/AlertBar'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: false,
  }

  const {
    isLoading,
    showAlert,
    displayAlert,
    registerUser,
    addUserToLocalStorage,
    loginUser,
  } = useAppContext()
  const [values, setValues] = useState(initialState)

  // Handle form changes functionality

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }

    // Handle register

    const currentUser = { name, email, password }

    if (isMember) {
      loginUser(currentUser)
    } else {
      console.log('registering user')
      registerUser(currentUser)
    }

    //degbug
    // console.log(values)
  }

  //Navigate to dashboard
  const { user } = useAppContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user, navigate])

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          height: 'fit-content',
          p: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant='h4' textAlign='center' gutterBottom>
          Job-hunt
        </Typography>
        <Typography textAlign='center' variant='h6' gutterBottom>
          Login
        </Typography>

        {showAlert && <AlertBar />}
        {values.isMember ? null : (
          <FormRow
            name='name'
            type='text'
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          name='email'
          type='email'
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          name='password'
          type='password'
          value={values.password}
          handleChange={handleChange}
        />
        <Button
          variant='contained'
          disabled={isLoading}
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Box sx={{ mt: 1 }}>
          <Typography sx={{ display: 'inline' }}>
            {values.isMember ? 'Not a member yet? |' : 'Already a member? |'}
          </Typography>
          <Button
            onClick={() => setValues({ ...values, isMember: !values.isMember })}
          >
            {values.isMember ? 'Register' : 'Login'}
          </Button>
        </Box>
      </Card>
    </Box>
  )
}

export default Register
