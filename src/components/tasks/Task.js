import React from 'react'
import PropTypes from 'prop-types'
import { SortableElement } from 'react-sortable-hoc'

import UpdateTaskForm from '../../containers/tasks/UpdateTaskForm'

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

const TaskElement = ({task, deadline, onUpdateTaskClick, onDeleteClick, onMoreInfoClick, onCheckboxClick}) => {
  return (
    <div>
      <ListItem leftCheckbox={<Checkbox checked={task.done} onTouchTap={onCheckboxClick} />} primaryText={task.name} secondaryText={deadline || ''}
        rightIconButton={
          <IconMenu iconButtonElement={IconButtonElement}>
            <MenuItem onTouchTap={onMoreInfoClick}>More Info</MenuItem>
            <MenuItem onTouchTap={onUpdateTaskClick}>Edit Task</MenuItem>
            <MenuItem onTouchTap={onDeleteClick}>Delete Task</MenuItem>
          </IconMenu>
        }
      />
    </div>
  )
}


const WrappedTaskElement = SortableElement((props) => <TaskElement {...props} />)

const Task = ({task, deadline, onDeleteClick, onUpdateTaskClick, onCheckboxClick, onMoreInfoClick, editable, index}) => {
  const props = {task, onDeleteClick, onUpdateTaskClick, onCheckboxClick, onMoreInfoClick, index, deadline}
  const form = (<UpdateTaskForm {...task} />)
  const taskElement = task.done ? (<TaskElement  {...props} />) : (<WrappedTaskElement  {...props} />)
  return editable ? form : taskElement
}

Task.propTypes = {
  index: PropTypes.number.isRequired,
  editable: PropTypes.bool.isRequired,
  deadline: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onCheckboxClick: PropTypes.func.isRequired,
  onUpdateTaskClick: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id:        PropTypes.number.isRequired,
    name:      PropTypes.string.isRequired,
    done:      PropTypes.bool.isRequired,
    deadline:  PropTypes.string,
    priority:  PropTypes.number.isRequired,
    projectId: PropTypes.number.isRequired
  })
}

export default Task
