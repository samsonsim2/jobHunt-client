import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'

import { useAppContext } from '../context/appContext'
import Job from './Job'
import Loading from './Loading'
import PageBtnContainer from './PageBtnContainer'

const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
  } = useAppContext()
  useEffect(() => {
    getJobs()
  }, [search, searchStatus, searchType, sort, page])

  if (isLoading) {
    return <Loading />
  }

  if (jobs.length === 0) {
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
          <Typography>No jobs to display</Typography>
        </Card>
      </Box>
    )
  }
  return (
    <>
      <Box
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
        }}
      >
        <Typography variant='h5' sx={{ fontWeight: 500, mb: 2 }}>
          {totalJobs} job{jobs.length > 1 && 's'}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          {jobs.map((job) => {
            return <Job key={job._id} {...job} />
          })}
        </Box>
        {numOfPages > 1 && <PageBtnContainer />}
      </Box>
    </>
  )
}

export default JobsContainer
