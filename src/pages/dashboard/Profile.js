import React, { useState } from 'react'
import { useAppContext } from '../../context/appContext'
import FormRow from '../../components/FormRow'
import AlertBar from '../../components/AlertBar'
import { Box, boxSizing } from '@mui/system'
import { Alert, Button, Card, Stack } from '@mui/material'

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext()
  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [lastName, setLastName] = useState(user?.lastName)
  const [location, setLocation] = useState(user?.location)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !lastName || !location) {
      displayAlert()
      console.log({ msg: 'Please provide all values' })
      return
    }
    updateUser({ name, email, lastName, location })
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              flexWrap: 'wrap',
              gap: 5,
            }}
          >
            <FormRow
              name='name'
              type='text'
              value={name}
              handleChange={(e) => setName(e.target.value)}
              style={{ width: { xs: '90%', md: '30%' } }}
            />

            <FormRow
              name='lastName'
              type='text'
              value={lastName}
              handleChange={(e) => setLastName(e.target.value)}
              style={{ width: { xs: '90%', md: '30%' } }}
            />

            <FormRow
              name='email'
              type='text'
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
              style={{ width: { xs: '90%', md: '30%' } }}
            />

            <FormRow
              name='location'
              type='text'
              value={location}
              handleChange={(e) => setEmail(e.target.value)}
              style={{ width: { xs: '90%', md: '30%' } }}
            />

            <Box sx={{ width: { xs: '90%', md: '30%' }, alignSelf: 'center' }}>
              <Button
                variant='contained'
                sx={{ width: '100%' }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  )
}
export default Profile
