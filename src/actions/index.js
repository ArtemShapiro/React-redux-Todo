/* global process */

import axios from 'axios'
import * as Cookies from 'js-cookie'
import { replace } from 'react-router-redux'

export const setHeaders = (headers) => ({
  type: 'SET_HEADERS',
  headers: {
    access_token: headers['access-token'] || headers.auth_token,
    client:       headers.client || headers.client_id,
    expiry:       headers.expiry,
    uid:          headers.uid
  }
})

const removeHeaders = () => ({
  type: 'REMOVE_HEADERS'
})

export const setToken = (headers) =>
  (dispatch) => {
    Cookies.set('token', headers)
    dispatch(setHeaders(headers))
  }

export const deleteToken = () =>
  (dispatch) => {
    Cookies.remove('token')
    dispatch(removeHeaders())
    dispatch(replace('/sign-in'))
  }

export const makeRequest = (endpoint, actions = {}, method = 'get', data = false) =>
  (dispatch, getState) => {
    const url = process.env.REACT_APP_BACKEND_URL + endpoint
    return axios({
      url,
      data,
      method,
      headers: {...getState().headers}
    }).then(response => {
      if (response.headers.uid) {
        dispatch(setToken(response.headers))
      }
      dispatch(actions.success(response.data))
    }).catch(error => {
      if (error.response && error.response.status === 401) dispatch(deleteToken())
      if (error.response && error.response.headers.uid) dispatch(setToken(error.response.headers))
      dispatch(actions.failure(error))
    })
  }
