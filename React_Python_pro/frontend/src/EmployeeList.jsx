import { useState, useEffect } from 'react'

function EmployeeList() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/employees/')
      .then(res => res.json())
      .then(data => setEmployees(data))
  }, [])

  return (
    <div>
      <h2>Employees</h2>
      <ul>
        {employees.map(emp => <li key={emp.id}>{emp.name} (Dept ID: {emp.department_id})</li>)}
      </ul>
    </div>
  )
}

export default EmployeeList