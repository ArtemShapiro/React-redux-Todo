import { connect } from 'react-redux'
import { find } from 'lodash'

import { destroyComment }  from '../../actions/comments'
import Comment from '../../components/comments/Comment'

const mapStateToProps = (state, ownProps) => ({
  attachment: find(state.attachments.data, (attachment) => attachment.comment_id === ownProps.id)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteClick: () =>
    dispatch(destroyComment(ownProps))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
