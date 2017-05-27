import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { createComment } from '../../actions/comments'
import AddCommentForm from '../../components/comments/AddCommentForm'

const mapStateToProps = (state) => ({
  loading: state.attachments.loading
})

const mapDispatchToProps = (dispatch, ownPorps) => ({
  onSubmit: (values) =>
    dispatch(createComment({...values, taskId: ownPorps.id}))
})

let addCommentForm = reduxForm({form: 'addComment'})(AddCommentForm)
export default connect(mapStateToProps, mapDispatchToProps)(addCommentForm)
