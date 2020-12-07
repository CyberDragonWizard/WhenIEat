import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditMealModal from './EditDinnerModal';
import DeleteIcon from './DeleteIcon';

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

export default function DinnerTable(props) {
    
    const classes = useStyles();

    return (
        <div>
            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table stickyHeader className={classes.table} aria-label="customized table">
                  <TableHead className={classes.tableHead}>
                    <TableRow>
                    <StyledTableCell></StyledTableCell>
                      <StyledTableCell >Dinner</StyledTableCell>
                      <StyledTableCell align="center">Protein&nbsp;(g)</StyledTableCell>
                      <StyledTableCell align="center">Carbs&nbsp;(g)</StyledTableCell>
                      <StyledTableCell align="center">Fats&nbsp;(g)</StyledTableCell>
                      <StyledTableCell align="center">Calories</StyledTableCell>
                      <StyledTableCell></StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.meals.map((meal) => (
                      <React.Fragment key={meal.id}>
                        {
                          meal.user_id === props.currentUser?.id &&
                          <>
                      <StyledTableRow key={meal.name}>
                        <DeleteIcon
                        meal={meal}
                        handleDelete={props.handleDelete}
                        currentUser={props.currentUser}
                         />
                        <StyledTableCell component="th" scope="row">
                          {meal.name}
                        </StyledTableCell>
                        <StyledTableCell align="center">{meal.protein}</StyledTableCell>
                        <StyledTableCell align="center">{meal.carbs}</StyledTableCell>
                        <StyledTableCell align="center">{meal.fats}</StyledTableCell>
                        <StyledTableCell align="center">{meal.calories}</StyledTableCell>
                        <EditMealModal
                        handleUpdate={props.handleUpdate}
                        meal={meal}
                        className='editIcon'/>
                       </StyledTableRow>
                       </>
                       }
                       </React.Fragment>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            
        </div>
    )
}
