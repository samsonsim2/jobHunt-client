import React from 'react'
import TextField from '@mui/material/TextField'
const FormRow = ({ type, name, value, handleChange, formTitle }) => {
  return (
    <>
      <TextField
        id={name}
        type={type}
        name={name}
        label={name}
        defaultValue=''
        margin='normal'
        onChange={handleChange}
      />
    </>
  )
}

export default FormRow