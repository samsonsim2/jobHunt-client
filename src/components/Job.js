import { Alert, Button, Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import WorkIcon from '@mui/icons-material/Work'

const Job = ({
  company,
  createdAt,
  position,
  _id,
  jobLocation,
  status,
  jobType,
}) => {
  const { setEditJob, deleteJob } = useAppContext()
  let date = moment(createdAt)
  date = date.format('MMM Do,YYYY')

  const statusType = () => {
    if (status === 'pending') {
      return 'info'
    }
    if (status === 'declined') {
      return 'error'
    }
    if (status === 'interview') {
      return 'success'
    }
  }

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        boxSizing: 'border-box',

        width: { xs: '100%', md: '48%' },

        p: 2,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
        <Box
          sx={{
            background: '#2196f3',
            width: 40,
            height: 40,
            borderRadius: 1,
            display: 'flex',
            justifyContent: 'center',

            color: 'white',
          }}
        >
          <Typography
            variant='h1'
            sx={{
              color: 'white',
              fontSize: 25,
              fontWeight: 800,

              alignSelf: 'center',
            }}
          >
            {company.charAt(0).toUpperCase()}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ fontWeight: 600 }}>{position}</Typography>
          <Typography sx={{ color: 'grey' }}>{company}</Typography>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{ width: '100%', height: '1px', background: 'grey', mt: 2 }}
        ></Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 1,
            m: 2,
          }}
        >
          <Typography sx={{ width: '45%' }}>
            <LocationOnIcon sx={{ paddingRight: 2 }} />
            {jobLocation}
          </Typography>
          <Typography sx={{ width: '45%' }}>
            <WorkIcon sx={{ paddingRight: 2 }} />
            {jobType}
          </Typography>

          <Typography sx={{ width: '45%' }}>
            <CalendarMonthIcon sx={{ paddingRight: 2 }} />
            {date}
          </Typography>
          <Box severity='success' sx={{ width: '45%' }}>
            <Alert
              sx={{ width: '40%', justifyContent: 'center' }}
              severity={statusType()}
              icon={false}
            >
              {status}
            </Alert>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant='contained'
            sx={{ background: '#dcedc8' }}
            onClick={() => setEditJob(_id)}
          >
            <Link to='/add-job'>Edit</Link>
          </Button>
          <Button
            variant='contained'
            sx={{ background: '#ef9a9a', color: '#b71c1c' }}
            onClick={() => deleteJob(_id)}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Card>
  )
}

export default Job
