import { connect } from 'react-redux'
import { filter } from 'lodash'

import TodosList from '../../components/todos/TodosList'

const mapStateToProps = (state, ownProps) => ({
  todos: filter(state.todos, (todo) => todo.projectId === ownProps.projectId)
})

export default connect(mapStateToProps)(TodosList)
