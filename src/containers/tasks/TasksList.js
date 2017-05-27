import { connect } from 'react-redux'
import { filter, orderBy } from 'lodash'
import { arrayMove } from 'react-sortable-hoc'

import TasksList from '../../components/tasks/TasksList'
import { swapPriority } from '../../actions/tasks'

const mapStateToProps = (state, ownProps) => ({
  tasks: orderBy(filter(state.tasks, (task) => task.projectId === ownProps.projectId), ['done', 'priority'], ['asc', 'asc'])
})

const mapDispatchToProps = (dispatch) => ({
  onMoveTask: (tasks, newIndex) => {
    dispatch(swapPriority(tasks, newIndex))
  }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  tasks: stateProps.tasks,
  routeParams: ownProps.routeParams,
  projectId: ownProps.projectId,
  onSortEnd: (props) => {
    let result = arrayMove(stateProps.tasks, props.oldIndex, props.newIndex)
    dispatchProps.onMoveTask(result, props.newIndex)
  }
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TasksList)
