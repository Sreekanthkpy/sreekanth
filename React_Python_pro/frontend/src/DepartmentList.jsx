import { useState, useEffect } from 'react'

function DepartmentList() {
  const [departments, setDepartments] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/departments/')
      .then(res => res.json())
      .then(data => setDepartments(data))
  }, [])

  return (
    <div>
      <h2>Departments</h2>
      <ul>
        {departments.map(dept => <li key={dept.id}>{dept.name}</li>)}
      </ul>
    </div>
  )
}

export default DepartmentList