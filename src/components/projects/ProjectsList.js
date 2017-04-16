import React from 'react'

import Project from './Project'

const ProjectsList = ({projects}) => {
  return (
    <div>
      {projects.map((project, index) => <Project key={index} {...project} />)}
    </div>
  )
}

export default ProjectsList
