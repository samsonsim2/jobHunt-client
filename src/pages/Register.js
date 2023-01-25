import React, { useState, useEffect } from 'react'
import FormRow from '../components/FormRow'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Button, Paper } from '@mui/material'
import AlertBar from '../components/AlertBar'

const Register = () => {
  const [isMember, setIsMember] = useState(false)
  const handleChange = (e) => {
    console.log(e.target.value)
  }
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

        <AlertBar severity='error' message='Please provide all values' />
        {isMember ? null : (
          <FormRow name='name' type='text' handleChange={handleChange} />
        )}
        <FormRow name='email' type='email' />
        <FormRow name='password' type='password' />
        <Button variant='contained' sx={{ mt: 2 }}>
          Submit
        </Button>
        <Box sx={{ mt: 1 }}>
          <Typography sx={{ display: 'inline' }}>
            {isMember ? 'Not a member yet? |' : 'Already a member? |'}
          </Typography>
          <Button onClick={() => setIsMember(!isMember)}>
            {isMember ? 'Register' : 'Login'}
          </Button>
        </Box>
      </Card>
    </Box>
  )
}

export default Register
