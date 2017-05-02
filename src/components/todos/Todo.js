import React from 'react'

import UpdateTodoForm from '../../containers/todos/UpdateTodoForm'

import {ListItem} from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

import {grey400} from 'material-ui/styles/colors'

const IconButtonElement = (
  <IconButton touch={true}>
    <MoreVertIcon color={grey400} />
  </IconButton>
)

const Todo = ({done, name, onDeleteClick, onUpdateTodoClick, editable, projectId, id}) => {
  const form = (<UpdateTodoForm name={name} projectId={projectId} id={id} />)
  const todoElement = (
    <ListItem leftCheckbox={<Checkbox checked={done} />} primaryText={name} rightIconButton={
      <IconMenu iconButtonElement={IconButtonElement}>
        <MenuItem onTouchTap={onUpdateTodoClick}>Rename Todo</MenuItem>
        <MenuItem onTouchTap={onDeleteClick}>Delete Todo</MenuItem>
      </IconMenu>}
    />
  )
  const show = editable ? form : todoElement
  return show
}

export default Todo
