import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import Button from 'material-ui/Button'

import ProjectsList from '../containers/projects/ProjectsList'
import AddProject from '../containers/projects/AddProject'

class App extends Component {
  componentWillMount () {
    this.props.loadProjects()
  }

  render () {
    return (
      <div>
        <ProjectsList /><br />
        <AddProject />
      </div>
    )
  }
}

export default App
