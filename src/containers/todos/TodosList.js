import { connect } from 'react-redux'
import { filter, orderBy } from 'lodash'
import { arrayMove } from 'react-sortable-hoc'

import TodosList from '../../components/todos/TodosList'
import { swapPriority } from '../../actions/todos'

const mapStateToProps = (state, ownProps) => ({
  todos: orderBy(filter(state.todos, (todo) => todo.projectId === ownProps.projectId), ['priority'], ['desc'])
})

const mapDispatchToProps = (dispatch) => ({
  onMoveTodo: (props, todos) => {
    dispatch(swapPriority(props, todos))
  }
})

const mergeProps = (stateProps, dispatchProps) => ({
  todos: stateProps.todos,
  onSortEnd: (props) => {

    let result = arrayMove(stateProps.todos, props.oldIndex, props.newIndex)
    console.log('old todos', stateProps.todos)
    console.log(props, result)
    dispatchProps.onMoveTodo(props, result)
  }
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TodosList)
