import React from 'react'
import PropTypes from 'prop-types'

import CircularProgress from 'material-ui/CircularProgress'

const Spinner = ({children, loading}) => {
  const spinner = (
    <div className='circle-progress h-100'>
      <CircularProgress size={72} thickness={5} />
    </div>
  )
  return loading ? spinner : children
}

Spinner.propTypes = {
  children: PropTypes.element.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Spinner
