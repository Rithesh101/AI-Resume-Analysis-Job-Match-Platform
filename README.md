#  AI-Resume-Analysis-Job-Match-Platform

An AI-powered full-stack MERN application that analyzes resumes, detects skill gaps, and generates personalized learning roadmaps based on job roles.

Built with a scalable backend architecture and modern SaaS-style frontend dashboard.

---

##  Problem Statement

Job seekers often struggle to understand:

- Whether their resume matches a job role
- Which skills are they missing
- How much they align with industry requirements

AI Career Compass solves this by:

✔ Extracting skills from resumes  
✔ Matching them against required job skills  
✔ Calculating match percentage  
✔ Identifying missing skills  
✔ Generating a personalized learning roadmap  

---

##  Tech Stack

### 🔹 Frontend
- React (Vite)
- React Router
- Tailwind CSS
- Axios
- Context API (Authentication)

### 🔹 Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer (File Upload)
- PDF Parsing

### 🔹 AI Layer (Current Version)
- Rule-based skill extraction
- Structured skill gap matching engine
- Roadmap generation logic

Architecture supports future upgrade to:
- LLM-based extraction
- Embedding-based semantic matching
- Vector database integration

---

##  Features

###  Authentication
- JWT-based login & register
- Protected routes
- Persistent login via localStorage

###  Resume Analysis
- Upload resume (PDF)
- Extract resume text
- Detect technical skills
- Match against job role
- Calculate match percentage

###  Skill Gap Analysis
- Matched skills (green tags)
- Missing skills (red tags)
- Animated progress bar
- Color-coded score badge

###  Personalized Roadmap
- Auto-generated weekly learning plan
- Expandable roadmap view

###  Analysis History
- Stored in MongoDB
- User-specific dashboard
- Sorted by latest analysis

---
### 1. Clone the Repository

```bash
git clone https://github.com/Rithesh101/AI-Resume-Analysis-Job-Match-Platform
cd AI-Resume-Analysis-Job-Match-Platform
```

### 2. Backend Setup

```bash
# Navigate to the backend directory
cd backend
npm install

# Create a .env file and add your API key
touch .env
LLM_API_KEY=api_key
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 3. Frontend Setup

```bash
# Navigate to the frontend directory from the root
cd frontend
npm install
```

### 4. Running the Application

1.  **Start the Backend Server:** In your backend terminal, run:
    ```bash
    npm run dev
    ```
    The server will be running at `http://127.0.0.1:5000`.

2.  **Start the Frontend Server:** Open a **new terminal** and navigate to the `frontend` directory. Run:
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173`.

---

##  Contact & Connect

**Rithesh Vanjari**  
B.Tech(AI&ML) | Full-Stack + AI 

- 💼 **LinkedIn:** [linkedin.com/in/rithesh-vanjari/](https://linkedin.com/in/rvlin) 

---

<div align="center">
  
**⭐ If this project helped you, consider starring it on GitHub!**

</div>
