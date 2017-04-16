import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import headers from './headers'
import projects from './projects'

const todoApp = combineReducers({
  headers,
  projects,
  form: formReducer
})

export default todoApp
