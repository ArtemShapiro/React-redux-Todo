import React from 'react'
import PropTypes from 'prop-types'

import ProjectsList from '../../containers/projects/ProjectsList'
import AddProject from '../../containers/projects/AddProject'

const App = ({routeParams}) => (
  <div className='h-100'>
    <ProjectsList routeParams={routeParams} />
    <AddProject />
  </div>
)


App.propTypes = {
  routeParams: PropTypes.shape({
    task_id: PropTypes.string,
    id: PropTypes.string
  })
}

export default App
