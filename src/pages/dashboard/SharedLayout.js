import { Button, Collapse } from '@mui/material'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import BigSidebar from '../../components/BigSidebar'
import NavBar from '../../components/NavBar'
import { useAppContext } from '../../context/appContext'

const SharedLayout = () => {
  const { showSidebar } = useAppContext()

  return (
    <Box sx={{ display: 'flex' }}>
      <Box display={{ xs: 'none', sm: 'block' }}>
        <Collapse orientation='horizontal' in={showSidebar} collapsedSize={0}>
          <BigSidebar />
        </Collapse>
      </Box>

      <Box display={{ xs: 'span', sm: 'block' }} sx={{ width: '100%' }}>
        <NavBar></NavBar>
        <Outlet />
      </Box>
    </Box>
  )
}
export default SharedLayout
