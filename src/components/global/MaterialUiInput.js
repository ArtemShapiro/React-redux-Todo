import React, {Component} from 'react'
import TextField from 'material-ui/TextField'

class MaterialUiInput extends Component {
  componentWillMount() {
    const { input, defaultValue } = this.props
    input.onChange(defaultValue)
  }

  render () {
    const { input, meta: { touched, error }, placeholder, label, type } = this.props
    return (
      <TextField
        errorText={touched && error}
        floatingLabelText={label}
        floatingLabelFixed={true}
        hintText={placeholder}
        fullWidth={true}
        type={type}
        {...input}
      />
    )
  }
}
export default MaterialUiInput
