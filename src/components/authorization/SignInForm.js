import React, {PropTypes} from 'react'
import { Link } from 'react-router'
import { Field } from 'redux-form'
import { Header, Form, Button, Message } from 'semantic-ui-react'

import SemanticUiInput from '../global/SemanticUiInput'
import { required, email, passwordLength } from '../global/validators'

const SignInForm = ({handleSubmit, error}) => {
  return (
    <div>
      <Form onSubmit={handleSubmit} error>
        <Header size='large' className='aligned center'>Sign In</Header>

        {error && <Message error content={error} />}

        <Field name='email' type='text'
          placeholder='Email' component={SemanticUiInput}
          validate={[required, email]}
          />
        <Field name='password' type='password'
          placeholder='password' component={SemanticUiInput}
          validate={[required, passwordLength]}
          />

        <Button type='submit' className='fluid'>Sign in</Button>
        <Link to='/sign-up' className='aligned center'>Don't have account?</Link>
      </Form>
    </div>
  )
}

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default SignInForm
