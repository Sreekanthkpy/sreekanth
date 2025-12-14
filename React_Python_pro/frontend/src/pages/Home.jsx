import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import DepartmentList from '../components/DepartmentList'
import EmployeeList from '../components/EmployeeList'

function Home() {
  return (
    <div>
      <h1>React + FastAPI App</h1>
      <nav>
        <Link to="/departments">Departments</Link> | <Link to="/employees">Employees</Link>
      </nav>
      <Routes>
        <Route path="/departments" element={<DepartmentList />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/" element={<h2>Welcome to the Home Page</h2>} />
      </Routes>
    </div>
  )
}

export default Home