import { filter } from 'lodash'

const todos = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return [
      ...state, action.todo
    ]
  case 'ADD_TODOS':
    return [
      ...action.todos
    ]
  case 'PATCH_TODO':
    return state.map(todo => (todo.id === action.todo.id) ? { ...action.todo } : todo)
  case 'DELETE_TODO':
    return filter(state, (todo) => todo.id !== action.id)
  default:
    return state
  }
}

export default todos
