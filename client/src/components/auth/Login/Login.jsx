import React, { useState } from 'react';

import useStyles from './styles';
import { Link } from 'react-router-dom';
import {
  Container,
  Button,
  Checkbox,
  Avatar,
  CssBaseline,
  Typography,
  TextField,
  Grid,
  Box,
  FormControlLabel,
} from '@material-ui/core';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import CopyRight from '../CopyRight';

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const classes = useStyles();

  const emailChangeHandelar = e => setEnteredEmail(e.target.value);

  const passwordChangeHandelar = e => setEnteredPassword(e.target.value);

  const formSubmitHandeler = e => {
    e.preventDefault();
    console.log(enteredEmail, enteredPassword);

    setEnteredEmail('');
    setEnteredPassword('');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AssignmentIndIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={formSubmitHandeler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            value={enteredEmail}
            onChange={emailChangeHandelar}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={enteredPassword}
            onChange={passwordChangeHandelar}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/register" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              Don't have an accuount?
              <Link to="/register" variant="body2">
                Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <CopyRight />
      </Box>
    </Container>
  );
};

export default Login;
