import { makeRequest } from './index'
import { addTodos } from './todos'

import { replace } from 'react-router-redux'
import {SubmissionError} from 'redux-form'
import { flatten } from 'lodash'

// Actions for redux store

const addProject = (project) => ({
  type: 'ADD_PROJECT',
  project: {
    name: project.name,
    id: project.id
  }
})

const addProjects = (projects) => ({
  type: 'ADD_PROJECTS',
  projects: projects.map(project => ({
    name: project.name,
    id: project.id
  }))
})

const deleteProject = (id) => ({
  type: 'DELETE_PROJECT',
  id
})

const loadProjectsRequestSuccess = (data) =>
  dispatch => {
    dispatch(addProjects(data))
    dispatch(addTodos(flatten(data.map(project => project.todos))))
  }

const loadProjectsRequestFailure = (error) => {
  throw error
}

// loadProjects action to load projects for the current
export const loadProjects = () =>
  makeRequest(
    'http://127.0.0.1:4000/api/v1/projects',
    { success: loadProjectsRequestSuccess, failure: loadProjectsRequestFailure }
  )

const createProjectRequestSuccess = (data) =>
  dispatch => {
    dispatch(addProject(data))
    dispatch(replace('/'))
  }

const createProjectRequestFailure = (error) => {
  if (error.response) {
    throw new SubmissionError({ _error: error.response.data.errors.full_messages[0] })
  }
  throw error
}

// createProject action to create project for the current user
export const createProject = (data) =>
  makeRequest(
    'http://127.0.0.1:4000/api/v1/projects',
    { success: createProjectRequestSuccess, failure: createProjectRequestFailure },
    'post',
    data
  )

const desrtoyProjectSuccess = (data) => () =>
  deleteProject(data)

const desrtoyProjectFailure = (error) => {
  throw error
}

// destroyProject action to delete a project
export const destroyProject = (data) => (
  makeRequest(
    `http://127.0.0.1:4000/api/v1/projects/${data}`,
    { success: desrtoyProjectSuccess(data), failure: desrtoyProjectFailure },
    'delete',
    data
  )
)
