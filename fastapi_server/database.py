from pymongo import MongoClient
import os
from dotenv import load_dotenv
load_dotenv()
client = MongoClient(os.getenv("MONGO_URL"))

#create a database named "vignan"
db=client["vignan"]
#client a collections in vignan database in mongodb
student_collection=db["student"]
staff_collection=db["staff"]
