import asyncio
from database import database, departments, employees

async def add_sample_data():
    await database.connect()
    
    # Insert sample departments
    dept1 = await database.execute(departments.insert().values(name="HR"))
    dept2 = await database.execute(departments.insert().values(name="IT"))
    dept3 = await database.execute(departments.insert().values(name="Finance"))
    
    # Insert sample employees
    await database.execute(employees.insert().values(name="Alice", department_id=dept1))
    await database.execute(employees.insert().values(name="Bob", department_id=dept2))
    await database.execute(employees.insert().values(name="Charlie", department_id=dept3))
    
    await database.disconnect()
    print("Sample data added")

asyncio.run(add_sample_data())