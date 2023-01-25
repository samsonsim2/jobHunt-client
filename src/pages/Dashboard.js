import React from 'react'
import { useAppContext } from '../context/appContext'

export const Dashboard = () => {
  const { test } = useAppContext()

  return <div>Dashboard</div>
}
