import React from 'react'
import PropTypes from 'prop-types'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

import AddCommentForm from '../../containers/comments/AddCommentForm'
import CommentsList from '../../containers/comments/CommentsList'

const TaskDialog = ({id, name, handleClose, open}) => {
  const actions = [
    <FlatButton
      label="Close"
      primary={true}
      keyboardFocused={true}
      onTouchTap={handleClose}
    />,
  ]

  return (
    <Dialog
      open={open}
      title={name}
      modal={false}
      actions={actions}
      autoScrollBodyContent
      onRequestClose={handleClose}
    >
      <CommentsList id={id} />
      <AddCommentForm id={id} />
    </Dialog>
  )
}

TaskDialog.propTypes = {
  id: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default TaskDialog
