import React from 'react'

import Layout from 'material-ui/Layout'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const layout = ({children}) => (
  <MuiThemeProvider>
    <Layout container className='main h-100'>
      {children}
    </Layout>
  </MuiThemeProvider>
)

export default layout
