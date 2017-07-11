import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { signUp } from '../../actions/authorization'
import SignUpForm from '../../components/authorization/SignUpForm'

const onSubmit = (values, dispatch) => (
  dispatch(signUp(values))
)

const mapStateToProps = (state) => ({
  loading: state.users.loading
})

let signUpForm = reduxForm({form: 'signUp', onSubmit})(SignUpForm)
export default connect(mapStateToProps)(signUpForm)
