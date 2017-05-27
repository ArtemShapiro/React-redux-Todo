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
    return (
      <Spinner loading={loading}>
        <List className='comments-container'>
          {comments.map((comment, index) => (
            <Comment key={index} {...comment} />
          ))}
        </List>
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
