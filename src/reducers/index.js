import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import tasks from './tasks'
import headers from './headers'
import projects from './projects'
import comments from './comments'
import attachments from './attachments'

const todoApp = combineReducers({
  tasks,
  headers,
  projects,
  comments,
  attachments,
  form: formReducer
})

export default todoApp
