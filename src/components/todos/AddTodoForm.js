import React from 'react'
import {Field} from 'redux-form'

import RaisedButton from 'material-ui/RaisedButton'

import MaterialUiInput from '../global/MaterialUiInput'
import {required} from '../global/validators'

const AddTodoForm = ({handleSubmit, onCancel, onSubmit}) => (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className='aligned center'>Add Todo</h3>

        <div>
          <Field name='name' type='text' label='Todo name' placeholder='Buy milk' component={MaterialUiInput} validate={required} />
        </div>

        <div>
          <RaisedButton label='Create' primary type='submit' className='w-100' />
          <RaisedButton label='Cancel' className='w-100' onTouchTap={onCancel} />
        </div>
      </form>
    </div>
)

export default AddTodoForm
