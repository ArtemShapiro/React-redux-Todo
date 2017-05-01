import React from 'react'

import TodosList from '../../containers/todos/TodosList'

import {List, ListItem} from 'material-ui/List'

import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

import {grey400} from 'material-ui/styles/colors'

const IconButtonElement = (
  <IconButton
    touch={true}
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
)

const Project = ({name, id, onDeleteClick, onAddTodoClick}) => (
  <Paper className='paper'>
    <List>
      <ListItem primaryText={name} disabled rightIconButton={
        <IconMenu iconButtonElement={IconButtonElement}>
          <MenuItem onTouchTap={onAddTodoClick}>Add todo</MenuItem>
          <MenuItem onTouchTap={onDeleteClick}>Delete project</MenuItem>
        </IconMenu>
      } />
      <Divider/>
      <TodosList projectId={id} />
    </List>
  </Paper>
)

export default Project
