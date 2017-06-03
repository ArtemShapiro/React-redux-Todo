import React from 'react'
import {Field} from 'redux-form'
import {Link} from 'react-router'
import PropTypes from 'prop-types'

import Paper from 'material-ui/Paper'
import SendIcon from 'material-ui/svg-icons/content/send'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

import { required, nameLength } from '../global/validators'
import MaterialUiInput from '../global/MaterialUiInput'

const AddProjectForm = ({handleSubmit}) => (
  <Paper zDepth={2}>
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <h3 className='header-container'>Add Project</h3>

        <div>
          <Field name='name' type='text' label='Project name' placeholder='Project' component={MaterialUiInput} validate={[required, nameLength]} />
        </div>

        <div className='form-button'>
          <FlatButton label='Cancel' containerElement={<Link to='/' />} />
          <RaisedButton label='Create' primary type='submit' icon={<SendIcon />}/>
        </div>
      </form>
    </div>
  </Paper>
)

AddProjectForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default AddProjectForm
