import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class FormError extends React.Component {
  state = {
    open: false,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({open: ((nextProps.error) ? true : false)})
  }

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ]

    return (
      <div>
        <Dialog
          title={this.props.title}
          actions={actions}
          open={this.state.open}
        >
          {this.props.error}
        </Dialog>
      </div>
    )
  }
}
