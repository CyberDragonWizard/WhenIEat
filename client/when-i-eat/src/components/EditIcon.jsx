import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles((theme) => ({
    margin: {
      transition: 'all .2s ease-in-out',
      '&:hover': {
        backgroundColor: '#19bcc200',
        color: '#19bcc2c4',
    }
    },
    
}));

export default function DeleteButton() {

  const classes = useStyles();

  return (
    <div>
        <IconButton aria-label="edit" className={classes.margin} >
          <EditIcon className={classes.editIcon}/>
        </IconButton>
    </div>
  );
}