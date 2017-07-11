import React from 'react'
import PropTypes from 'prop-types'

import CircularProgress from 'material-ui/CircularProgress'

const Spinner = ({children, loading, size, thickness}) => {
  const spinner = (
    <div className='circle-progress h-100'>
      <CircularProgress size={size} thickness={thickness} />
    </div>
  )
  return loading ? spinner : children
}

Spinner.propTypes = {
  size: PropTypes.number.isRequired,
  thickness: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Spinner
