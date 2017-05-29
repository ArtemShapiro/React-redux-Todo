import { compact } from 'lodash'
import { reset } from 'redux-form'

import { makeRequest } from './index'
import { addAttachments, addAttachment } from './attachments'

const addComment = (data) => ({
  type: 'ADD_COMMENT',
  comment: {
    id:     data.id,
    text:   data.text,
    createdAt: data.created_at,
    taskId: data.task_id
  }
})

const addComments = (data) => ({
  type: 'ADD_COMMENTS',
  comments: data.comments.map(comment => ({id: comment.id, text: comment.text, createdAt: comment.created_at, taskId: comment.task_id}))
})

const deleteComment = (id) => ({
  type: 'DELETE_COMMENT',
  id
})

const commentsLoadRequest = () => ({
  type: 'COMMENTS_LOAD_REQUEST'
})

const loadCommentsRequestSuccess = (data) =>
  dispatch => {
    dispatch(addComments(data))
    dispatch(addAttachments(
      compact(data.comments.map(comment => {
        if (comment.attachment) return {
          id:         comment.attachment.id,
          file:       comment.attachment.file,
          comment_id: comment.attachment.attachable_id
        }
        return comment.attachment
      }
    ))))
    dispatch(reset('addComment'))
  }

const loadCommentsRequestFailure = (error) => {
  throw error
}

// loadComments action to load comment for task
export const loadComments = (data) =>
  dispatch => {
    dispatch(commentsLoadRequest())
    dispatch(makeRequest(
      `/api/v1/tasks/${data.id}/comments`,
      { success: loadCommentsRequestSuccess, failure: loadCommentsRequestFailure }
    ))
  }

const createCommentRequestSuccess = (data) =>
  dispatch => {
    dispatch(addComment(data))
    if (data.attachment) dispatch(addAttachment(data.attachment))
  }

const createCommentRequestFailure = (error) => {
  throw error
}

// createComment action to create comment for task
export const createComment = (data) => {
  return makeRequest(
    `/api/v1/tasks/${data.taskId}/comments`,
    { success: createCommentRequestSuccess, failure: createCommentRequestFailure },
    'post',
    data
  )
}

const destroyCommentRequestSuccess = (id) => () =>
  deleteComment(id)

const destroyCommentRequestFailure = (error) => {
  throw error
}

// destroyComment action to delete comment
export const destroyComment = (data) =>
  makeRequest(
    `/api/v1/comments/${data.id}`,
    { success: destroyCommentRequestSuccess(data.id), failure: destroyCommentRequestFailure },
    'delete'
  )
