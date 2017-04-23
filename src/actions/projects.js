import { makeRequest } from './index'
import { replace } from 'react-router-redux'
import {SubmissionError} from 'redux-form'

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
  projects
})

const deleteProject = (id) => ({
  type: 'DELETE_PROJECT',
  id
})

const addProjectsRequestSuccess = (data) =>
  addProjects(data)

const addProjectsRequestFailure = (error) => {
  throw error
}

// loadProjects action to load projects for the current
export const loadProjects = () =>
  makeRequest(
    'http://127.0.0.1:4000/api/v1/projects',
    { success: addProjectsRequestSuccess, failure: addProjectsRequestFailure }
  )

const addProjectRequestSuccess = (data) =>
  dispatch => {
    dispatch(addProject(data))
    dispatch(replace('/'))
  }

const addProjectRequestFailure = (error) => {
  if (error.response) {
    throw new SubmissionError({ _error: error.response.data.errors.full_messages[0] })
  }
  throw error
}

// createProject action to create project for the current user
export const createProject = (data) =>
  makeRequest(
    'http://127.0.0.1:4000/api/v1/projects',
    { success: addProjectRequestSuccess, failure: addProjectRequestFailure },
    'post',
    data
  )

const deleteProjectSuccess = (data) => () =>
  deleteProject(data)

const deleteProjectFailure = (error) => {
  throw error
}

// destroyProject action to delete a project
export const destroyProject = (data) => (
  makeRequest(
    `http://127.0.0.1:4000/api/v1/projects/${data}`,
    { success: deleteProjectSuccess(data), failure: deleteProjectFailure },
    'delete',
    data
  )
)
