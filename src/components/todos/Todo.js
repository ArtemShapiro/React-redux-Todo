import React, {Component} from 'react'

import {ListItem} from 'material-ui/List'

import Checkbox from 'material-ui/Checkbox'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

import {grey400} from 'material-ui/styles/colors'

const IconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const RightIconMenu = (
  <IconMenu iconButtonElement={IconButtonElement}>
    <MenuItem>Rename Todo</MenuItem>
    <MenuItem>Delete Todo</MenuItem>
  </IconMenu>
);

export default class Todo extends Component {
  render() {
    return (
      <ListItem leftCheckbox={<Checkbox checked={this.props.done} />} primaryText={this.props.name} rightIconButton={RightIconMenu} />
    )
  }
}
