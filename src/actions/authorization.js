import * as Cookies from 'js-cookie'
import { replace } from 'react-router-redux'
import { SubmissionError } from 'redux-form'

import { makeRequest } from './index'

const removeHeaders = () => ({
  type: 'REMOVE_HEADERS'
})

const signInRequestSuccess = () =>
  (dispatch) => {
    dispatch(replace('/'))
  }

const signInRequestFailure = (error) => {
  if (error.response) {
    throw new SubmissionError({ _error: error.response.data.errors[0] })
  }
  throw error
}

export const signIn = (data) => (
  makeRequest(
    'http://127.0.0.1:4000/api/v1/auth/sign_in',
    { success: signInRequestSuccess, failure: signInRequestFailure },
    'post',
    data
  )
)

const signUpRequestSuccess = () =>
  (dispatch) => {
    dispatch(replace('/'))
  }

const signUpRequestFailure = (error) => {
  if (error.response) {
    throw new SubmissionError({ _error: error.response.data.errors.full_messages[0] })
  }
  throw error
}

export const signUp = (data) => (
  makeRequest(
    'http://127.0.0.1:4000/api/v1/auth',
    { success: signUpRequestSuccess, failure: signUpRequestFailure },
    'post',
    {...data, password_confirmation: data.passwordConfirmation}
  )
)

const signOutRequestSuccess = () => (
  (dispatch) => {
    Cookies.remove('token')
    dispatch(removeHeaders())
    dispatch(replace('/sign-in'))
  }
)

const signOutRequestFailure = (error) => { throw error }

export const signOut = () => (
  makeRequest(
    'http://127.0.0.1:4000/api/v1/auth/sign_out',
    { success: signOutRequestSuccess, failure: signOutRequestFailure },
    'delete'
  )
)

const validateTokenSuccess = (data) => {
  return replace('/')
}

const validateTokenFailure = (error) => {
  if (error.response.status === 401) {
    return dispatch => {
      Cookies.remove('token')
      dispatch(removeHeaders())
      dispatch(replace('/sign-in'))
    }
  }
  throw error
}


export const validateToken = () => (
  makeRequest(
    'http://127.0.0.1:4000/api/v1/auth/validate_token',
    { success: validateTokenSuccess, failure: validateTokenFailure }
  )
)
