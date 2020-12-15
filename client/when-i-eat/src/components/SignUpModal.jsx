import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './SignUpModal.css'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 0 10px 10px rgba(0, 0, 0, 0.184)',
    padding: theme.spacing(2, 4, 3),
    borderRadius: '8px',
    outline: 'none',
    width: '600px',
    marginBottom: '2%',
    position: 'fixed',
    height: '530px'
  },
}));

export default function SignUpModal(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    age: null,
    weight: null,
    height: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" className='sign-up-button' onClick={handleOpen}>
        Sign Up
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 className="transition-modal-title">Sign Up!</h2>
            <form className='sign-up-form' onSubmit={(e) => {
            e.preventDefault();
            props.handleRegister(formData);
            }}>
                 <input 
                 name='email' 
                 type='text' 
                 className='sign-up-input' 
                 placeholder='Email' 
                 value={formData.email} 
                 onChange={handleChange} />
                 <input 
                 name='password' 
                 type='password' 
                 className='sign-up-input' 
                 placeholder='Password' 
                 value={formData.password} 
                 onChange={handleChange} />
                 <input 
                 name='name' 
                 type='text' 
                 className='sign-up-input' 
                 placeholder='First and Last Name' 
                 value={formData.name} 
                 onChange={handleChange} />
                 <input 
                 name='age' 
                 type='text' 
                 className='sign-up-input' 
                 placeholder='Age' 
                 value={formData.age} 
                 onChange={handleChange} />
                 <input 
                 name='weight' 
                 type='text' 
                 className='sign-up-input' 
                 placeholder='Weight(lbs)' 
                 value={formData.weight} 
                 onChange={handleChange} />
                 <input 
                 name='height' 
                 type='text' 
                 className='sign-up-input' 
                 placeholder='Height(in)' 
                 value={formData.height} 
                 onChange={handleChange} />
                 <button type="submit" className='register-button' onClick={handleClose}>Register</button>
             </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
