import React, { useState } from 'react';
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

export default function AddBreakfastModal(props) {
  const [formData, setFormData] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
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

  const handleOpen = (props) => {
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
            <h2 className="transition-modal-title">What was for breakfast?</h2>
            <form className='sign-up-form'>
                 <input name='name' type='text' className='sign-up-input' placeholder="Meal" value={formData.name} onChange={handleChange}/>
                 <br/>
                 <input name='calories' type='text' className='sign-up-input' placeholder="Calories" value={formData.calories} onChange={handleChange}/>
                 <br/>
                 <input name='protein' type='text' className='sign-up-input' placeholder="Protein(g)" value={formData.protein} onChange={handleChange}/>
                 <br/>
                 <input name='carbs' type='text' className='sign-up-input' placeholder="Carbs(g)" value={formData.carbs} onChange={handleChange}/>
                 <br/>
                 <input name='fats' type='text' className='sign-up-input' placeholder="Fats(g)" value={formData.fats} onChange={handleChange}/>
                 <br/>
                 <button type="button" className='save-changes-button' onClick={handleClose}>Add Meal</button>
             </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}