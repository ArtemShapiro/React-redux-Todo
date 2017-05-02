import React, {Component} from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'

import Todo from '../../containers/todos/Todo'

const SortableItem = SortableElement(({todo, routeParams}) => {
  return <Todo {...todo} routeParams={routeParams} />
})

const SortableList = SortableContainer(({todos, routeParams}) => {
  return (
    <div>
      {todos.map((todo, index) =>
        <SortableItem key={`item-${index}`} index={index} todo={todo} routeParams={routeParams} />
      )}
    </div>
  )
})

class ProjectsList extends Component {
  render() {
    return <SortableList distance={20} todos={this.props.todos} onSortEnd={this.props.onSortEnd} />
  }
}
// const {todos, routeParams} = this.props
// return (
//   <div>
//     {todos.map((todo, index) =>
//       <Todo key={index} {...todo} routeParams={routeParams} />
//     )}
//   </div>
// )
export default ProjectsList
