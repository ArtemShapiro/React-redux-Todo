import { reduxForm, SubmissionError } from 'redux-form'
import * as Cookies from 'js-cookie'
import axios from 'axios'

import { setHeaders } from '../../actions'
import SignUpForm from '../../components/authorization/SignUpForm'

const submit = (values, dispatch) => (
  axios.post('http://127.0.0.1:4000/api/v1/auth', {...values}).then((response) => {
    dispatch(setHeaders(response.headers))
    Cookies.set('token', response.headers)
    console.log(response)
  }).catch((error) => {
    if (error.response) {
      console.log('Response error', error.response)
      throw new SubmissionError({ _error: error.response.data.errors.full_messages[0] })
    }
    throw error
  })
)

let signUpForm = reduxForm({form: 'signUp', onSubmit: submit})(SignUpForm)
export default signUpForm
