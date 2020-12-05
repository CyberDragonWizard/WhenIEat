import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { getAllDays } from '../services/days';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    width: '155px',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
        backgroundColor: '#284550',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function DateMenu(props) {
  const [days, setDays] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {
     
    const fetchDays = async () => {
      const dayData = await getAllDays();
      setDays(dayData)
    }
    fetchDays();
  }, [])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const useStyles = makeStyles({
    button: {
        fontFamily: 'Montserrat',
        marginRight: '70%',
        backgroundColor: '#284550',
        color: 'white',
        width: '170px',
        '&:hover': {
            backgroundColor: '#3d697a'
        }
    },

  });

  const classes = useStyles();

  return (
    <div>
      <Button
        className={classes.button}
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
      >
        Choose a Date
      </Button>
      <StyledMenu
        className={classes.menu}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {days.map((day) => (
        <StyledMenuItem >
          <ListItemText align='center'>{day.date}</ListItemText>
        </StyledMenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}