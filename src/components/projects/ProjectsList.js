import React from 'react'

import Project from '../../containers/projects/Project'

const ProjectsList = ({projects}) => {
  return (
    <div className='columns is-multiline'>
      {projects.map((project, index) =>
        <div key={index} className='column is-12'>
          <Project {...project} />
        </div>
      )}
    </div>
  )
}

export default ProjectsList
