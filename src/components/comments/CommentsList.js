import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {List} from 'material-ui/List'

import Spinner from '../global/Spinner'
import Comment from '../../containers/comments/Comment'

class CommentsList extends Component{
  componentWillMount() {
    this.props.onLoadComments()
  }

  render(){
    const { comments, loading } = this.props
    const child = (comments.length > 0) ? (
      <List className='comments-container'>
        {comments.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </List>) : (
        <div className='no-comments-container'>
          <div className='no-comments-label'>You do not have any comments yet.</div>
        </div>
      )
    return (
      <Spinner loading={loading}>
        {child}
      </Spinner>
    )
  }
}

CommentsList.propTypes = {
  loading: PropTypes.bool.isRequired,
  onLoadComments: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id:     PropTypes.number.isRequired,
    text:   PropTypes.string.isRequired,
    taskId: PropTypes.number.isRequired
  })).isRequired
}

export default CommentsList
