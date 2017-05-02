import React from 'react'

import Project from '../../containers/projects/Project'

const ProjectsList = ({projects, routeParams}) => {
  return (
    <div className='columns is-multiline'>
      {projects.map((project, index) => {
        return(
          <div key={index} className='column is-12'>
            <Project {...project} routeParams={routeParams} />
          </div>
        )}
      )}
    </div>
  )
}

export default ProjectsList
