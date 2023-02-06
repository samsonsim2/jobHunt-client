import { Card, Icon, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const StatsItem = ({ count, title, icon, color, bcg }) => {
  return (
    <Card sx={{ padding: 4, width: { xs: '80%', sm: '27%' } }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',

          width: '100%',
        }}
      >
        <Typography variant='h3' sx={{ color: `${color}`, fontWeight: 600 }}>
          {count}
        </Typography>
        <Box sx={{ backgroundColor: `${bcg}`, borderRadius: 1, padding: 1 }}>
          {icon}
        </Box>
      </Box>

      <Typography>{title}</Typography>
    </Card>
  )
}

export default StatsItem
