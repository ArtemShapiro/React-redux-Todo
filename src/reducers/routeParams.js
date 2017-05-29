const initialState = {
  id: undefined,
  task_id: undefined
}

const routeParams = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_ROUTE_PARAMS':
    return {
      ...action.routeParams
    }
  default:
    return state
  }
}

export default routeParams
