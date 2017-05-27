import React from 'react'
import { connect } from 'react-redux'

import { createAttachment } from '../../actions/attachments'

const FileInput = ({ input: { value: omitValue, onChange, onBlur, ...inputProps }, onInputChange, meta: omitMeta, ...props }) => {
  return(
    <input
      className='input-file'
      onChange={onInputChange(onChange)}
      type="file"
      {...inputProps}
      {...props}
    />
  )
}

const mapDispatchToProps = (dispatch) => ({
  onInputChange: delegate => e => {
    if(e.target.files[0]){
      dispatch(createAttachment(e.target.files[0]))
      delegate(e.target.files[0])
    }
  }
})

export default connect(null, mapDispatchToProps)(FileInput)
