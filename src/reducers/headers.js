export default (state = {}, action) => {
  switch (action.type) {
  case 'SET_HEADERS':
    return {...action.headers}
  default:
    return state
  }
}
