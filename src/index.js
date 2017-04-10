import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'

import { routerMiddleware } from 'react-router-redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import * as Cookies from 'js-cookie'
import logger from 'redux-logger'

import SignInForm from './containers/authorization/SignInForm'
import SignUpForm from './containers/authorization/SignUpForm'
import AuthLayout from './components/authorization/Layout'

import Todos from './components/todos/Todos'
import AddTodoForm from './containers/todos/AddTodoForm'
import TodosLayout from './components/todos/Layout'
import FormLayout from './components/todos/FormLayout'

import { setHeaders } from './actions'

import todoApp from './reducers'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

let store = createStore(todoApp, applyMiddleware(logger, routerMiddleware(hashHistory)))

const authorized = (state, replace, callback) => {
  const token = Cookies.get('token')
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
      <Route path='/' onEnter={authorized}>
        <Route component={TodosLayout}>
          <IndexRoute component={Todos} />
        </Route>

        <Route component={FormLayout}>
          <Route path='/todos/new' component={AddTodoForm} />
        </Route>
      </Route>

      <Route component={AuthLayout}>
        <Route path='/sign-in' component={SignInForm} />
        <Route path='/sign-up' component={SignUpForm} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
