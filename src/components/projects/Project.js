import React from 'react'
// import { Card } from 'semantic-ui-react'
import {
  List,
  ListItem,
  ListItemText
} from 'material-ui/List'
import Paper from 'material-ui/Paper'
// import Layout from 'material-ui/Layout'
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'

// <ListItem button>Here</ListItem>
const Project = ({name, onDeleteClick}) => {
  return (
    <Paper className='paper'>
      <List>
        <ListItem>
          <ListItemText primary={name} />
          <Button onClick={onDeleteClick}>Delete</Button>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary='task' />
        </ListItem>
      </List>
    </Paper>
  )
}

export default Project
