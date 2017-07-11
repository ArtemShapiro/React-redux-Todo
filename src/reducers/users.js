const initialState = {
  user: undefined,
  loading: false
}

const users = (state=initialState, action) => {
  switch (action.type) {
  case 'SET_USER':
    return {
      user: action.user, loading: false
    }
  case 'USER_LOAD_REQUEST':
    return { ...state, loading: true }
  case 'USER_LOAD_REQUEST_CLOSE':
    return { ...state, loading: false }
  default:
    return state
  }
}

export default users
