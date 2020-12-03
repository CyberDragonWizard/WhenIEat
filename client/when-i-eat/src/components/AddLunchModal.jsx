import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddIcon from './AddIcon'

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
    height: '510px'
  },
}));

export default function AddLunchModal() {
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
      <div onClick={handleOpen}>
        <AddIcon />
      </div>
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
            <h2 className="transition-modal-title">What was for lunch?</h2>
            <form className='sign-up-form'>
                 <input type='text' className='sign-up-input' placeholder="Meal"></input>
                 <br/>
                 <input type='text' className='sign-up-input' placeholder="Protein(g)"></input>
                 <br/>
                 <input type='text' className='sign-up-input' placeholder="Carbs(g)"></input>
                 <br/>
                 <input type='text' className='sign-up-input' placeholder="Fats(g)"></input>
                 <br/>
                 <input type='text' className='sign-up-input' placeholder="Fats(g)"></input>
                 <br/>
                 <button type="button" className='save-changes-button' onClick={handleClose}>Add Meal</button>
             </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}