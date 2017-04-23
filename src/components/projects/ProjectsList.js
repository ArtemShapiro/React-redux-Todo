import React from 'react'
import Layout from 'material-ui/Layout'

import Project from './Project'

const ProjectsList = ({projects, onDeleteClick}) => {
  return (
    <Layout gutter={16} container direction='column'>
      {projects.map((project, index) =>
        <Layout item key={index}>
          <Project onDeleteClick={() => onDeleteClick(project.id)} {...project} />
        </Layout>
      )}
    </Layout>
  )
}

export default ProjectsList
