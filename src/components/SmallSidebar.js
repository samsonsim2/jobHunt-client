import { Button, Modal, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import links from '../utils/links'
import { NavLink } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

const SmallSidebar = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70vw',
    height: '70vh',
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column',
    p: 4,
  }
  const { showSidebar, toggleSidebar } = useAppContext()
  const [open, setOpen] = React.useState(true)
  let normalStyle = {
    color: '#bdbdbd',
  }
  let activeStyle = {
    color: '#1769aa',
  }
  return (
    <Modal open={showSidebar} sx={{ borderRadius: 10 }}>
      <Box sx={style}>
        <Button sx={{ alignSelf: 'flex-end' }} onClick={toggleSidebar}>
          {' '}
          <CloseIcon sx={{ alignSelf: 'flex-end' }} />
        </Button>
        <Typography variant='h5' sx={{ alignSelf: 'center', mt: 4 }}>
          Job-Hunt
        </Typography>
        <Box sx={{ alignSelf: 'center', mt: 4 }}>
          {links.map((item) => {
            return (
              <Box key={item.id}>
                <NavLink
                  to={item.path}
                  onClick={toggleSidebar}
                  style={({ isActive }) =>
                    isActive ? activeStyle : normalStyle
                  }
                >
                  <Stack direction='row' spacing={2}>
                    <Box>{item.icon}</Box>
                    <Box>{item.text}</Box>
                  </Stack>
                </NavLink>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Modal>
  )
}

export default SmallSidebar
