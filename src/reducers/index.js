import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import users from './users'
import tasks from './tasks'
import modal from './modal'
import headers from './headers'
import projects from './projects'
import comments from './comments'
import routeParams from './routeParams'
import attachments from './attachments'

const todoApp = combineReducers({
  users,
  tasks,
  modal,
  headers,
  projects,
  comments,
  attachments,
  routeParams,
  form: formReducer
})

export default todoApp
