import { filter } from 'lodash'

const initialState = {data: [], loading: false}

const projects = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_PROJECT':
    return { data: [...state.data, action.project], loading: false }
  case 'ADD_PROJECTS':
    return { data: [...action.projects], loading: false }
  case 'PATCH_PROJECT':
    return { data: state.data.map(project => (project.id === action.project.id) ? { ...action.project } : project), loading: false }
  case 'DELETE_PROJECT':
    return { data: filter(state.data, (project) => project.id !== action.id), loading: false }
  case 'PROJECTS_LOAD_REQUEST':
    return { ...state, loading: true }
  default:
    return state
  }
}

export default projects
