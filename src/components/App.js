import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'

import ProjectsList from './projects/ProjectsList'
import AddProject from '../containers/projects/AddProject'

class App extends Component {
  componentWillMount () {
    this.props.loadProjects()
  }

  render () {
    return (
      <div>
        <Header as='h2' className='aligned center'>Projects</Header>
        <ProjectsList projects={this.props.projects} /><br />
        <AddProject />
      </div>
    )
  }
}

export default App
