import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { replace } from 'react-router-redux'

import AddTodoForm from '../../components/todos/AddTodoForm'
import { createTodo } from '../../actions/todos'

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCancel: () => {
    dispatch(replace('/'))
  },
  onSubmit: (values) => (
    dispatch(createTodo({ ...values, project_id: ownProps.routeParams.id }))
  )
})

let addTodoForm = reduxForm({ form: 'addTodo'})(AddTodoForm)

export default connect(mapStateToProps, mapDispatchToProps)(addTodoForm)
