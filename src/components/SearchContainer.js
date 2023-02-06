import React from 'react'
import { useAppContext } from '../context/appContext'
import FormRow from './FormRow'
import FormRowSelect from './FormRowSelect'
import { Box, boxSizing } from '@mui/system'
import { Alert, Button, Card, Stack } from '@mui/material'

const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    statusOptions,
    jobTypeOptions,
    handleChange,
    clearFilters,
  } = useAppContext()

  const handleSearch = (name, value) => {
    if (isLoading) return
    handleChange(name, value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    clearFilters()
  }
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          sx={{
            width: '95%',
            justifyContent: 'center',
            mt: 2,
            boxSizing: 'border-box',
            p: 4,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              flexWrap: 'wrap',
              gap: 3,
            }}
          >
            <FormRowSelect
              name='searchType'
              value={searchType}
              handleChange={(e) => {
                handleChange(e.target.name, e.target.value)
              }}
              style={{ width: { xs: '90%', md: '30%' } }}
              field={'type'}
              list={['all', ...jobTypeOptions]}
            ></FormRowSelect>

            <FormRowSelect
              name='searchStatus'
              value={searchStatus}
              handleChange={(e) => {
                handleChange(e.target.name, e.target.value)
              }}
              style={{ width: { xs: '90%', md: '30%' } }}
              field={'status'}
              list={['all', ...statusOptions]}
            ></FormRowSelect>

            <FormRowSelect
              name='sort'
              value={sort}
              handleChange={(e) => {
                handleChange(e.target.name, e.target.value)
              }}
              style={{ width: { xs: '90%', md: '30%' } }}
              field={'sort'}
              list={sortOptions}
            ></FormRowSelect>

            <FormRow
              name='search'
              type='text'
              value={search}
              handleChange={(e) => {
                handleSearch(e.target.name, e.target.value)
              }}
              style={{ width: { xs: '90%', md: '30%' } }}
            />
            <Button
              variant='contained'
              sx={{ width: '20%', height: '100%', alignSelf: 'center' }}
              disabled={isLoading}
              onClick={handleSubmit}
            >
              Clear filters
            </Button>
          </Box>
        </Card>
      </Box>
    </>
  )
}

export default SearchContainer
