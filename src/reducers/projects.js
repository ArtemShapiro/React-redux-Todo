import { filter } from 'lodash'

const projects = (state = [], action) => {
  switch (action.type) {
  case 'ADD_PROJECT':
    return [
      ...state, action.project
    ]
  case 'ADD_PROJECTS':
    return [
      ...action.projects
    ]
  case 'PATCH_PROJECT':
    return state.map(project => (project.id === action.project.id) ? { ...action.project } : project)
  case 'DELETE_PROJECT':
    return filter(state, (project) => project.id !== action.id)
  default:
    return state
  }
}

export default projects
