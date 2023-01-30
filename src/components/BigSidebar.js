import * as React from 'react'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Cloud from '@mui/icons-material/Cloud'
import { Box, Stack } from '@mui/system'
import links from '../utils/links'
import { NavLink } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

const BigSidebar = () => {
  let normalStyle = {
    color: '#bdbdbd',
  }
  let activeStyle = {
    color: '#1769aa',
  }
  return (
    <Paper sx={{ width: 320, height: '100vh', maxWidth: '100%' }}>
      <MenuList>
        {links.map((item) => {
          return (
            <MenuItem key={item.id}>
              <NavLink
                to={item.path}
                style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
              >
                <Stack direction='row' spacing={2}>
                  <Box>{item.icon}</Box>
                  <Box>{item.text}</Box>
                </Stack>
              </NavLink>
            </MenuItem>
          )
        })}
      </MenuList>
    </Paper>
  )
}

export default BigSidebar
