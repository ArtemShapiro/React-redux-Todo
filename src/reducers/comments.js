import { filter } from 'lodash'

const initialState = {data: [], loading: false}

export default (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_COMMENT':
    return { data: [...state.data, action.comment], loading: false}
  case 'ADD_COMMENTS':
    return { data: [...action.comments], loading: false }
  case 'DELETE_COMMENT':
    return { data: filter(state.data, (comment) => comment.id !== action.id), loading: false }
  case 'COMMENTS_LOAD_REQUEST':
    return { ...state, loading: true }
  default:
    return state
  }
}
