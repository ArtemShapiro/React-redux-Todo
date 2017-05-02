import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'

import { routerMiddleware } from 'react-router-redux'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'

import * as Cookies from 'js-cookie'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'

import AppLayout from './components/AppLayout'
import FormLayout from './components/global/FormLayout'

import App from './containers/projects/App'

import SignInForm from './containers/authorization/SignInForm'
import SignUpForm from './containers/authorization/SignUpForm'

import AddProjectForm from './containers/projects/AddProjectForm'
import ProjectsLayout from './components/projects/Layout'

import AddTodoForm from './containers/todos/AddTodoForm'

import { setHeaders } from './actions'

import todoApp from './reducers'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import 'semantic-ui-css/semantic.min.css'
import './index.css'
import './grid.css'

let store = createStore(todoApp, applyMiddleware(ReduxThunk, routerMiddleware(hashHistory), logger))

const authorized = (state, replace, callback) => {
  const token = Cookies.getJSON('token')
  if (token) {
    store.dispatch(setHeaders(token))
    callback()
  }
  replace('/sign-in')
  callback()
}

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={AppLayout}>
        <Route component={ProjectsLayout} onEnter={authorized}>
          <IndexRedirect to='/projects' />
          <Route path='/projects(/:id)(/todos/:todo_id)' component={App} />
        </Route>

        <Route component={FormLayout} onEnter={authorized}>
          <Route path='/project/new' component={AddProjectForm} />
          <Route path='/projects/:id/todo/new' component={AddTodoForm} />
        </Route>

        <Route component={FormLayout}>
          <Route path='/sign-in' component={SignInForm} />
          <Route path='/sign-up' component={SignUpForm} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
