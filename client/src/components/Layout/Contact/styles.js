import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '10rem',
  },
  formId: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '50rem',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(6),
  },
  submit: {
    margin: 'auto',
    padding: '0.5rem 1.5rem',
    borderRadius: theme.spacing(2),
    fontSize: '1.5rem',
  },
}));

export default useStyles;
