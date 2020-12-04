import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { destroyMeal } from '../services/meals'


const useStyles = makeStyles((theme) => ({
    margin: {
        transition: 'all .2s ease-in-out',
        marginTop: '6px',
        '&:hover': {
          backgroundColor: '#c2193e00',
          color: '#a50000fa',
      }
    }
}));

export default function DeleteButton(props) {
  const [meals, setMeals] = useState([]);

  const handleDelete = async (id) => {
    await destroyMeal(id);
    setMeals(prevState => prevState.filter(meal => meal.id !== id))
  }
 


  const classes = useStyles();

  return (
    <div>
        <IconButton aria-label="delete" className={classes.margin} >
          <DeleteIcon 
          meals={meals}
          handleDelete={handleDelete}
          currentUser={props.currentUser}
          onClick={() => props.handleDelete(meals.id)}
          />


        </IconButton>
    </div>
  );
}