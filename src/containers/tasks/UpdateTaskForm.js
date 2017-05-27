import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { replace } from 'react-router-redux'

import UpdateTaskForm from '../../components/tasks/UpdateTaskForm'
import { updateTask } from '../../actions/tasks'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCancel: () => {
    dispatch(replace('/'))
  },
  onSubmit: (values) => {
    const date = new Date(values.date)
    const deadline = `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    dispatch(updateTask({...values, id: ownProps.id, deadline}))
  }
})

let updateTaskForm = reduxForm({ form: 'updateTask' })(UpdateTaskForm)
export default connect(null, mapDispatchToProps)(updateTaskForm)
