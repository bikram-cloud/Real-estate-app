import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(11),
    display: 'flex',
    flexDirection: 'Column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(5),
    fontSize: theme.spacing(2),
  },
}));

export default useStyles;
