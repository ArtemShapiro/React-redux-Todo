import React from 'react'
import {Field} from 'redux-form'
import PropTypes from 'prop-types'

import {ListItem} from 'material-ui/List'

import RaisedButton from 'material-ui/RaisedButton'
import ActionDone from 'material-ui/svg-icons/action/done'
import ActionClear from 'material-ui/svg-icons/content/clear'
import {white800} from 'material-ui/styles/colors'
import {red800} from 'material-ui/styles/colors'

import MaterialUiInput from '../global/MaterialUiInput'
import { required, nameLength } from '../global/validators'

const UpdateProjectForm = ({handleSubmit, onCancel, name}) => {
  return (
    <ListItem disabled>
      <form onSubmit={handleSubmit}>
          <div className='form-container'>
            <div className='w-100'>
              <Field name='name' type='text' label='Project name' placeholder='Project' defaultValue={name} component={MaterialUiInput} validate={[required, nameLength]}/>
            </div>

            <div className='project-button-container'>
              <RaisedButton icon={<ActionDone color={white800} />} primary type='submit' />
            </div>
            <div className='project-button-container'>
              <RaisedButton icon={<ActionClear color={red800}/>} onTouchTap={onCancel} />
            </div>
          </div>
      </form>
    </ListItem>
  )
}

UpdateProjectForm.propTypes = {
  name: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default UpdateProjectForm
