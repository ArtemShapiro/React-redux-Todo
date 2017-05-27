import { change } from 'redux-form'
import { makeRequest } from './index'

export const addAttachment = (file) => ({
  type: 'ADD_ATTACHMENT',
  file: {
    id:         file.id,
    file:       file.file,
    comment_id: file.attachable_id
  }
})

export const addAttachments = (files) => ({
  type: 'ADD_ATTACHMENTS',
  files
})

const attachmentsLoadRequest = () => ({
  type: 'ATTACHMENTS_LOAD_REQUEST'
})

const attachmentsLoadRequestClose = () => ({
  type: 'ATTACHMENTS_LOAD_REQUEST_CLOSE'
})

const createAttachmentRequestSuccess = (data) =>
  dispatch => {
    dispatch(change('addComment', 'file', data.id))
    dispatch(attachmentsLoadRequestClose())
  }

const createAttachmentRequestFailure = (error) => {
  throw error
}

export const createAttachment = (data) =>
  dispatch => {
    let formData = new FormData()
    formData.append('file', data)
    dispatch(attachmentsLoadRequest())
    dispatch(makeRequest(
      'http://127.0.0.1:4000/api/v1/attachments',
      { success: createAttachmentRequestSuccess, failure: createAttachmentRequestFailure },
      'post',
      formData
    ))
  }
