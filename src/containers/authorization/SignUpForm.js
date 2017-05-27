import { reduxForm } from 'redux-form'

import { signUp } from '../../actions/authorization'
import SignUpForm from '../../components/authorization/SignUpForm'

const onSubmit = (values, dispatch) => (
  dispatch(signUp(values))
)

let signUpForm = reduxForm({form: 'signUp', onSubmit})(SignUpForm)
export default signUpForm
