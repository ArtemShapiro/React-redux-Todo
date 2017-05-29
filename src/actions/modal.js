export const showModal = (task) => ({
  type: 'SHOW_MODAL',
  modalProps: {
    task
  }
})

export const closeModal = () => ({
  type: 'HIDE_MODAL'
})
