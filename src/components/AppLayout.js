import React from 'react'
import PropTypes from 'prop-types'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const AppLayout = ({children}) => (
  <MuiThemeProvider>
    <div className='main h-100'>
      {children}
    </div>
  </MuiThemeProvider>
)

AppLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default AppLayout
