import React from 'react'
import { Form, Input, Label } from 'semantic-ui-react'

const SemanticUiInput = ({input, meta: { touched, error }, ...rest}) => (
  <Form.Field>
    <Input {...input} {...rest} />
    {touched && (error && <Label basic color='red' pointing>{error}</Label>)}
  </Form.Field>
)
export default SemanticUiInput
