import React, { PropTypes } from 'react'
// import { Grid, Button, Icon } from 'semantic-ui-react'
import Layout from 'material-ui/Layout'

const ProjectsLayout = ({children}) => (
  <Layout item xs={12}>
    <Layout container justify='center'>
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
