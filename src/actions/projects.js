import { makeRequest } from './index'
import { addTasks } from './tasks'

import { replace } from 'react-router-redux'
import { flatten } from 'lodash'

// Actions for redux store

const addProject = (project) => ({
  type: 'ADD_PROJECT',
  project: {
    name: project.name,
    id:   project.id
  }
})

const patchProject = (project) => ({
  type: 'PATCH_PROJECT',
  project: {
    name: project.name,
    id:   project.id
  }
})

const addProjects = (projects) => ({
  type: 'ADD_PROJECTS',
  projects: projects.map(project => ({
    name: project.name,
    id:   project.id
  }))
})

const deleteProject = (id) => ({
  type: 'DELETE_PROJECT',
  id
})

const projectsLoadRequest = () => ({
  type: 'PROJECTS_LOAD_REQUEST'
})

const loadProjectsRequestSuccess = (data) =>
  dispatch => {
    dispatch(addProjects(data.projects))
    dispatch(addTasks(flatten(data.projects.map(project => project.tasks))))
  }

const loadProjectsRequestFailure = (error) => {
  throw error
}

// loadProjects action to load projects for the current
export const loadProjects = () =>
  dispatch => {
    dispatch(projectsLoadRequest())
    dispatch(makeRequest(
      '/api/v1/projects',
      { success: loadProjectsRequestSuccess, failure: loadProjectsRequestFailure }
    ))
  }

const createProjectRequestSuccess = (data) =>
  dispatch => {
    dispatch(addProject(data))
    dispatch(replace('/'))
  }

const createProjectRequestFailure = (error) => {
  throw error
}

// createProject action to create project for the current user
export const createProject = (data) =>
  makeRequest(
    '/api/v1/projects',
    { success: createProjectRequestSuccess, failure: createProjectRequestFailure },
    'post',
    data
  )

const updateProjectRequestSuccess = (data) =>
  dispatch => {
    dispatch(patchProject(data))
    dispatch(replace('/'))
  }

const updateProjectRequestFailure = (error) => {
  throw error
}

// updateProject action to patch a project
export const updateProject = (data) =>
  makeRequest(
    `/api/v1/projects/${data.id}`,
    { success: updateProjectRequestSuccess, failure: updateProjectRequestFailure },
    'patch',
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
    `/api/v1/projects/${data}`,
    { success: desrtoyProjectSuccess(data), failure: desrtoyProjectFailure },
    'delete'
  )
)
