import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

import { grey600 } from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'
import IconButton from 'material-ui/IconButton'
import AttachFileIcon from 'material-ui/svg-icons/editor/attach-file'
import CircularProgress from 'material-ui/CircularProgress'

import FileInput from '../../containers/attachments/FileInput'

import MaterialUiInput from '../global/MaterialUiInput'
import { required } from '../global/validators'

const AddCommentForm = ({handleSubmit, loading}) => {
  const icon = (loading) ? (<CircularProgress />) : (<AttachFileIcon color={grey600} />)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-container'>
          <div className='w-100'>
            <Field name='text' type='text' label='Comment text' placeholder='Comment' multiLine component={MaterialUiInput} validate={required} />
          </div>

          <div className='comment-icon-container'>
            <IconButton touch={true}>
              <Field name='file' type='file' component={FileInput} />
              {icon}
            </IconButton>
          </div>
          <div className='comment-button-container'>
            <RaisedButton label='Add' primary type='submit' />
          </div>
        </div>
      </form>
    </div>
  )
}

AddCommentForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

export default AddCommentForm
