/* global process */

import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import {Field} from 'redux-form'

import Paper from 'material-ui/Paper'
import LoginIcon from 'material-ui/svg-icons/action/exit-to-app'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

import FormError from '../global/FormError'
import MaterialUiInput from '../global/MaterialUiInput'
import {required, email, passwordLength} from '../global/validators'

const SignInForm = ({handleSubmit, error}) => {
  const url = process.env.REACT_APP_BACKEND_URL + '/api/v1/auth/facebook?origin=' + process.env.REACT_APP_FRONTEND_URL
  return (
    <Paper zDepth={2}>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <h3 className='header-container'>Sign in</h3>

          <div>
            <Field name='email' type='text' label='Email' placeholder='example@example.com' component={MaterialUiInput} validate={[required, email]}/>
          </div>
          <div>
            <Field name='password' type='password' label='Password' placeholder='12345678' component={MaterialUiInput} validate={[required, passwordLength]}/>
          </div>

          <div className='form-button'>
            <FlatButton containerElement={<Link to='/sign-up' />} label='Sign up' />
            <RaisedButton label='Sign in' primary type='submit' icon={<LoginIcon />} />
          </div>

          <div className='form-button-facebook'>
            <RaisedButton label='Facebook' backgroundColor={'#4267b2'} labelColor={'#FAFAFA'} icon={<LoginIcon />} href={url} />
          </div>
        </form>
        <FormError error={error} title={'Sign In Error'} />
      </div>
    </Paper>
  )
}

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default SignInForm
