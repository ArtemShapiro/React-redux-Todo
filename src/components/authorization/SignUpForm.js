import React from 'react'
import PropTypes from 'prop-types'
import {Field} from 'redux-form'
import {Link} from 'react-router'

import Paper from 'material-ui/Paper'
import SendIcon from 'material-ui/svg-icons/content/send'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

import Spinner from '../global/Spinner'
import FormError from '../global/FormError'
import MaterialUiInput from '../global/MaterialUiInput'
import {required, email, passwordLength} from '../global/validators'

const SignUpForm = ({handleSubmit, error, loading}) => (
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

        <Spinner loading={loading} size={28} thickness={3}>
          <div className='form-button'>
            <FlatButton containerElement={<Link to='/sign-in' />} label='Sign in' />
            <RaisedButton label='Sign up' primary type='submit' icon={<SendIcon />} />
          </div>
        </Spinner>
      </form>
      <FormError error={error} title={'Sign Up Error'} />
    </div>
  </Paper>
)

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
}

export default SignUpForm
