import React, { useState } from 'react';
import {
  Container,
  TextField,
  Typography,
  Button,
  CssBaseline,
  TextareaAutosize,
} from '@material-ui/core';

import useStyles from './styles';
// https://www.m-standard.co.jp/search/buysell/?freeword=

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [comment, setComment] = useState('');

  const classes = useStyles();

  const nameUpdate = e => setName(e.target.value);
  const emailUpdate = e => setEmail(e.target.value);
  const subjectUpdate = e => setSubject(e.target.value);
  const commentUpdate = e => setComment(e.target.value);

  const formSubmit = e => {
    e.preventDefault();

    console.log(name, email, subject, comment);

    alert(`form is submitted: ${name} ${email}, ${subject}, ${comment}`);

    setName('');
    setEmail('');
    setSubject('');
    setComment('');
  };

  return (
    <div className={classes.form}>
      <CssBaseline />
      <Container maxWidth="lg" disableGutters="true">
        <div className={classes.paper}>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            IF YOU HAVE ANY QUESTIONS OR REQUESTS FOR MATERIALS, PLEASE FILL OUT
            THE FORM
          </Typography>
          <form className={classes.formId} onSubmit={formSubmit}>
            <TextField
              value={name}
              variant="outlined"
              label="Name"
              fullWidth
              required
              style={{ marginBottom: '1rem' }}
              onChange={nameUpdate}
            />
            <TextField
              value={email}
              variant="outlined"
              label="Email"
              fullWidth
              required
              style={{ marginBottom: '1rem' }}
              onChange={emailUpdate}
            />
            <TextField
              value={subject}
              variant="outlined"
              label="Subject"
              fullWidth
              required
              style={{ marginBottom: '1rem' }}
              onChange={subjectUpdate}
            />
            <TextField
              value={comment}
              id="outlined-multiline-static"
              label="Comment"
              required
              multiline
              rows={8}
              variant="outlined"
              style={{ marginBottom: '1rem' }}
              onChange={commentUpdate}
            />
            <Button
              type="submit"
              value="button"
              variant="contained"
              color="primary"
              type="submit"
              size="small"
              className={classes.submit}>
              SUBMIT
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
