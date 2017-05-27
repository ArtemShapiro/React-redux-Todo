import React from 'react'
import PropTypes from 'prop-types'

import UpdateProjectForm from '../../containers/projects/UpdateProjectForm'
import TasksList from '../../containers/tasks/TasksList'

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

const Project = ({name, id, onDeleteClick, onAddTaskClick, onUpdateProjectClick, editable, routeParams}) => {
  const headerElement = (
    <ListItem primaryText={name} disabled rightIconButton={
      <IconMenu iconButtonElement={IconButtonElement}>
        <MenuItem onTouchTap={onAddTaskClick}>Add task</MenuItem>
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
        <TasksList projectId={id} routeParams={routeParams} />
      </List>
    </Paper>
  )
}

Project.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  editable: PropTypes.bool.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onAddTaskClick: PropTypes.func.isRequired,
  onUpdateProjectClick: PropTypes.func.isRequired,
}

export default Project
