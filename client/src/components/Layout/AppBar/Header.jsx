import React from 'react';
import {
  AppBar,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar color="primary">
      <Toolbar center className={classes.paper}>
        <Typography
          variant="h5"
          component="div"
          noWrap
          className={classes.leftLogo}>
          <HomeIcon fontSize="large" />
          House Rent
        </Typography>
        <TextField
          color="secondary"
          variant="outlined"
          placeholder="Enter area"
          InputProps={{
            className: classes.input,
            endAdornment: (
              <InputAdornment>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Typography variant="h6" component="div" noWrap>
          Fromtheward
        </Typography>
        <Typography variant="h6" component="div" noWrap>
          FromStations/Lines
        </Typography>
        <Typography variant="h6" component="div" noWrap>
          FrompPopularAreas
        </Typography>
        <Typography variant="h6" component="div" noWrap>
          BrowsingHistory
        </Typography>
        <Typography variant="h6" component="div" noWrap>
          <Link to="/contact" className={classes.linked}>
            Contactus
          </Link>
        </Typography>
        <Typography variant="h6" component="div">
          <Link to="/login" className={classes.linked}>
            Login
          </Link>
        </Typography>
        <Typography variant="h6" component="div" noWrap>
          Langugage
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
