const projects = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [
        ...state, action.project
      ]
    case 'ADD_PROJECTS':
      return [
        ...action.projects
      ]
    default:
      return state
  }
}

export default projects
