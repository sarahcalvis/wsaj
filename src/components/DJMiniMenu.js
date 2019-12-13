import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import firebase from "../firebase.js"
import { withRouter } from "react-router-dom";


class DJMiniMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
    };
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };


  logout = () => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      this.props.history.push('/login');
    }).catch((error) => {
      // An error happened
    });
  }

  render() {
    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
          Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose} to='/' component={Link}>Home</MenuItem>
          <MenuItem onClick={this.handleClose} to='/shows' component={Link}>DJ Shows</MenuItem>
          <MenuItem onClick={this.handleClose} to='/schedule' component={Link} >Calendar</MenuItem>
          <MenuItem onClick={this.handleClose} to='/contact' component={Link}>Contact</MenuItem>
          <MenuItem onClick={this.handleClose} to='/dj/profile' component={Link}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose} to='/dj/add-set' component={Link}>Add Set</MenuItem>
          <MenuItem onClick={this.logout}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}
export default withRouter(DJMiniMenu);