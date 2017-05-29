import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import FlatButton from 'material-ui/FlatButton'

import {signOut} from '../../actions/authorization'

const SignOutButton = ({signOut}) => {
  return (
    <FlatButton label='Sign out' onTouchTap={signOut}/>
  )
}

SignOutButton.propTypes = {
  signOut: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  signOut
}

export default connect(null, mapDispatchToProps)(SignOutButton)
