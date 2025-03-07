# 🛡️ Password Strength Checker  


A **secure** and **modern** password strength checker built with **FastAPI (Python)** for the backend and **HTML, CSS, JavaScript (Node.js)** for the frontend.

## 📌 Features  
✅ Real-time password strength analysis  
✅ Checks for weak passwords and vulnerabilities  
✅ User-friendly and modern UI  
✅ Fully responsive design  
✅ Fast & secure API using FastAPI  

## 📂 Project Structure  
```
Brainwave_Matrix_Intern_Task2/
│── backend/                 # Python FastAPI backend
│   ├── password_checker.py   # Main API file (handles password strength check)
│   ├── requirements.txt      # Python dependencies
│── frontend/                # Frontend (HTML, CSS, JavaScript)
│   ├── index.html            # Main webpage
│   ├── style.css             # Styling for the UI
│   ├── script.js             # Frontend logic (API calls)
│── node_modules/             # Node.js dependencies
│── server.js                 # Node.js Express server (connects frontend to FastAPI)
│── package.json              # Node.js dependencies
│── README.md                 # Project documentation
│── .gitignore
```

---

## 🛠️ Installation & Setup  

### 🔹 Step 1: Clone the Repository  
```sh
git clone https://github.com/Ronitraj07/Brainwave_Matrix_Intern_Task2.git
cd Brainwave_Matrix_Intern_Task2
```

### 🔹 Step 2: Set Up the Backend  
```sh
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # macOS/Linux
pip install -r requirements.txt
uvicorn password_checker:app --host 0.0.0.0 --port 5000 --reload
```

### 🔹 Step 3: Set Up the Frontend  
```sh
cd ../frontend
npm install
node server.js
```

🚀 **Now open** `http://localhost:8080` **in your browser!**  

---

## 👨‍💻 Tech Stack Used  
🟢 **Frontend:** HTML, CSS, JavaScript, Node.js  
🔵 **Backend:** FastAPI (Python)  
⚡ **Server:** Express.js  

---

## 📜 License  
MIT License - Feel free to use and contribute!  
