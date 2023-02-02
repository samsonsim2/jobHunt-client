import React, { useState } from 'react'

import { Box, boxSizing } from '@mui/system'
import { Alert, Button, Card, Stack, Typography } from '@mui/material'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useAppContext } from '../context/appContext'

const FormRowSelect = ({ name, value, handleChange, style, field, list }) => {
  return (
    <FormControl sx={style} size='small'>
      <InputLabel id='demo-select-small'>{field}</InputLabel>
      <Select
        labelId='demo-select-small'
        id='demo-select-small'
        value={value}
        name={name}
        label={name}
        onChange={handleChange}
      >
        {list.map((item, index) => {
          return (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default FormRowSelect
