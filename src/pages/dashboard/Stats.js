import { Card } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import ChartsContainer from '../../components/ChartsContainer'
import Loading from '../../components/Loading'
import StatsContainer from '../../components/StatsContainer'
import { useAppContext } from '../../context/appContext'

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext()

  useEffect(() => {
    showStats()
  }, [])

  if (isLoading) {
    return <Loading />
  } else
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          sx={{
            width: '95%',
            justifyContent: 'center',
            mt: 4,
            boxSizing: 'border-box',
            p: 4,
          }}
        >
          <Box>
            <StatsContainer />
            {monthlyApplications.length && <ChartsContainer />}
          </Box>
        </Card>
      </Box>
    )
}
export default Stats
