import React from 'react';
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
  
  function createData(name, protein, carbs, fats, calories) {
    return { name, protein, carbs, fats, calories };
  }
  
  const rows = [
    createData('Egg(3)', 7, 18.0, 8, 240),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
  const useStyles = makeStyles({
    table: {
      minWidth: 1200,
    },
    tableContainer: {
        boxShadow: '0 0 3px 3px rgba(0, 0, 0, 0.573)',
        maxWidth: '1200px',
        maxHeight: '400px',
        margin: '0 auto',
    },
  });

export default function BreakfastTable() {
    const classes = useStyles();

    return (
        <div>
            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table className={classes.table} aria-label="customized table">
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
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <DeleteIcon />
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="center">{row.protein}</StyledTableCell>
                        <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                        <StyledTableCell align="center">{row.fats}</StyledTableCell>
                        <StyledTableCell align="center">{row.calories}</StyledTableCell>
                        <EditIcon className='editIcon'/>
                       </StyledTableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            
        </div>
    )
}
