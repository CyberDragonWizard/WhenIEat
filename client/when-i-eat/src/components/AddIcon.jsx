import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
    addIcon: {
        fontSize: '50px',
        color: 'black',
      },
      margin: {
          marginRight: '50px',
          transition: 'all .3s ease-in-out'
      }
}));

export default function AddButton() {

  const classes = useStyles();

  return (
    <div>
        <IconButton aria-label="edit" className={classes.margin} >
          <AddIcon className={classes.addIcon}/>
        </IconButton>
    </div>
  );
}