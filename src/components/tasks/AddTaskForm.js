import React from 'react'
import PropTypes from 'prop-types'
import {Field} from 'redux-form'

import Paper from 'material-ui/Paper'
import SendIcon from 'material-ui/svg-icons/content/send'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

import MaterialUiInput from '../global/MaterialUiInput'
import {required} from '../global/validators'

const AddTaskForm = ({handleSubmit, onCancel}) => (
  <Paper zDepth={2}>
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <h3 className='header-container'>Add Task</h3>

        <div>
          <Field name='name' type='text' label='Task name' placeholder='Buy milk' component={MaterialUiInput} validate={required} />
        </div>

        <div className='form-button'>
          <FlatButton label='Cancel' onTouchTap={onCancel} />
          <RaisedButton label='Create' primary type='submit' icon={<SendIcon />}/>
        </div>
      </form>
    </div>
  </Paper>
)

AddTaskForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default AddTaskForm
