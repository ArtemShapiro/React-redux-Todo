import { makeRequest } from './index'

import { replace } from 'react-router-redux'
import {SubmissionError} from 'redux-form'

// Actions for redux store

const addTodo = (todo) => ({
  type: 'ADD_TODO',
  todo: {
    name: todo.name,
    done: todo.done,
    deadline: todo.deadline,
    projectId: todo.project_id
  }
})

export const addTodos = (todos) => ({
  type: 'ADD_TODOS',
  todos: todos.map(todo => ({
    name: todo.name,
    done: todo.done,
    deadline: todo.deadline,
    projectId: todo.project_id
  }))
})

const createTodoRequestSuccess = (data) =>
  dispatch => {
    dispatch(addTodo(data))
    dispatch(replace('/'))
  }

const createTodoRequestFailure = (error) => {
  if (error.response) {
    throw new SubmissionError({ _error: error.response.data.errors.full_messages[0] })
  }
  throw error
}

// createTodo action to create todo for the project
export const createTodo = (data) =>
  makeRequest(
    `http://127.0.0.1:4000/api/v1/projects/${data.project_id}/todos`,
    { success: createTodoRequestSuccess, failure: createTodoRequestFailure },
    'post',
    data
  )
