import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddDateIcon from './AddDateIcon';
import { useHistory } from 'react-router-dom';
import { postDay } from '../services/days'
import './AddDateModal.css'

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
    height: '250px'
  },
}));

export default function AddDateModal() {
  const history  = useHistory();
  const [days, setDays] = useState();
  const classes = useStyles();
  const [dayData, setDayData] = useState({
    date: '',
  })

  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDayData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleCreate = async (dayData) => {
    const newDay = await postDay(dayData);
    setDays(prevState => [...prevState, newDay]);
    history.push('/days');
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleOpen}>
        <AddDateIcon />
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
            <h2 className="transition-modal-title">Add a Day.</h2>
            <form className='sign-up-form'>
                 <input days={days} onChange={handleChange} handleCreate={handleCreate} value={dayData.name} type='text' className='sign-up-input' placeholder="Today's Date"></input>
                 <button type="button" className='add-date-button' onClick={handleClose}>Add</button>
             </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}