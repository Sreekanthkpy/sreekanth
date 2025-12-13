import { useState } from 'react'
import './App.css'
import DepartmentList from './DepartmentList'
import EmployeeList from './EmployeeList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>React + FastAPI App</h1>
        <DepartmentList />
        <EmployeeList />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </>
  )
}

export default App