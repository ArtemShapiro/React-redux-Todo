import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import SignInForm from '../../components/authorization/SignInForm'
import { signIn } from '../../actions/authorization'

const onSubmit = (values, dispatch) => (
  dispatch(signIn(values))
)

const mapStateToProps = (state) => ({
  loading: state.users.loading
})

let signInForm = reduxForm({form: 'signIn', onSubmit})(SignInForm)
export default connect(mapStateToProps)(signInForm)
