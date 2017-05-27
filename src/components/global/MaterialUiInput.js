import React, {Component} from 'react'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField'

class MaterialUiInput extends Component {
  componentWillMount() {
    const { input, defaultValue } = this.props
    input.onChange(defaultValue)
  }

  render () {
    const { input, meta: { touched, error, submitFailed }, placeholder, label, type, multiLine } = this.props
    const styles = { marginBottom: '28px', marginTop: '-20px' }
    return (
      <TextField style={styles}
        errorText={touched && submitFailed && error}
        floatingLabelText={label}
        floatingLabelFixed={true}
        hintText={placeholder}
        fullWidth={true}
        multiLine={multiLine}
        type={type}
        {...input}
      />
    )
  }
}

MaterialUiInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  multiLine: PropTypes.bool
}

export default MaterialUiInput
