import { Typography, Link } from '@material-ui/core';
import React from 'react';

const CopyRight = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyrignt ©'}
      <Link style={{ marginLeft: '0.5rem' }}>Your Website</Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default CopyRight;
