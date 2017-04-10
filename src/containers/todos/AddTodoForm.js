import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { replace } from 'react-router-redux'

import AddTodoForm from '../../components/todos/AddTodoForm'

const submit = (values) => (
  console.log(values)
)

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch) => ({
  onCancel: () =>
    dispatch(replace('/'))
})

let addTodoForm = reduxForm({form: 'addTodo', onSubmit: submit})(AddTodoForm)

export default connect(mapStateToProps, mapDispatchToProps)(addTodoForm)
