import React from 'react'
import { Form, Header, Button } from 'semantic-ui-react'
import { Field } from 'redux-form'

import SemanticUiInput from '../global/SemanticUiInput'
import { required } from '../global/validators'

const AddProjectForm = ({handleSubmit, onCancel}) => {
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Header as='h2' className='aligned center'>Add Project</Header>

        <Field name='name' type='text'
          placeholder='Project name' component={SemanticUiInput}
          validate={required}
      />

        <Button type='submit' className='fluid'>Create</Button>
      </Form>
      <Button className='fluid' negative onClick={onCancel}>Cancel</Button>
    </div>
  )
}

export default AddProjectForm
