import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'

import RaisedButton from 'material-ui/RaisedButton'

import Spinner from '../global/Spinner'
import Project from '../../containers/projects/Project'

class ProjectsList extends Component {
  componentWillMount () {
    this.props.loadProjects()
  }

  render () {
    const { projects, loading } = this.props
    const child = (projects.length > 0 ) ? (
      <div className='columns is-multiline'>
        {projects.map((project, index) => (
            <div key={index} className='column is-12'>
              <Project {...project} />
            </div>
          )
        )}
      </div>
    ) : (
      <div className='no-projects-container h-100'>
        <div className='no-projects-label'>You do not have any projects yet.</div>
        <div className='no-projects-label'><RaisedButton primary label='Add new project' containerElement={<Link to='/project/new' />} /></div>
      </div>
    )

    return  (
      <Spinner loading={loading} size={72} thickness={5}>
        {child}
      </Spinner>
    )
  }
}

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    id:   PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  loadProjects: PropTypes.func.isRequired
}

export default ProjectsList
