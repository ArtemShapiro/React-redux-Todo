import React, {Component} from 'react'

import {List, ListItem, ListItemText, ListItemSecondaryAction} from 'material-ui/List'

import Button from 'material-ui/Button'
import Checkbox from 'material-ui/Checkbox'

import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui-icons/MoreVert'

import {Menu, MenuItem} from 'material-ui/Menu';


export default class TodosList extends Component {
  state = {
    anchorEl: undefined,
    open: false
  }

  handleClick = (event) => this.setState({open: true, anchorEl: event.currentTarget})
  handleRequestClose = () => this.setState({open: false, anchorEl: undefined})

  render() {
    return (
      <List>
        <ListItem>
          <Checkbox checked={false} tabIndex="-1" ripple={false} onClick={event => console.log(event)}/>
          <ListItemText primary='task'/>
          <IconButton aria-owns="todo-menu" aria-haspopup="true" onClick={this.handleClick}>
            <MoreVertIcon/>
          </IconButton>

          <Menu id="todo-menu" anchorEl={this.state.anchorEl} open={this.state.open} onRequestClose={this.handleRequestClose}>
            <MenuItem onClick={this.handleRequestClose}>Rename Todo</MenuItem>
            <MenuItem onClick={this.handleRequestClose}>Delete Todo</MenuItem>
          </Menu>
        </ListItem>
      </List>
    )
  }
}
