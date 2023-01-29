import * as React from 'react'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'
import { useAppContext } from '../context/appContext'

const AlertBar = () => {
  const { alertType, alertText } = useAppContext()
  return <Alert severity={alertType}>{alertText}</Alert>
}

export default AlertBar
