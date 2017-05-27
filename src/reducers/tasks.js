import { filter } from 'lodash'

const tasks = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TASK':
    return [
      ...state, action.task
    ]
  case 'ADD_TASKS':
    return [
      ...action.tasks
    ]
  case 'PATCH_TASK':
    return state.map(task => (task.id === action.task.id) ? { ...action.task } : task)
  case 'DELETE_TASK':
    return filter(state, (task) => task.id !== action.id)
  default:
    return state
  }
}

export default tasks
