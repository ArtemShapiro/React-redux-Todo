import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { replace } from 'react-router-redux'

import UpdateTodoForm from '../../components/todos/UpdateTodoForm'
import { updateTodo } from '../../actions/todos'

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCancel: () => {
    dispatch(replace('/'))
  },
  onSubmit: (values) => {
    dispatch(updateTodo({...values, id: ownProps.id, projectId: ownProps.projectId}))
  }
})

let updateTodoForm = reduxForm({ form: 'updateTodo' })(UpdateTodoForm)

export default connect(mapStateToProps, mapDispatchToProps)(updateTodoForm)
