import { Box } from '@mui/system'
import React from 'react'
import JobsContainer from '../../components/JobsContainer'
import SearchContainer from '../../components/SearchContainer'

const AllJobs = () => {
  return (
    <>
      <Box sx={{ background: '#f5f5f5', width: '100%', height: '100%' }}>
        <SearchContainer />
        <JobsContainer />
      </Box>
    </>
  )
}
export default AllJobs
