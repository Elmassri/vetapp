import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import NewVisit from '../pages/NewVisit'
import {Link,Switch,Route,Router} from 'react-router-dom'

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

const columns = [
  { id: 'number', label: 'Number', minWidth: 100 },
  
  
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'detailedinfo',
    label: 'Detailed Info',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(number,date, detailedinfo) {
  
  return { number, date, detailedinfo };
}

const rows = [
  createData('10', 10/5/2018, 1324171354, 2),
  createData('9', 10/5/2018, 1403500365, 9596961),
  createData('8', 10/5/2018, 60483973, 301340),
  createData('7', 10/5/2018, 327167434, 9833520),
  createData('6', 'CA', 37602103, 9984670),
  createData('5', 'AU', 25475400, 7692024),
  createData('4', 'DE', 83019200, 357578),
  createData('3', 'IE', 4857000, 70273),
  createData('2', 'MX', 126577691, 1972550),
  createData('1', 'JP', 126317000, 377973),
  createData('11', 'FR', 67022000, 640679),
  createData('12', 'GB', 67545757, 242495),
  createData('13', 'RU', 146793744, 17098246),
  createData('14', 'NG', 200962417, 923768),
  createData('15', 'BR', 210147125, 8515767),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
                <CardHeader>AppointmentHistory
                  
             <Link to="/NewVisit" ><button   >  NewVisit </button>
             </Link>
                </CardHeader>

    <Paper className={classes.root} >
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      
    </Paper>
    </>
  );
}
