import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Todo from '../../components/todos/Todo'
import { destroyTodo } from '../../actions/todos'

const getEditableTodo = (props) => {
  if (props.routeParams) {
    return (`${props.projectId}` === props.routeParams.id) && (`${props.id}` === props.routeParams.todo_id)
  }
  return false
}

const mapStateToProps = (state, ownProps) => {
  return {
    editable: getEditableTodo(ownProps)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteClick: () => {
    dispatch(destroyTodo(ownProps))
  },
  onUpdateTodoClick: () => {
    dispatch(push(`/projects/${ownProps.projectId}/todos/${ownProps.id}`))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
