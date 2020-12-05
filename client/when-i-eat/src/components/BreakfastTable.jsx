import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditMealModal from './EditMealModal';
import DeleteIcon from './DeleteIcon';
import { destroyMeal } from '../services/meals'
import { getAllMeals } from '../services/meals'

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#284550',
      color: theme.palette.common.white,
      fontFamily: 'Montserrat',
      fontSize: 18,
    },
    body: {
      fontSize: 16,
      fontFamily: 'Montserrat',
      border: 'none'
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  
  const useStyles = makeStyles({
    table: {
    },
    tableContainer: {
        boxShadow: '0 0 3px 3px rgba(0, 0, 0, 0.573)',
        maxHeight: '300px',
        marginRight: '100px',
    },
  });

export default function BreakfastTable(props) {
    const [meals, setMeals] = useState([]);
    
    useEffect(() => {
     
      const fetchMeals = async () => {
        const mealData = await getAllMeals();
        setMeals(mealData)
      }
      fetchMeals();
    }, [])

    const handleDelete = async (id) => {
      await destroyMeal(id);
      setMeals(prevState => prevState.filter(meal => meal.id !== id))
    }


    const classes = useStyles();

    return (
        <div>
            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table stickyHeader className={classes.table} aria-label="customized table">
                  <TableHead className={classes.tableHead}>
                    <TableRow>
                    <StyledTableCell></StyledTableCell>
                      <StyledTableCell >Breakfast</StyledTableCell>
                      <StyledTableCell align="center">Protein&nbsp;(g)</StyledTableCell>
                      <StyledTableCell align="center">Carbs&nbsp;(g)</StyledTableCell>
                      <StyledTableCell align="center">Fats&nbsp;(g)</StyledTableCell>
                      <StyledTableCell align="center">Calories</StyledTableCell>
                      <StyledTableCell></StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {meals.map((meal) => (
                      <StyledTableRow key={meal.name}>
                        <DeleteIcon
                        meals={meals}
                        handleDelete={handleDelete}
                        currentUser={props.currentUser}
                         />
                        <StyledTableCell component="th" scope="row">
                          {meal.name}
                        </StyledTableCell>
                        <StyledTableCell align="center">{meal.protein}</StyledTableCell>
                        <StyledTableCell align="center">{meal.carbs}</StyledTableCell>
                        <StyledTableCell align="center">{meal.fats}</StyledTableCell>
                        <StyledTableCell align="center">{meal.calories}</StyledTableCell>
                        <EditMealModal className='editIcon'/>
                       </StyledTableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            
        </div>
    )
}
