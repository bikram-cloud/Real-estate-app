import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Link } from 'react-router-dom';

import CopyRight from '../CopyRight';
import useStyles from './styles';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const classes = useStyles();

  const updateFirstName = e => setFirstName(e.target.value);
  const updateLastName = e => setLastName(e.target.value);
  const updateEmail = e => setEmail(e.target.value);
  const updatePassword = e => setPassword(e.target.value);
  const updatePassword2 = e => setPassword2(e.target.value);

  const formSubmit = e => {
    e.preventDefault();

    console.log(firstName, lastName, email, password, password2);

    alert('form submit is success');

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setPassword2('');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOpenIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={formSubmit}>
          <TextField
            name="text"
            variant="outlined"
            label="First Name"
            required
            fullWidth
            margin="normal"
            value={firstName}
            onChange={updateFirstName}
          />
          <TextField
            name="text"
            variant="outlined"
            label="Last Name"
            required
            fullWidth
            margin="normal"
            value={lastName}
            onChange={updateLastName}
          />
          <TextField
            name="email"
            variant="outlined"
            label="Email Address"
            required
            fullWidth
            margin="normal"
            value={email}
            onChange={updateEmail}
          />
          <TextField
            name="password"
            variant="outlined"
            label="Password"
            type="password"
            required
            fullWidth
            margin="normal"
            value={password}
            onChange={updatePassword}
          />
          <TextField
            name="password"
            variant="outlined"
            label="Repeat Password"
            required
            fullWidth
            type="password"
            margin="normal"
            value={password2}
            onChange={updatePassword2}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            className={classes.submit}>
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              Already have an accuount?<Link to="/login">Sign In</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={6}>
        <CopyRight />
      </Box>
    </Container>
  );
};

export default Register;
