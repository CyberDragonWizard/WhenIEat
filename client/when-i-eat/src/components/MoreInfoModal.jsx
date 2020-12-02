import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './MoreInfoModal.css'

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
    height: '400px'
  },
}));

export default function MoreInfoModal() {
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
      <button type="button" className='continue-button' onClick={handleOpen}>
        Register
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
            <h2 className="info-modal-title">We just need a bit more information.</h2>
            <form className='info-form'>
                 <input type='text' className='info-input' placeholder='Name'></input>
                 <br/>
                 <input type='text' className='info-input' placeholder='Age'></input>
                 <br/>
                 <input type='text' className='info-input' placeholder='Weight (lbs)'></input>
                 <br/>
                 <input type='text' className='info-input' placeholder='Height (inches)'></input>
                 <button type="button" className='contine-button' onClick={handleClose}>Contine</button>
             </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}