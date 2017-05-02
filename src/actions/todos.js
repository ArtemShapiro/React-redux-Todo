import { makeRequest } from './index'

import { replace } from 'react-router-redux'
import {SubmissionError} from 'redux-form'

// Actions for redux store

const addTodo = (todo) => ({
  type: 'ADD_TODO',
  todo: {
    id: todo.id,
    name: todo.name,
    done: todo.done,
    deadline: todo.deadline,
    priority: todo.priority,
    projectId: todo.project_id
  }
})

const patchTodo = (todo) => ({
  type: 'PATCH_TODO',
  todo: {
    id: todo.id,
    name: todo.name,
    done: todo.done,
    deadline: todo.deadline,
    priority: todo.priority,
    projectId: todo.project_id
  }
})

export const addTodos = (todos) => ({
  type: 'ADD_TODOS',
  todos: todos.map(todo => ({
    id: todo.id,
    name: todo.name,
    done: todo.done,
    deadline: todo.deadline,
    priority: todo.priority,
    projectId: todo.project_id
  }))
})

const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id
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
    `http://127.0.0.1:4000/api/v1/projects/${data.projectId}/todos`,
    { success: createTodoRequestSuccess, failure: createTodoRequestFailure },
    'post',
    data
  )

const updateTodoRequestSuccess = (data) =>
  dispatch => {
    dispatch(patchTodo(data))
    dispatch(replace('/'))
  }

const updateTodoRequestFailure = (error) => {
  if (error.response) {
    throw new SubmissionError({ _error: error.response.data.errors.full_messages[0] })
  }
  throw error
}

// updateTodo action to update todo for the project
export const updateTodo = (data) =>
  makeRequest(
    `http://127.0.0.1:4000/api/v1/projects/${data.projectId}/todos/${data.id}`,
    { success: updateTodoRequestSuccess, failure: updateTodoRequestFailure },
    'patch',
    data
  )

const destroyTodoRequestSuccess = (data) => () =>
  deleteTodo(data)

const destroyTodoRequestFailure = (error) => {
  throw error
}

// destroyTodo action to delete todo for the project
export const destroyTodo = (data) =>
  makeRequest(
    `http://127.0.0.1:4000/api/v1/projects/${data.projectId}/todos/${data.id}`,
    { success: destroyTodoRequestSuccess(data.id), failure: destroyTodoRequestFailure },
    'delete'
  )

export const swapPriority = (data, todos) =>
  dispatch => {

  }
