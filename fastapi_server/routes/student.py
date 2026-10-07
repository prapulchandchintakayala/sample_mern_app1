from fastapi import APIRouter
from models import Student
from database import student_collection
from bson import ObjectId

#convert mongodb document into json format
def student_details(student):
    return {
        "id": str(student["_id"]),
        "name": student["name"],
        "age": student["age"],
        "email": student["email"],
        "marks": student["marks"]
    }

stu_router = APIRouter(prefix="/student", tags=["student"])

#localhost:8000/getstudents
@stu_router.get("/getstudents")
def get_students():
    students = student_collection.find()
    return [student_details(student) for student in students]



@stu_router.post("/register")
def register(stu:Student):
    result=student_collection.insert_one(stu.model_dump())
    return {"message":"data inserted successfully"}

@stu_router.get("/getParticularstudent/{stuid}")
def getParticularstudent(stuid:str):
    student = student_collection.find_one({"_id": stuid})
    return student_details(student) 

@stu_router.delete("/deletestudent/{stuid}")
def deletestudent(stuid:str):   
    result = student_collection.delete_one({"_id": stuid})
    return "student deleted successfully"

@stu_router.put("/updatestudent/{stuid}")
def updatestudent(stuid:str, stu:Student):
    result = student_collection.update_one(
        {"_id": ObjectId(stuid)},{"$set": stu.model_dump()})
    return "student updated successfully"