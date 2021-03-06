import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddIcon from './AddIcon';
import { useHistory } from 'react-router-dom';
import { postMeal } from '../services/meals'

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
    height: '550px'
  },
}));

export default function AddLunchModal(props) {
  const history = useHistory();
  const [meals, setMeals] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    calories: null,
    protein: null,
    carbs: null,
    fats: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleCreate = async (mealData) => {
    const newMeal = await postMeal(mealData);
    setMeals(prevState => [...prevState, newMeal]);
    history.push('/meals');
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
                 <input meals={meals} handleCreate={handleCreate} name='name' type='text' className='sign-up-input' placeholder="Meal" value={formData.name} onChange={handleChange}/>
                 <br/>
                 <input meals={meals} handleCreate={handleCreate} name='calories' type='text' className='sign-up-input' placeholder="Calories" value={formData.calories} onChange={handleChange}/>
                 <br/>
                 <input meals={meals} handleCreate={handleCreate} name='protein' type='text' className='sign-up-input' placeholder="Protein(g)" value={formData.protein} onChange={handleChange}/>
                 <br/>
                 <input meals={meals} handleCreate={handleCreate} name='carbs' type='text' className='sign-up-input' placeholder="Carbs(g)" value={formData.carbs} onChange={handleChange}/>
                 <br/>
                 <input meals={meals} handleCreate={handleCreate} name='fats' type='text' className='sign-up-input' placeholder="Fats(g)" value={formData.fats} onChange={handleChange}/>
                 <br/>
                 <button type="button" className='save-changes-button' onClick={handleClose}>Add Meal</button>
             </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}