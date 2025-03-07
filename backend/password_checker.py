from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

# Enable CORS (if not already added)
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],  # Allow frontend to access backend
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],
)

# Define request model
class PasswordRequest(BaseModel):
    password: str

@app.post("/check-password/")
async def check_password(request: PasswordRequest):
    password = request.password
    
    # Simple password strength checker
    if len(password) < 6:
        strength = "Weak"
    elif len(password) < 10:
        strength = "Moderate"
    else:
        strength = "Strong"

    return {"strength": strength}
