import React from 'react';
import Link from 'react-router-dom/Link';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  link: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
};

const NavBar = () => (
  <AppBar
    title={<Link style={styles.link} to="/">OnlineFood</Link>}
    iconElementRight={
      <FlatButton
        containerElement={<Link to="/login" />}
        label="Login"
      />
    }
  />
);

export default NavBar;
