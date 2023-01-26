import * as React from 'react'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'
import { useAppContext } from '../context/appContext'

const AlertBar = () => {
  const { alertType, alertMsg } = useAppContext()
  return <Alert severity={alertType}>{alertMsg}</Alert>
}

export default AlertBar
