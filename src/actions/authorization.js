import { makeRequest } from './index'
import { replace } from 'react-router-redux'
import {SubmissionError} from 'redux-form'

const signInRequestSuccess = (data) =>
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
    data
  )
)
