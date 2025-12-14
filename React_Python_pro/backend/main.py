from fastapi import FastAPI
from database import database, departments, employees
from sqlalchemy import select
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"Hello": "World"}

# Departments
@app.get("/departments/")
async def read_departments():
    await database.connect()
    query = select(departments)
    result = await database.fetch_all(query)
    await database.disconnect()
    return result

@app.post("/departments/")
async def create_department(name: str):
    query = departments.insert().values(name=name)
    last_record_id = await database.execute(query)
    return {"id": last_record_id, "name": name}

# Employees
@app.get("/employees/")
async def read_employees():
    query = select(employees)
    return await database.fetch_all(query)

@app.post("/employees/")
async def create_employee(name: str, department_id: int):
    query = employees.insert().values(name=name, department_id=department_id)
    last_record_id = await database.execute(query)
    return {"id": last_record_id, "name": name, "department_id": department_id}