import React, { Component } from 'react'

import ProjectsList from '../../containers/projects/ProjectsList'
import AddProject from '../../containers/projects/AddProject'

class App extends Component {
  componentWillMount () {
    this.props.loadProjects()
  }

  render () {
    const routeParams = this.props.routeParams
    return (
      <div>
        <ProjectsList routeParams={routeParams} />
        <AddProject />
      </div>
    )
  }
}

export default App
