import React from 'react'
import PropTypes from 'prop-types'
import {Field} from 'redux-form'
import {Link} from 'react-router'

import Paper from 'material-ui/Paper'
import SendIcon from 'material-ui/svg-icons/content/send'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

import FormError from '../global/FormError'
import MaterialUiInput from '../global/MaterialUiInput'
import {required, email, passwordLength} from '../global/validators'

// Create modal with error
const SignUpForm = ({handleSubmit, error}) => (
  <Paper zDepth={2}>
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <h3 className='header-container'>Sign Up</h3>

        <div>
          <Field type='text' name='email' label='Email' placeholder='example@example.com' component={MaterialUiInput} validate={[required, email]}/>
        </div>
        <div>
          <Field type='password' name='password' label='Password' placeholder='12345678' component={MaterialUiInput} validate={[required, passwordLength]}/>
        </div>
        <div>
          <Field type='password' name='passwordConfirmation' label='Confirm Password' placeholder='12345678' component={MaterialUiInput} validate={[required, passwordLength]}/>
        </div>
        <div className='form-button'>
          <FlatButton containerElement={<Link to='/sign-in' />} label='Sign in' />
          <RaisedButton label='Sign up' primary type='submit' icon={<SendIcon />} />
        </div>
      </form>
      <FormError error={error} title={'Sign Up Error'} />
    </div>
  </Paper>
)

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default SignUpForm
