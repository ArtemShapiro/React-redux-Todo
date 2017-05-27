import { makeRequest } from './index'

import { replace } from 'react-router-redux'

// Actions for redux store

const addTask = (task) => ({
  type: 'ADD_TASK',
  task: {
    id:        task.id,
    name:      task.name,
    done:      task.done,
    deadline:  task.deadline,
    priority:  task.priority,
    projectId: task.project_id
  }
})

const patchTask = (task) => ({
  type: 'PATCH_TASK',
  task: {
    id:        task.id,
    name:      task.name,
    done:      task.done,
    deadline:  task.deadline,
    priority:  task.priority,
    projectId: task.project_id
  }
})

export const addTasks = (tasks) => ({
  type: 'ADD_TASKS',
  tasks: tasks.map(task => ({
    id:        task.id,
    name:      task.name,
    done:      task.done,
    deadline:  task.deadline,
    priority:  task.priority,
    projectId: task.project_id
  }))
})

const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  id
})

const createTaskRequestSuccess = (data) =>
  dispatch => {
    dispatch(addTask(data))
    dispatch(replace('/'))
  }

const createTaskRequestFailure = (error) => {
  throw error
}

// createTask action to create task for the project
export const createTask = (data) =>
  makeRequest(
    `http://127.0.0.1:4000/api/v1/projects/${data.projectId}/tasks`,
    { success: createTaskRequestSuccess, failure: createTaskRequestFailure },
    'post',
    data
  )

const updateTaskRequestSuccess = (data) =>
  dispatch => {
    dispatch(patchTask(data))
    dispatch(replace('/'))
  }

const updateTaskRequestFailure = (error) => {
  throw error
}

// updateTask action to update task for the project
export const updateTask = (data) =>
  makeRequest(
    `http://127.0.0.1:4000/api/v1/tasks/${data.id}`,
    { success: updateTaskRequestSuccess, failure: updateTaskRequestFailure },
    'patch',
    data
  )

const destroyTaskRequestSuccess = (data) => () =>
  deleteTask(data)

const destroyTaskRequestFailure = (error) => {
  throw error
}

// destroyTask action to delete task for the project
export const destroyTask = (data) =>
  makeRequest(
    `http://127.0.0.1:4000/api/v1/tasks/${data.id}`,
    { success: destroyTaskRequestSuccess(data.id), failure: destroyTaskRequestFailure },
    'delete'
  )

export const swapPriority = (tasks, newIndex) =>
  dispatch => {
    tasks.forEach((task, index) => {
      dispatch(patchTask({id: task.id, name: task.name, done: task.done, deadline: task.deadline, priority: index, project_id: task.projectId}))
    })
    dispatch(updateTask({...tasks[newIndex], priority: newIndex}))
  }
