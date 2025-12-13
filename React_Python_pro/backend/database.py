from sqlalchemy import create_engine, Column, Integer, String, MetaData, Table, ForeignKey
from databases import Database

DATABASE_URL = "sqlite:///./test.db"

database = Database(DATABASE_URL)
metadata = MetaData()

departments = Table(
    "departments",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("name", String(50)),
)

employees = Table(
    "employees",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("name", String(50)),
    Column("department_id", Integer, ForeignKey("departments.id")),
)

engine = create_engine(DATABASE_URL)
metadata.create_all(engine)