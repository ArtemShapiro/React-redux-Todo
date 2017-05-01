import React from 'react'

import Todo from './Todo'

const ProjectsList = ({todos}) => {
  return (
    <div>
      {todos.map((todo, index) =>
        <Todo key={index} {...todo} />
      )}
    </div>
  )
}

export default ProjectsList
