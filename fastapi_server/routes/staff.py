from fastapi import APIRouter
from routes import staff
from database import staff_collection

staff_router = APIRouter(prefix="/staff", tags=["staff"])

#lpcalhost:8000/staff/getstaffs
@staff_router.get("/getstaffs")
def getstaffs():
    return "get staff method called"
@staff_router.post("/registerstaff")
def addstaff():
    return "add staff method called"