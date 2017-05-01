import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import {Field} from 'redux-form'
import {Message} from 'semantic-ui-react'
import RaisedButton from 'material-ui/RaisedButton'

import MaterialUiInput from '../global/MaterialUiInput'
import {required, email, passwordLength} from '../global/validators'

const SignInForm = ({handleSubmit, error}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3 className='header-container'>Sign in</h3>
        {error && <Message error content={error}/>}
        <div>
          <Field name='email' type='text' label='Email' placeholder='example@example.com' component={MaterialUiInput} validate={[required, email]}/>
        </div>
        <div>
          <Field name='password' type='password' label='Password' placeholder='12345678' component={MaterialUiInput} validate={[required, passwordLength]}/>
        </div>
        <div>
          <RaisedButton label='Sign in' primary type='submit' className='w-100'/>
          <Link to='/sign-up' className='aligned center'>Don't have account?</Link>
        </div>
      </form>
    </div>
  )
}

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default SignInForm
