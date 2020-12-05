import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams, useHistory } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import EditIcon from './EditIcon';
import { putMeal } from '../services/meals'
import './EditMealModal.css'

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

export default function EditMealModal(props) {
  const [meals, setMeals] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    calories: null,
    protein: null,
    carbs: null,
    fats: null
  })

  const history = useHistory();

  const { id } = useParams();

  // useEffect(() => {
  //   const prefillForm = () => {
  //     const mealItem = props.meals.find(meal => meal.id === Number(id));
  //     setFormData({
  //       name: mealItem.name,
  //       calories: mealItem.calories,
  //       protein: mealItem.protein,
  //       carbs: mealItem.carbs,
  //       fats: mealItem.fats
  //     })
  //   }
  //   prefillForm()
  //   if (props.meals.length){
  //     prefillForm();
  //   }
  // }, [props.meals])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
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

  const handleUpdate = async (id, mealData) => {
    const updatedMeal = await putMeal(id, mealData);
    setMeals(prevState => prevState.map(meal => {
      return meal.id === Number(id) ? updatedMeal : meal
    }))
    history.push('/meals');
  }

  return (
    <div>
      <div onClick={handleOpen}>
        <EditIcon />
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
            <h2 className="transition-modal-title">Edit Your Meal.</h2>
            <form className='sign-up-form' onSubmit={(e) => {
                e.preventDefault();
                props.handleUpdate(id, formData);
            }}>
                 <input meals={meals} handleUpdate={handleUpdate} name='name' type='text' className='sign-up-input' placeholder="Meal" value={formData.name} onChange={handleChange}></input>
                 <br/>
                 <input meals={meals} handleUpdate={handleUpdate} name='calories' type='text' className='sign-up-input' placeholder="Calories" value={formData.calories} onChange={handleChange}></input>
                 <br/>
                 <input meals={meals} handleUpdate={handleUpdate} name='protein' type='text' className='sign-up-input' placeholder="Protein" value={formData.protein} onChange={handleChange}></input>
                 <br/>
                 <input meals={meals} handleUpdate={handleUpdate} name='carbs' type='text' className='sign-up-input' placeholder="Carbs(g)" value={formData.carbs} onChange={handleChange}></input>
                 <br/>
                 <input meals={meals} handleUpdate={handleUpdate} name='fats' type='text' className='sign-up-input' placeholder="Fats(g)" value={formData.fats} onChange={handleChange}></input>
                 <br/>
                 <button type="button" className='save-changes-button' onClick={handleClose}>Save Changes</button>
             </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}