import React, { PropTypes } from 'react'
import { Grid } from 'semantic-ui-react'

const Layout = ({children}) => (
  <Grid className='h-100' verticalAlign='middle' columns={5} centered>
    <Grid.Row className='child-center'>
      <Grid.Column>
        {children}
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout
