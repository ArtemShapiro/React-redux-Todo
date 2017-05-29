const initialState = {
  open: false,
  modalProps: {}
}

const modal = (state = initialState, action) => {
  switch (action.type) {
  case 'SHOW_MODAL':
    return {
      open: true,
      modalProps: action.modalProps
    }
  case 'HIDE_MODAL':
    return initialState
  default:
    return state
  }
}

export default modal
