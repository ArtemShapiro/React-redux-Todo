import { connect } from 'react-redux'
import { filter } from 'lodash'

import { loadComments } from '../../actions/comments'
import CommentsList from '../../components/comments/CommentsList'

const mapStateToProps = (state, ownProps) => ({
  comments: filter(state.comments.data, (comment) => comment.taskId === ownProps.id),
  loading: state.comments.loading
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoadComments: () => {
    dispatch(loadComments(ownProps))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList)
