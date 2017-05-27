import React from 'react'
import PropTypes from 'prop-types'

import Divider from 'material-ui/Divider'
import { ListItem } from 'material-ui/List'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

import {grey400} from 'material-ui/styles/colors'

const IconButtonElement = (
  <IconButton touch={true}>
    <MoreVertIcon color={grey400} />
  </IconButton>
)


const Comment = ({text, onDeleteClick, attachment}) => {
  let link
  if(attachment) link = `http://127.0.0.1:4000${attachment.file.url}`
  return(
    <div>
      <ListItem
        disabled
        style={{'whiteSpace': 'pre-line'}}
        secondaryText={'created at 22:00'}
        rightIconButton={
          <IconMenu iconButtonElement={IconButtonElement}>
            <MenuItem><a target="_blank" download href={link} style={{color: 'black', textDecoration: 'none'}}>{(attachment) ? 'Attachment' : 'No attachment'}</a></MenuItem>
            <MenuItem onTouchTap={onDeleteClick}>Delete comment</MenuItem>
          </IconMenu>
        }>
        {text}
      </ListItem>
      <Divider />
    </div>
  )
}

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  attachment: PropTypes.object
}

export default Comment
