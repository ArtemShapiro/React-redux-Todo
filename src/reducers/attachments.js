export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_ATTACHMENT':
    return { data: [...state.data, action.file], loading: false }
  case 'ADD_ATTACHMENTS':
    return { data: [...action.files], loading: false }
  case 'ATTACHMENTS_LOAD_REQUEST':
    return { ...state, loading: true }
  case 'ATTACHMENTS_LOAD_REQUEST_CLOSE':
    return { ...state, loading: false }
  default:
    return state
  }
}
