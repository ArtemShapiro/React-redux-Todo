import React from 'react'
import PropTypes from 'prop-types'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

import AddCommentForm from '../../containers/comments/AddCommentForm'
import CommentsList from '../../containers/comments/CommentsList'

const TaskDialog = ({open, name, id, closeModal}) => {
  const actions = [
    <FlatButton
      label="Close"
      primary={true}
      keyboardFocused={true}
      onTouchTap={closeModal}
    />,
  ]

  return (
    <Dialog
      open={open}
      title={name}
      modal={false}
      actions={actions}
      autoScrollBodyContent
      onRequestClose={closeModal}
    >
      <CommentsList id={id} />
      <AddCommentForm id={id} />
    </Dialog>
  )
}

TaskDialog.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  open: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
}

export default TaskDialog
