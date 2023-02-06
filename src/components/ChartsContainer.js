import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useAppContext } from '../context/appContext'
import AreaChart from './AreaChart'
import BarChart from './BarChart'

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true)
  const { monthlyApplications: data } = useAppContext()
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography variant='h4' sx={{ mt: 3 }}>
          Monthly Applications
        </Typography>
        <Button onClick={() => setBarChart(!barChart)} sx={{ width: '200px' }}>
          {barChart ? 'Area  Chart' : 'Bar Chart'}
        </Button>

        <Box sx={{ width: '90%' }}>
          {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
        </Box>
      </Box>
    </>
  )
}

export default ChartsContainer
