import React, {PropTypes} from 'react'
import {Field} from 'redux-form'
import {Link} from 'react-router'
import {Message} from 'semantic-ui-react'

import RaisedButton from 'material-ui/RaisedButton'

import MaterialUiInput from '../global/MaterialUiInput'
import {required, email, passwordLength} from '../global/validators'

const SignUpForm = ({handleSubmit, error}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <h3 className='header-container'>Sign Up</h3>

      {error && <Message error content={error}/>}

      <div>
        <Field type='text' name='email' label='Email' placeholder='example@example.com' component={MaterialUiInput} validate={[required, email]}/>
      </div>
      <div>
        <Field type='password' name='password' label='Password' placeholder='12345678' component={MaterialUiInput} validate={[required, passwordLength]}/>
      </div>
      <div>
        <Field type='password' name='passwordConfirmation' label='Confirm Password' placeholder='12345678' component={MaterialUiInput} validate={[required, passwordLength]}/>
      </div>
      <div>
        <RaisedButton label='Sign up' primary type='submit' className='w-100'/>
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
