import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import { Link } from 'react-router'
import { Message } from 'semantic-ui-react'

import Button from 'material-ui/Button'
import Text from 'material-ui/Text'

import MaterialUiInput from '../global/MaterialUiInput'
import { required, email, passwordLength } from '../global/validators'

const SignUpForm = ({handleSubmit, error}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <Text type='display1' component='h3' className='header-container'>Sign Up</Text>

      {error && <Message error content={error} />}

      <div>
        <Field type='text' name='email'
          placeholder='Email' component={MaterialUiInput}
          validate={[required, email]}
        />
      </div>
      <div>
        <Field type='password' name='password'
          placeholder='Password' component={MaterialUiInput}
          validate={[required, passwordLength]}
        />
      </div>
      <div>
        <Field type='password' name='passwordConfirmation'
          placeholder='Confirm password' component={MaterialUiInput}
          validate={[required, passwordLength]}
        />
      </div>
      <div>
        <Button raised primary type='submit' className='w-100'>Sign Up</Button>
        <Link to='/sign-in'>Already have account?</Link>
      </div>
    </form>
  </div>
)

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default SignUpForm
