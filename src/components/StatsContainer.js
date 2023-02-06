import React from 'react'
import { useAppContext } from '../context/appContext'
import StatsItem from './StatsItem'
import { Card } from '@mui/material'
import { Box } from '@mui/system'
import WorkIcon from '@mui/icons-material/Work'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import BugReportIcon from '@mui/icons-material/BugReport'

const StatsContainer = () => {
  const { stats } = useAppContext()

  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.pending || 0,
      icon: <WorkIcon fontSize='large' sx={{ color: '#e9b949' }} />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'interviews scheduled',
      count: stats.interview || 0,
      icon: <CalendarMonthIcon fontSize='large' sx={{ color: '#647acb' }} />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'jobs declined',
      count: stats.declined || 0,
      icon: <BugReportIcon fontSize='large' sx={{ color: '#d66a6a' }} />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ]
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,

        justifyContent: 'space-between',

        width: '100%',
      }}
    >
      {defaultStats.map((item, index) => {
        return <StatsItem key={index} {...item} />
      })}
    </Box>
  )
}

export default StatsContainer
