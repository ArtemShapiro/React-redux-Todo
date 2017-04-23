import React from 'react'
import TextField from 'material-ui/TextField'

const MaterialUiInput = ({input, meta: { touched, error }, type, placeholder}) => {
  const valid = touched && error
  return (
    <TextField
      label={valid ? error : placeholder}
      error={valid ? true : false}
      type={type}
      {...input}
    />
  )
}
export default MaterialUiInput
