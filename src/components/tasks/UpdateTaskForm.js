import React from 'react'
import PropTypes from 'prop-types'
import {Field} from 'redux-form'

import {ListItem} from 'material-ui/List'

import RaisedButton from 'material-ui/RaisedButton'
import ActionDone from 'material-ui/svg-icons/action/done'
import ActionClear from 'material-ui/svg-icons/content/clear'
import {white800} from 'material-ui/styles/colors'
import {red800} from 'material-ui/styles/colors'

import { required, nameLength } from '../global/validators'
import MaterialUiInput from '../global/MaterialUiInput'
import MaterialUiDatePicker from '../global/MaterialUiDatePicker'

const UpdateTaskForm = ({handleSubmit, onCancel, name, deadline}) => (
  <ListItem disabled>
    <form onSubmit={handleSubmit}>
        <div className='form-container'>
          <div className='w-100'>
            <div>
              <Field name='name' type='text' label='Task name' placeholder='Task' defaultValue={name} component={MaterialUiInput} validate={[required, nameLength]}/>
            </div>
            <div>
              <Field name='date' defaultValue={deadline} component={MaterialUiDatePicker} />
            </div>
          </div>

          <div className='task-button-container'>
            <RaisedButton icon={<ActionDone color={white800} />} primary type='submit' />
          </div>
          <div className='task-button-container'>
            <RaisedButton icon={<ActionClear color={red800}/>} onTouchTap={onCancel} />
          </div>
        </div>
    </form>
  </ListItem>
)

UpdateTaskForm.propTypes = {
  name: PropTypes.string.isRequired,
  deadline: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default UpdateTaskForm
