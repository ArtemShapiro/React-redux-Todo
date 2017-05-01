import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import headers from './headers'
import projects from './projects'
import todos from './todos'

const todoApp = combineReducers({
  headers,
  projects,
  todos,
  form: formReducer
})

export default todoApp
