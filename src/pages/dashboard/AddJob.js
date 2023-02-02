import React from 'react'
import { useAppContext } from '../../context/appContext'
import FormRow from '../../components/FormRow'
import AlertBar from '../../components/AlertBar'
import { Box, boxSizing } from '@mui/system'
import { Alert, Button, Card, Stack, Typography } from '@mui/material'
import { DISPLAY_ALERT } from '../../context/actions'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import FormRowSelect from '../../components/FormRowSelect'
import { create } from '@mui/material/styles/createTransitions'

const AddJob = () => {
  const {
    showAlert,
    isEditing,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    statusOptions,
    status,
    handleChange,
    clearValues,
    createJob,
    isLoading,
    editJob,
  } = useAppContext()

  const handleSubmit = (e) => {
    console.log('handle submit')
    e.preventDefault()

    if (!position || !company || !jobLocation) {
      displayAlert()
    }
    if (isEditing) {
      editJob()
      return
    } else createJob()
  }

  return (
    <>
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
          {showAlert && <AlertBar />}
          {isEditing ? (
            <Typography>Edit Job</Typography>
          ) : (
            <Typography>Add Job</Typography>
          )}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              flexWrap: 'wrap',
              gap: 5,
            }}
          >
            <FormRow
              name='position'
              type='text'
              value={position}
              style={{ width: { xs: '90%', md: '30%' } }}
              handleChange={(e) => {
                handleChange(e.target.name, e.target.value)
              }}
            />

            <FormRow
              name='company'
              type='text'
              value={company}
              style={{ width: { xs: '90%', md: '30%' } }}
              handleChange={(e) => {
                handleChange(e.target.name, e.target.value)
              }}
            />

            <FormRow
              name='jobLocation'
              type='text'
              value={jobLocation}
              style={{ width: { xs: '90%', md: '30%' } }}
              handleChange={(e) => {
                handleChange(e.target.name, e.target.value)
              }}
            />

            <FormRowSelect
              name='jobType'
              value={jobType}
              handleChange={(e) => {
                handleChange(e.target.name, e.target.value)
              }}
              style={{ width: { xs: '90%', md: '30%' } }}
              field={'Job type'}
              list={jobTypeOptions}
            ></FormRowSelect>

            <FormRowSelect
              name='status'
              value={status}
              handleChange={(e) => {
                handleChange(e.target.name, e.target.value)
              }}
              style={{ width: { xs: '90%', md: '30%' } }}
              field={'Status'}
              list={statusOptions}
            ></FormRowSelect>

            <Box
              sx={{
                width: { xs: '90%', md: '30%' },

                display: 'flex',
                justifyContent: 'center',
                gap: 2,
              }}
            >
              <Button
                variant='contained'
                sx={{ width: '50%' }}
                onClick={handleSubmit}
                disabled={isLoading}
              >
                Submit
              </Button>
              <Button
                variant='contained'
                sx={{ width: '50%' }}
                onClick={(e) => {
                  e.preventDefault()
                  clearValues()
                }}
              >
                Clear
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  )
}
export default AddJob
