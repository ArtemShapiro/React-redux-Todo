import React, {PropTypes} from 'react'
// import { Grid, Button, Icon } from 'semantic-ui-react'
import Layout from 'material-ui/Layout'
import Text from 'material-ui/Text'
import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import Toolbar from 'material-ui/Toolbar'

const ProjectsLayout = ({children}) => (
  <Layout item xs={12}>
    <AppBar>
      <Toolbar>
        <Text type="title" className='act-as-flex' colorInherit>Todo List</Text>
        <Button contrast>Sign out</Button>
      </Toolbar>
    </AppBar>
    <Layout container justify='center' className='app-content'>
      <Layout item xs={3}>
        {children}
      </Layout>
    </Layout>
  </Layout>
)

ProjectsLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default ProjectsLayout
