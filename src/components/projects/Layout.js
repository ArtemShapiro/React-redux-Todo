import React from 'react'
import PropTypes from 'prop-types'

import AppBar from 'material-ui/AppBar'

import SignOutButton from '../../containers/authorization/SignOutButton'

const ProjectsLayout = ({children}) => (
  <div className='h-100'>
    <AppBar title='Task List' showMenuIconButton={false} iconElementRight={<SignOutButton />}/>
      {children}
  </div>
)

ProjectsLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default ProjectsLayout
