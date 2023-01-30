import React from 'react'
import TextField from '@mui/material/TextField'
const FormRow = ({ type, name, value, handleChange, formTitle, style }) => {
  return (
    <>
      <TextField
        id={name}
        type={type}
        name={name}
        label={name}
        defaultValue={value}
        margin='normal'
        onChange={handleChange}
        sx={style ? style : { width: '100%' }}
      />
    </>
  )
}

export default FormRow
