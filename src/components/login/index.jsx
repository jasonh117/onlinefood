import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  page: {
    textAlign: 'center',
    marginTop: '30px',
  },
  button: {
    marginTop: '30px',
  },
};

const Login = () => (
  <div style={styles.page}>
    <TextField
      hintText="example@email.com"
      floatingLabelText="Email"
    /><br />
    <TextField
      floatingLabelText="Password"
      type="password"
    /><br />
    <RaisedButton label="AYY" primary style={styles.button} />
  </div>
);

export default Login;
