export const setHeaders = (headers) => ({
  type: 'SET_HEADERS',
  headers: {
    access_token: headers['access-token'],
    client: headers.client,
    uid: headers.uid
  }
})
