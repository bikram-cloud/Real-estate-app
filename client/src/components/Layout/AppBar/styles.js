import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
  },
  leftLogo: {
    display: 'flex',
    marginRight: '0.3rem',
    flexDirection: 'row',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  linked: {
    textDecoration: 'none',
    color: '#fff',
    '&:hover': {
      backgrountColor: 'black',
    },
  },
  input: {
    color: '#fff',
    border: '1px white solid',
    outline: 'none',
  },
}));

export default useStyles;
