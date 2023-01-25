import * as React from 'react'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'

const AlertBar = ({ severity, message }) => {
  return <Alert severity={severity}>{message}</Alert>
}

export default AlertBar
