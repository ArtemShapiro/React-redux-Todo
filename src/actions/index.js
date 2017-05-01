import axios from 'axios'
import * as Cookies from 'js-cookie'

export const setHeaders = (headers) => ({
  type: 'SET_HEADERS',
  headers: {
    access_token: headers['access-token'],
    client: headers.client,
    uid: headers.uid
  }
})

export const setToken = (headers) =>
  (dispatch) => {
    Cookies.set('token', headers)
    dispatch(setHeaders(headers))
  }

export const makeRequest = (url, actions = {}, method = 'get', data = false) =>
  (dispatch, getState) => {
    return axios({
      url,
      data,
      method,
      headers: {...getState().headers}
    }).then(response => {
      console.log(response)
      if (response.headers.uid) {
        dispatch(setToken(response.headers))
      }
      dispatch(actions.success(response.data))
    }).catch(error => {
      dispatch(actions.failure(error))
    })
  }
