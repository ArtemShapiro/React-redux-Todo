import React from 'react'
import {Field} from 'redux-form'

import RaisedButton from 'material-ui/RaisedButton'

import MaterialUiInput from '../global/MaterialUiInput'
import {required} from '../global/validators'

const AddProjectForm = ({handleSubmit, onCancel}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3 className='aligned center'>Add Project</h3>

        <div>
          <Field name='name' type='text' label='Project name' placeholder='Project' component={MaterialUiInput} validate={required}/>
        </div>

        <div>
          <RaisedButton label='Create' primary type='submit' className='w-100'/>
          <RaisedButton label='Cancel' className='w-100' onTouchTap={onCancel} />
        </div>
      </form>
    </div>
  )
}

export default AddProjectForm
