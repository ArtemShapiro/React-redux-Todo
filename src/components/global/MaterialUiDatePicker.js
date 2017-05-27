import React, {Component} from 'react'
import PropTypes from 'prop-types'

import DatePicker from 'material-ui/DatePicker'

class MaterialUiDatePicker extends Component {
  componentWillMount() {
    const { input, defaultValue } = this.props
    if (defaultValue) input.onChange(new Date(defaultValue))
  }

  render () {
    const { input: { onChange, name, value } } = this.props
    const date = (value === '') ? null : value
    return (
      <DatePicker fullWidth autoOk container="inline"
        name={name}
        value={date}
        onChange={(event, value) => onChange(value)}
      />
    )
  }
}

MaterialUiDatePicker.propTypes = {
  input: PropTypes.object.isRequired,
  defaultValue: PropTypes.string
}

export default MaterialUiDatePicker
