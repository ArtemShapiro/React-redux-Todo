import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SortableElement } from 'react-sortable-hoc'

import TaskDialog from './TaskDialog'
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

class TaskElement extends Component {
  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <div>
        <ListItem leftCheckbox={<Checkbox checked={this.props.done} onTouchTap={this.props.onCheckboxClick} />} primaryText={this.props.name} secondaryText={this.props.deadline || ''}
          rightIconButton={
            <IconMenu iconButtonElement={IconButtonElement}>
              <MenuItem onTouchTap={this.handleOpen}>More Info</MenuItem>
              <MenuItem onTouchTap={this.props.onUpdateTaskClick}>Edit Task</MenuItem>
              <MenuItem onTouchTap={this.props.onDeleteClick}>Delete Task</MenuItem>
            </IconMenu>
          }
        />
      <TaskDialog  handleOpen={this.handleOpen} handleClose={this.handleClose} open={this.state.open} name={this.props.name} id={this.props.id} />
      </div>
    )
  }
}


const WrappedTaskElement = SortableElement((props) => <TaskElement {...props} />)

const Task = ({task, deadline, onDeleteClick, onUpdateTaskClick, onCheckboxClick, editable, index}) => {
  const props = {...task, onDeleteClick, onUpdateTaskClick, onCheckboxClick, index, deadline}
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
