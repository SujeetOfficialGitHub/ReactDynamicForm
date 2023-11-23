import TextField from '@mui/material/TextField';
import React from 'react'

const CstInput = (props) => {
  const { id, label, value, onChange, validate } = props;
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    // Perform validation
    if (validate && !validate(inputValue)) {
      console.log(`Validation faild for field ${id}`)
      return;
    }
    onChange(id, inputValue)
  }
  return (
    <TextField
      id={`field-${id}`}
      label={label}
      value={value}
      onChange={handleInputChange}
      variant='outlined'
      size='small'
      margin='normal'
    />
  )
}

export default CstInput
