import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import { Link } from 'react-router'
import { Header, Form, Button, Message } from 'semantic-ui-react'

import SemanticUiInput from '../global/SemanticUiInput'
import { required, email, passwordLength } from '../global/validators'

const SignUpForm = ({handleSubmit, error}) => (
  <div>
    <Form onSubmit={handleSubmit} error>
      <Header size='large' className='aligned center'>Sign Up</Header>

      {error && <Message error content={error} />}

      <Field type='text' name='email'
        placeholder='Email' component={SemanticUiInput}
        validate={[required, email]}
        />
      <Field type='password' name='password'
        placeholder='Password' component={SemanticUiInput}
        validate={[required, passwordLength]}
        />
      <Field type='password' name='passwordConfirmation'
        placeholder='Confirm password' component={SemanticUiInput}
        validate={[required, passwordLength]}
        />

      <Button type='submit' className='fluid'>Sign up</Button>
      <Link to='/sign-in'>Already have account?</Link>
    </Form>
  </div>
)

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default SignUpForm
