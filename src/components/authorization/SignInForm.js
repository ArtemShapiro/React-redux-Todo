import React, {PropTypes} from 'react'
import { Link } from 'react-router'
import { Field } from 'redux-form'
import { Message } from 'semantic-ui-react'
import Button from 'material-ui/Button'
import Text from 'material-ui/Text'

import MaterialUiInput from '../global/MaterialUiInput'
import { required, email, passwordLength } from '../global/validators'

const SignInForm = ({handleSubmit, error}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Text type='display1' component='h3' className='header-container' gutterBottom>Sign in</Text>
        {error && <Message error content={error} />}
        <div>
          <Field name='email' type='text'
            placeholder='Email' component={MaterialUiInput}
            validate={[required, email]}
          />
        </div>
        <div>
          <Field name='password' type='password'
            placeholder='Password' component={MaterialUiInput}
            validate={[required, passwordLength]}
          />
        </div>
        <div>
          <Button raised primary type='submit' className='w-100'>Sign in</Button>
          <Link to='/sign-up' className='aligned center'>Don't have account?</Link>
        </div>
      </form>
    </div>
  )
}
// <Button type='submit' className='fluid'>Sign in</Button>
// <Header size='large' className='aligned center'>Sign In</Header>

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default SignInForm
