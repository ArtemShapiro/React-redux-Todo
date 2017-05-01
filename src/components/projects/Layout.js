import React, {PropTypes} from 'react'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

const ProjectsLayout = ({children}) => (
  <div>
    <AppBar title='Todo List' iconElementRight={<FlatButton label='Sign out'/>}/>
    <div className='columns app-content'>
      <div className='column is-4 is-offset-4'>
        {children}
      </div>
    </div>
  </div>
)

ProjectsLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default ProjectsLayout
