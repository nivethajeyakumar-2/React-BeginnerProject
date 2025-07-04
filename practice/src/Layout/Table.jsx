import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Button,
} from "@mui/material";
const TableLayout = ({
  columns,
  rows,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  onEdit,
  onDelete,
  onAdd,
}) => {
  return (
    <>
      <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={onAdd}>
        Add 
      </Button>

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow hover key={row.id}>
                    {columns.map((column) => {
                      if (column.id === "actions") {
                        return (
                          <TableCell key="actions">
                            <Button
                              onClick={() => onEdit(row)}
                              variant="outlined"
                              size="small"
                              sx={{ mr: 1 }}
                            >
                              Edit
                            </Button>
                            <Button
                              onClick={() => onDelete(row.id)}
                              variant="outlined"
                              color="error"
                              size="small"
                            >
                              Delete
                            </Button>
                          </TableCell>
                        );
                      }
                      return <TableCell key={column.id}>
                          {column.render ? column.render(row) : row[column.id]}
                        </TableCell>
                    })}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      </Paper>
    </>
  );
};

export default TableLayout;
