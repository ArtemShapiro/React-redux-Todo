import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Task from '../../components/tasks/Task'
import { showModal } from '../../actions/modal'
import { destroyTask, updateTask } from '../../actions/tasks'

const getEditableTask = (routeParams, task) => {
  if (routeParams) {
    return (`${task.projectId}` === routeParams.id) && (`${task.id}` === routeParams.task_id)
  }
  return false
}

const mapStateToProps = (state, ownProps) => {
  return {
    editable: getEditableTask(state.routeParams, ownProps.task),
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
  },
  onMoreInfoClick: () => {
    dispatch(showModal(ownProps.task))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Task)
