import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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

  const classes = useStyles();

  return (
    <div>
      <IconButton aria-label="delete" className={classes.margin}>
          <DeleteIcon 
          // onClick={(meal) => props.handleDelete(meal.id)}
          />
      </IconButton>
    </div>
  );
}