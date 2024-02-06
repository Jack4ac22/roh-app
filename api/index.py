from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
message = os.getenv('NEXT_PUBLIC_TEST_MESSAGE')
again = os.getenv('NEXT_PUBLIC_AGAIN')


@app.get("/api/python")
def hello_world():

    return {"message": message, "again": again}
