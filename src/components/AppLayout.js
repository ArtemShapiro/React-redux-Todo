import React from 'react'
// import { Grid } from 'semantic-ui-react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Layout from 'material-ui/Layout'

const layout = ({children}) => (
  <MuiThemeProvider>
    <Layout container className='main h-100'>
      {children}
    </Layout>
  </MuiThemeProvider>
)

export default layout
