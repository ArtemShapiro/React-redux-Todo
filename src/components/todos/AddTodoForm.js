import React from 'react'
import { Form, Header, Button } from 'semantic-ui-react'
import { Field } from 'redux-form'

import SemanticUiInput from '../global/SemanticUiInput'
import { required } from '../global/validators'

const AddTodoForm = ({handleSubmit, onCancel}) => (
  <div>
    <Form onSubmit={handleSubmit}>
      <Header as='h2' className='aligned center'>Add Todo</Header>

      <Field name='name' type='text'
        placeholder='Todo name' component={SemanticUiInput}
        validate={required}
      />

      <Button type='submit' className='fluid'>Create</Button>
    </Form>
    <Button className='fluid' negative onClick={onCancel}>Cancel</Button>
  </div>
)

export default AddTodoForm
