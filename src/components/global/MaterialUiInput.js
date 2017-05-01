import React from 'react'
import TextField from 'material-ui/TextField'

const MaterialUiInput = ({input, meta: { touched, error }, placeholder, label, ...other}) => {
  return (
    <TextField
      errorText={touched && error}
      floatingLabelText={label}
      floatingLabelFixed={true}
      hintText={placeholder}
      fullWidth={true}
      {...other}
      {...input}
    />
  )
}
export default MaterialUiInput
