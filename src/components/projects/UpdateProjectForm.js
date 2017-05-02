import React from 'react'
import {Field} from 'redux-form'

import {ListItem} from 'material-ui/List'

import RaisedButton from 'material-ui/RaisedButton'
import ActionDone from 'material-ui/svg-icons/action/done'
import ActionClear from 'material-ui/svg-icons/content/clear'
import {white800} from 'material-ui/styles/colors'
import {red800} from 'material-ui/styles/colors'

import MaterialUiInput from '../global/MaterialUiInput'
import {required} from '../global/validators'

const UpdateProjectForm = ({handleSubmit, onCancel, name}) => {
  return (
    <ListItem disabled>
      <form onSubmit={handleSubmit}>
          <div className='form-container'>
            <div className='w-77'>
              <Field name='name' type='text' label='Project name' placeholder='Project' defaultValue={name} component={MaterialUiInput} validate={required}/>
            </div>

            <div className='w-33'>
              <RaisedButton icon={<ActionDone color={white800} />} primary type='submit' />
              <RaisedButton icon={<ActionClear color={red800}/>} onTouchTap={onCancel} />
            </div>
          </div>
      </form>
    </ListItem>
  )
}

export default UpdateProjectForm
