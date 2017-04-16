import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'

import { routerMiddleware } from 'react-router-redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import * as Cookies from 'js-cookie'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'

import AppLayout from './components/AppLayout'
import App from './containers/App'

import SignInForm from './containers/authorization/SignInForm'
import SignUpForm from './containers/authorization/SignUpForm'
import AuthLayout from './components/authorization/Layout'

import AddProjectForm from './containers/projects/AddProjectForm'
import ProjectsLayout from './components/projects/Layout'
import FormLayout from './components/projects/FormLayout'

import { setHeaders } from './actions'

import todoApp from './reducers'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

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
          <IndexRoute component={App} />
        </Route>

        <Route component={FormLayout} onEnter={authorized}>
          <Route path='/projects/new' component={AddProjectForm} />
        </Route>

        <Route component={AuthLayout}>
          <Route path='/sign-in' component={SignInForm} />
          <Route path='/sign-up' component={SignUpForm} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
