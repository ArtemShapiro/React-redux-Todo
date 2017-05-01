import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const layout = ({children}) => (
  <MuiThemeProvider>
    <div className='main h-100'>
      {children}
    </div>
  </MuiThemeProvider>
)

export default layout
