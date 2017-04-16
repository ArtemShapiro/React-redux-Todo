import React, { PropTypes } from 'react'
// import { Grid } from 'semantic-ui-react'
import Layout from 'material-ui/Layout'

const layout = ({children}) => (
  <Layout item xl={12}>
    <Layout container align='center' direction='row' justify='center' className='h-100'>
      {children}
    </Layout>
  </Layout>
)
// <Layout container align='center' direction='row' justify='center' className='h-100'>
//
// <Grid className='h-100' verticalAlign='middle' columns={5} centered>
//   <Grid.Row className='child-center'>
//     <Grid.Column>
//       {children}
//     </Grid.Column>
//   </Grid.Row>
// </Grid>
Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default layout
