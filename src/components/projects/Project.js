import React, {Component} from 'react'
// import { Card } from 'semantic-ui-react'

import TodosList from '../todos/TodosList'

import {List, ListItem, ListItemText, ListItemSecondaryAction} from 'material-ui/List'

import Text from 'material-ui/Text'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Layout from 'material-ui/Layout'
import Divider from 'material-ui/Divider'
import Checkbox from 'material-ui/Checkbox'
import TextField from 'material-ui/TextField'

import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import MoreVertIcon from 'material-ui-icons/MoreVert'

import {Menu, MenuItem} from 'material-ui/Menu';

// <ListItem button>Here</ListItem>
export default class Project extends Component {
  state = {
    anchorEl: undefined,
    open: false
  }

  handleClick = (event) => this.setState({open: true, anchorEl: event.currentTarget})
  handleRequestClose = () => this.setState({open: false, anchorEl: undefined})

  render() {
    return (
      <Paper className='paper'>
        <List>
          <ListItem>
            <ListItemText primary={this.props.name}/>
            <IconButton aria-owns="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
              <MenuIcon/>
            </IconButton>

            <Menu id="simple-menu" anchorEl={this.state.anchorEl} open={this.state.open} onRequestClose={this.handleRequestClose}>
              <MenuItem onClick={this.handleRequestClose}>Add Todo</MenuItem>
              <MenuItem onClick={this.props.onDeleteClick}>Delete Project</MenuItem>
            </Menu>
          </ListItem>
          <Divider/>
          <TodosList/>
        </List>
      </Paper>
    )
  }
}
// <Button onClick={this.props.onDeleteClick}>Delete</Button>
// <Layout item>
//   <Text type="body2">
//     {name}
//   </Text>
// </Layout>
// <Layout item>
//   <Button onClick={onDeleteClick}>Delete</Button>
// </Layout>
// <Layout container align='center' className='h-100'>
//     <Layout item>
//       <Text type="body2">
//         {name}
//       </Text>
//     </Layout>
//   </Layout>

// export default Project
