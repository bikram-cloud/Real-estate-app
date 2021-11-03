import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  form: {
    backgroundColor: 'rgba(255, 255, 128, .5)',
    maxWidth: '60rem',
    textAlign: 'center',
    alignItems: 'center',
    margin: 'auto',
    border: '2px solid red',
    marginTop: '5rem',
  },
  paper: {
    margin: '5rem',
  },
  formId: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  submit: {
    margin: 'auto',
    padding: '0.5rem 1.5rem',
    borderRadius: theme.spacing(2),
    fontSize: '1.5rem',
  },
}));

export default useStyles;
