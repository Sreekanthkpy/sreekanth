import React from 'react'
import { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material'
function DepartmentList() {
  const [departments, setDepartments] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/departments/`)
      .then(res => res.json())
      .then(data => setDepartments(data))
  }, [])

  return (
    <Paper sx={{ p: 2, mt: 2 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Departments
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Dept ID</TableCell>
              <TableCell>Dept Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {departments.map(dept => (
              <TableRow key={dept.id}>
                <TableCell>{dept.id}</TableCell>
                <TableCell>{dept.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default DepartmentList