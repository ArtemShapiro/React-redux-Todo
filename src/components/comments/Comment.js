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


const Comment = ({text, createdAt, onDeleteClick, link}) => {
  return(
    <div>
      <ListItem
        disabled
        style={{'whiteSpace': 'pre-line'}}
        secondaryText={createdAt}
        rightIconButton={
          <IconMenu iconButtonElement={IconButtonElement}>
            <MenuItem><a target="_blank" download href={link} style={{color: 'black', textDecoration: 'none'}}>{(link) ? 'Attachment' : 'No attachment'}</a></MenuItem>
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
  link: PropTypes.string,
  createdAt: PropTypes.string,
  onDeleteClick: PropTypes.func.isRequired,
}

export default Comment
