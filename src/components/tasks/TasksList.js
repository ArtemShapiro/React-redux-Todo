import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import RaisedButton from 'material-ui/RaisedButton'
import Subheader from 'material-ui/Subheader'
import { SortableContainer } from 'react-sortable-hoc'
import Task from '../../containers/tasks/Task'

const SortableList = SortableContainer(({tasks}) => (
  <div>
    <Subheader>Current tasks</Subheader>
    {tasks.map((task, index) =>
      <Task key={`item-${index}`} task={task} index={index} />
    )}
  </div>
))

const TasksList = ({tasks, onSortEnd, projectId}) => {
  const link = `/projects/${projectId}/task/new`
  return (tasks.length > 0) ?
    (<SortableList distance={20} tasks={tasks} onSortEnd={onSortEnd} />) : (
      <div className='no-tasks-container'>
        <div className='no-tasks-label'>You do not have any tasks yet.</div>
        <div className='no-tasks-label'><RaisedButton primary label='Add new task' containerElement={<Link to={link} />} /></div>
      </div>
    )
}

TasksList.propTypes = {
  onSortEnd: PropTypes.func.isRequired,
  projectId: PropTypes.number.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id:        PropTypes.number.isRequired,
    name:      PropTypes.string.isRequired,
    done:      PropTypes.bool.isRequired,
    deadline:  PropTypes.string,
    priority:  PropTypes.number.isRequired,
    projectId: PropTypes.number.isRequired
  })).isRequired
}

export default TasksList
