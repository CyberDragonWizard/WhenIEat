import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles((theme) => ({

}));

export default function DeleteButton() {

  const classes = useStyles();

  return (
    <div>
        <IconButton aria-label="edit" className={classes.margin} >
          <EditIcon />
        </IconButton>
    </div>
  );
}