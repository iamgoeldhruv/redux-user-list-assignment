import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '@mui/material/Modal';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import { addUser } from '../redux/actions.ts';
import RenderBody from './RenderBody.tsx';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal: React.FC<{ open: boolean; handleClose: () => void }> = ({ open, handleClose }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
  
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return; 
  }
    dispatch(addUser(name, email));
    setName('');
    setEmail('');
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Container maxWidth="sm">
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '& > *': {
                m: 1,
                width: '100%',
              },
              mt: 4,
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              ADD USER
            </Typography>
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email"
              variant="outlined"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </Container>
      </Box>
    </Modal>
  );
};

export const UserList: React.FC = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const headingStyle: React.CSSProperties = {
    color: 'blue',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    marginTop: '0px',
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70vh',
    padding: '20px',
  };

  const tableStyle: React.CSSProperties = {
    marginBottom: '20px',
    borderCollapse: 'collapse',
    width: '100%',
  };

  const buttonStyle: React.CSSProperties = {
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>USER NAMES AND THEIR CORRESPONDING EMAIL</h1>
      <table id="users" style={tableStyle}>
        
        <tbody>
          <RenderBody />
        </tbody>
      </table>
      <Button variant="contained" onClick={handleOpen} style={buttonStyle}>
        Add Users
      </Button>
      <BasicModal open={open} handleClose={handleClose} />
    </div>
  );
};
