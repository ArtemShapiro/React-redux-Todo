import React from 'react'

import UpdateProjectForm from '../../containers/projects/UpdateProjectForm'
import TodosList from '../../containers/todos/TodosList'

import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import {List, ListItem} from 'material-ui/List'

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

const Project = ({name, id, onDeleteClick, onAddTodoClick, onUpdateProjectClick, editable, routeParams}) => {
  const headerElement = (
    <ListItem primaryText={name} disabled rightIconButton={
      <IconMenu iconButtonElement={IconButtonElement}>
        <MenuItem onTouchTap={onAddTodoClick}>Add todo</MenuItem>
        <MenuItem onTouchTap={onUpdateProjectClick}>Update project</MenuItem>
        <MenuItem onTouchTap={onDeleteClick}>Delete project</MenuItem>
      </IconMenu>
    } />
  )
  const form = (<UpdateProjectForm name={name} id={id} />)
  const header = editable ? form : headerElement

  return (
    <Paper className='paper'>
      <List>
        {header}
        <Divider/>
        <TodosList projectId={id} routeParams={routeParams} />
      </List>
    </Paper>
  )
}
export default Project
