import { replace } from 'react-router-redux'
import { SubmissionError } from 'redux-form'

import { makeRequest, deleteToken } from './index'

const setUser = (user) => ({
  type: 'SET_USER',
  user
})

const userLoadRequest = () => ({
  type: 'USER_LOAD_REQUEST'
})

const userLoadRequestClose = () => ({
  type: 'USER_LOAD_REQUEST_CLOSE'
})

const signInRequestSuccess = (data) =>
  (dispatch) => {
    dispatch(setUser(data.data))
    dispatch(replace('/'))
  }

const signInRequestFailure = (error) =>
  (dispatch) => {
    dispatch(userLoadRequestClose())
    if (error.response) {
      throw new SubmissionError({ _error: error.response.data.errors[0] })
    }
    throw error
  }

export const signIn = (data) =>
  (dispatch) => {
    dispatch(userLoadRequest())
    return dispatch(makeRequest(
      '/api/v1/auth/sign_in',
      { success: signInRequestSuccess, failure: signInRequestFailure },
      'post',
      data
    ))
  }


const signUpRequestSuccess = (data) =>
  (dispatch) => {
    dispatch(setUser(data.data))
    dispatch(replace('/'))
  }

const signUpRequestFailure = (error) =>
  (dispatch) => {
    dispatch(userLoadRequestClose())
    if (error.response) {
      throw new SubmissionError({ _error: error.response.data.errors.full_messages[0] })
    }
    throw error
  }

export const signUp = (data) =>
  (dispatch) => {
    dispatch(userLoadRequest())
    return dispatch(makeRequest(
      '/api/v1/auth',
      { success: signUpRequestSuccess, failure: signUpRequestFailure },
      'post',
      {...data, password_confirmation: data.passwordConfirmation}
    ))
  }

const signOutRequestSuccess = () => (
  deleteToken()
)

const signOutRequestFailure = (error) => { throw error }

export const signOut = () => (
  makeRequest(
    '/api/v1/auth/sign_out',
    { success: signOutRequestSuccess, failure: signOutRequestFailure },
    'delete'
  )
)

const validateTokenSuccess = () => {
  return replace('/')
}

const validateTokenFailure = (error) => {
  throw error
}


export const validateToken = () => (
  makeRequest(
    '/api/v1/auth/validate_token',
    { success: validateTokenSuccess, failure: validateTokenFailure }
  )
)
