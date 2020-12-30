import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Title from './Title';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton, TableFooter } from '@material-ui/core';

// Generate Order Data
function createData(id, date, name) {
  return { id, date, name };
}

const rows = [
  createData(0, 'ester@apps.ipb.ac.id', '089614102505'),
  createData(1, 'superadmin@apps.ipb.ac.id', '081311613170'),
  createData(2, 'ester@apps.ipb.ac.id', '089614102505'),
  createData(3, 'superadmin@apps.ipb.ac.id', '081311613170'),
  createData(4, 'ester@apps.ipb.ac.id', '089614102505'),
  createData(5, 'superadmin@apps.ipb.ac.id', '081311613170'),
  createData(6, 'ester@apps.ipb.ac.id', '089614102505'),
  createData(7, 'superadmin@apps.ipb.ac.id', '081311613170'),
  createData(8, 'ester@apps.ipb.ac.id', '089614102505'),
  createData(9, 'superadmin@apps.ipb.ac.id', '081311613170'),
  createData(10, 'ester@apps.ipb.ac.id', '089614102505'),
  createData(11, 'superadmin@apps.ipb.ac.id', '081311613170'),
  createData(12, 'ester@apps.ipb.ac.id', '089614102505'),
 
];

// function preventDefault(event) {
//   event.preventDefault();
// }

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  buttonSpacing: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));

export default function DaftarAdminList() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  const emptyRows = 
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <React.Fragment>
      <Title>Daftar Admin</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell align="right">Action</TableCell>  
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">
                <div className={classes.buttonSpacing}>
                  <IconButton aria-label="edit">
                    <EditIcon/>
                  </IconButton>
                  <IconButton aria-label="delete">
                    <DeleteIcon/>
                  </IconButton>
                </div>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 60 * emptyRows }}>
              <TableCell colSpan={6}/>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </React.Fragment>
  );
}