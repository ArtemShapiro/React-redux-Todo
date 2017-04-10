import { reduxForm, SubmissionError } from 'redux-form'
import { replace } from 'react-router-redux'
import * as Cookies from 'js-cookie'
import axios from 'axios'

import SignInForm from '../../components/authorization/SignInForm'
import { setHeaders } from '../../actions'

const submit = (values, dispatch) => (
  axios.post('http://127.0.0.1:4000/api/v1/auth/sign_in', {...values})
  .then(response => {
    console.log('Response', response)
    dispatch(setHeaders(response.headers))
    Cookies.set('token', response.headers)
    dispatch(replace('/'))
  })
  .catch(error => {
    if (!error.response) {
      console.log('Response error', error.response)
      throw new SubmissionError({ _error: error.response.data.errors[0] })
    }
    throw error
  })
)

let signInForm = reduxForm({form: 'signIn', onSubmit: submit})(SignInForm)
export default signInForm
