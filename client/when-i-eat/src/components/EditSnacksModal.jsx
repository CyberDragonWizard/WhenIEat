import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import EditIcon from './EditIcon';
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

export default function EditSnacksModal(props) {
  const [formData, setFormData] = useState({
    name: '',
    calories: null,
    protein: null,
    carbs: null,
    fats: null
  })

  useEffect(() => {
    const prefillForm = () => {
      const {name, protein, carbs, fats, calories} = props.meal
      setFormData({
        name, protein, carbs, fats, calories
      })
    }
     if (props.meal) {
       prefillForm()
     }
  }, [])

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
                props.handleUpdate(props.meal.id, formData);
                handleClose();
            }}>
                 <input name='name' type='text' className='sign-up-input' placeholder="Meal" value={formData.name} onChange={handleChange}/>
                 <br/>
                 <input name='protein' type='text' className='sign-up-input' placeholder="Protein" value={formData.protein} onChange={handleChange}/>
                 <br/>
                 <input name='carbs' type='text' className='sign-up-input' placeholder="Protein" value={formData.carbs} onChange={handleChange}/>
                 <br/>
                 <input name='fats' type='text' className='sign-up-input' placeholder="Carbs(g)" value={formData.fats} onChange={handleChange}/>
                 <br/>
                 <input name='calories' type='text' className='sign-up-input' placeholder="Fats(g)" value={formData.calories} onChange={handleChange}/>
                 <br/>
                 <button type="submit" className='save-changes-button'>Save Changes</button>
             </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}