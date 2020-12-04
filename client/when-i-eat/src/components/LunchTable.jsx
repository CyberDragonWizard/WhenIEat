import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from './EditIcon';
import DeleteIcon from './DeleteIcon';
import { getAllMeals } from '../services/meals'

// const StyledTableCell = withStyles((theme) => ({
//     head: {
//       backgroundColor: '#284550',
//       color: theme.palette.common.white,
//       fontFamily: 'Montserrat',
//       fontSize: 18,
//     },
//     body: {
//       fontSize: 16,
//       fontFamily: 'Montserrat',
//       border: 'none'
//     },
//   }))(TableCell);
  
//   const StyledTableRow = withStyles((theme) => ({
//     root: {
//       '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//       },
//     },
//   }))(TableRow);
  
//   const useStyles = makeStyles({
//     table: {
//       minWidth: 1100,
//     },
//     tableContainer: {
//         boxShadow: '0 0 3px 3px rgba(0, 0, 0, 0.573)',
//         maxWidth: '1200px',
//         maxHeight: '300px',
//         margin: '0 auto',
//     },
//   });

export default function LunchTable() {
  // const [meals, setMeals] = useState([]);
  //   const [fetchMeals, setFetchMeals] = useState(false);
 

  //   useEffect(() => {
     
  //     const fetchMeals = async () => {
  //       const mealData = await getAllMeals();
  //       setMeals(mealData)
  //     }
  //     fetchMeals();
  //   })

  //   const classes = useStyles();

    return (
        <div>
            {/* <TableContainer className={classes.tableContainer} component={Paper}>
                <Table stickyHeader className={classes.table} aria-label="customized table">
                  <TableHead className={classes.tableHead}>
                    <TableRow>
                    <StyledTableCell></StyledTableCell>
                      <StyledTableCell >Lunch</StyledTableCell>
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
                        key={meal.id}
                        item={meal}
                        fetchMeals={fetchMeals}
                        setFetchItems={setFetchMeals}
                         />
                        <StyledTableCell component="th" scope="row">
                          {meal.name}
                        </StyledTableCell>
                        <StyledTableCell align="center">{meal.protein}</StyledTableCell>
                        <StyledTableCell align="center">{meal.carbs}</StyledTableCell>
                        <StyledTableCell align="center">{meal.fats}</StyledTableCell>
                        <StyledTableCell align="center">{meal.calories}</StyledTableCell>
                        <EditIcon className='editIcon'/>
                       </StyledTableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer> */}
        </div>
    )
}