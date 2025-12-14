import React from 'react'
import { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material'

function EmployeeList() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/employees/`)
      .then(res => res.json())
      .then(data => setEmployees(data))
  }, [])

  return (
    <Paper sx={{ p: 2, mt: 2 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Employees
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Emp ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Dept ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map(emp => (
              <TableRow key={emp.id}>
                <TableCell>{emp.id}</TableCell>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.department_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default EmployeeList