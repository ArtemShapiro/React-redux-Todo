import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import headers from './headers'

const todoApp = combineReducers({
  headers,
  form: formReducer
})

export default todoApp
