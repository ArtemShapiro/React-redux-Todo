import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Task from '../../components/tasks/Task'
import { destroyTask, updateTask } from '../../actions/tasks'

const getEditableTask = ({task, routeParams}) => {
  if (routeParams) {
    return (`${task.projectId}` === routeParams.id) && (`${task.id}` === routeParams.task_id)
  }
  return false
}

const mapStateToProps = (state, ownProps) => {
  return {
    editable: getEditableTask(ownProps),
    deadline: (ownProps.task.deadline) ? (new Date(ownProps.task.deadline)).toDateString() : ''
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteClick: () => {
    dispatch(destroyTask(ownProps.task))
  },
  onUpdateTaskClick: () => {
    dispatch(push(`/projects/${ownProps.task.projectId}/tasks/${ownProps.task.id}`))
  },
  onCheckboxClick: () => {
    dispatch(updateTask({...ownProps.task, done: !ownProps.task.done}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Task)
