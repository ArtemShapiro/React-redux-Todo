import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { replace } from 'react-router-redux'

import AddTaskForm from '../../components/tasks/AddTaskForm'
import { createTask } from '../../actions/tasks'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCancel: () => {
    dispatch(replace('/'))
  },
  onSubmit: (values) => (
    dispatch(createTask({ ...values, projectId: ownProps.routeParams.id }))
  )
})

let addTaskForm = reduxForm({ form: 'addTask'})(AddTaskForm)
export default connect(null, mapDispatchToProps)(addTaskForm)
