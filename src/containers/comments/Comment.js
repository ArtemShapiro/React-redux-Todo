/* global process */

import { connect } from 'react-redux'
import { find } from 'lodash'

import { destroyComment }  from '../../actions/comments'
import Comment from '../../components/comments/Comment'

const getAttachmentLink = (attachments, id) => {
  const attachment = find(attachments.data, (attachment) => attachment.comment_id === id)
  return (attachment) ? (process.env.REACT_APP_BACKEND_URL + attachment.file.url) : undefined
}

const mapStateToProps = (state, ownProps) => ({
  link: getAttachmentLink(state.attachments, ownProps.id)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteClick: () =>
    dispatch(destroyComment(ownProps))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
