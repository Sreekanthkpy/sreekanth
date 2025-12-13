# React Python Project

Frontend: React JS with components for Departments and Employees  
Backend: Python FastAPI with SQLite database for Departments and Employees

## To run frontend:
cd frontend  
npm install  
npm run dev

## To run backend:
cd backend  
pip install -r requirements.txt  
uvicorn main:app --reload

The backend uses a SQLite database (test.db) that will be created automatically on first run.

## API Endpoints:
- GET /departments/ - List all departments
- POST /departments/?name=DeptName - Create department
- GET /employees/ - List all employees
- POST /employees/?name=EmpName&department_id=1 - Create employee

The frontend displays the data from these endpoints.