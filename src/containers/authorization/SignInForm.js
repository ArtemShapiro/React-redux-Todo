import { reduxForm } from 'redux-form'

import SignInForm from '../../components/authorization/SignInForm'
import { signIn } from '../../actions/authorization'

const onSubmit = (values, dispatch) => (
  dispatch(signIn(values))
)

export default reduxForm({form: 'signIn', onSubmit})(SignInForm)
