import React, { PropTypes } from 'react'
// import { Grid } from 'semantic-ui-react'
import Layout from 'material-ui/Layout'

const layout = ({children}) => (
  <Layout item xs={12}>
    <Layout container align='center' justify='center' className='h-100'>
      <Layout item xs={2}>
        {children}
      </Layout>
    </Layout>
  </Layout>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default layout
