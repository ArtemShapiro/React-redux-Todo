import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ProjectsList from '../../containers/projects/ProjectsList'
import AddProject from '../../containers/projects/AddProject'
import TaskDialog from '../../containers/tasks/TaskDialog'

class App extends Component  {
  componentWillReceiveProps(nextProps) {
    this.props.setRouteParams(nextProps.routeParams)
  }

  render(){
    return (
      <div className='columns app-content h-100'>
        <div className='column is-4 is-offset-4 h-100'>
          <div className='h-100'>
            <ProjectsList />
            <AddProject />
            <TaskDialog />
          </div>
        </div>
      </div>
    )
  }
}


App.propTypes = {
  routeParams: PropTypes.shape({
    task_id: PropTypes.string,
    id: PropTypes.string
  }),
  setRouteParams: PropTypes.func.isRequired
}

export default App
