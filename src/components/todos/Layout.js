import React, { PropTypes } from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'

const Layout = ({children}) => (
  <Grid columns={4} centered>
    <Grid.Row>
      <Button animated='fade' className='logout'>
        <Button.Content visible><Icon name='sign out' /></Button.Content>
        <Button.Content hidden>Logout</Button.Content>
      </Button>
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
