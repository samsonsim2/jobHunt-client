import { Button, Stack } from '@mui/material'
import React, { useState } from 'react'
import { useAppContext } from '../context/appContext'
import Pagination from '@mui/material/Pagination'

const PageBtnContainer = () => {
  const { numOfPages, changePage, page } = useAppContext()

  const handleChange = (event, value) => {
    changePage(value)
  }
  return (
    <Stack spacing={2}>
      <Pagination
        count={numOfPages}
        color='primary'
        sx={{ mt: 2 }}
        page={page}
        onChange={handleChange}
      />
    </Stack>
  )
}

export default PageBtnContainer
