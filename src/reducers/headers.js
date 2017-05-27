export default (state = {}, action) => {
  switch (action.type) {
  case 'SET_HEADERS':
    return {...action.headers}
  case 'REMOVE_HEADERS':
    return {}
  default:
    return state
  }
}
