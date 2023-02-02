import React from 'react'
import { Box } from '@mui/system'
import { ReactComponent as JobHuntLogo } from '../assets/jobHunt.svg'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        background: 'light-grey',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '80%',

          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: '55%', alignSelf: 'center' }}>
          <Box sx={{ width: '85%' }}>
            <Typography
              variant='h2'
              sx={{ fontWeight: 500, letterSpacing: 10 }}
            >
              JOB HUNT
            </Typography>
            <Typography sx={{ mt: 4 }}>
              Job searching can be tough, and keeping tracking of your
              applications and follow ups can get messy. Job Hunt is the app for
              you to get your organised! Register/Login to organise your job
              hunting journey so you can focus on what matters most.
            </Typography>

            <Button variant='contained' sx={{ mt: 4, width: '200px' }}>
              <Link sx={{ color: 'white' }} to='/register'>
                <Typography sx={{ letterSpacing: 2, color: 'white' }}>
                  Login/Register
                </Typography>
              </Link>
            </Button>
          </Box>
        </Box>
        <Box
          display={{ xs: 'none', md: 'block' }}
          sx={{ width: '45%', alignSelf: 'center' }}
        >
          <JobHuntLogo />
        </Box>
      </Box>
    </Box>
  )
}

export default Landing
