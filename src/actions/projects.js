import { makeRequest } from './index'
import { replace } from 'react-router-redux'
import {SubmissionError} from 'redux-form'

export const addProject = (project) => ({
  type: 'ADD_PROJECT',
  project: {
    name: project.name,
    id: project.id
  }
})

export const addProjects = (projects) => ({
  type: 'ADD_PROJECTS',
  projects
})

export const addProjectsRequestSuccess = (data) =>
  dispatch => {
    dispatch(addProjects(data))
  }

export const addProjectsRequestFailure = (error) => {
  throw error
}

export const loadProjects = () =>
  makeRequest(
    'http://127.0.0.1:4000/api/v1/projects',
    { success: addProjectsRequestSuccess, failure: addProjectsRequestFailure }
  )

export const addProjectRequestSuccess = (data) =>
  dispatch => {
    dispatch(addProject(data))
    dispatch(replace('/'))
  }

export const addProjectRequestFailure = (error) => {
  if (error.response) {
    console.log('Response error', error.response)
    throw new SubmissionError({ _error: error.response.data.errors.full_messages[0] })
  }
  throw error
}

export const createProject = (data) =>
  makeRequest(
    'http://127.0.0.1:4000/api/v1/projects',
    { success: addProjectRequestSuccess, failure: addProjectRequestFailure },
    'post',
    data
  )
