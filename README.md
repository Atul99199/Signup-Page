# 🚀 Signup Page (MERN Authentication App)

A full-stack authentication application built using the MERN stack.  
It allows users to sign up, log in, and access protected routes with proper authentication handling.

---

## 🌐 Live Demo


Link: https://signup-page-inky.vercel.app/login  



---

## ✨ Features

- 🔐 User Signup & Login
- 🔑 JWT-based Authentication
- 🛡 Protected Routes (Private Routing)
- 🔄 Persistent Login using localStorage
- 🚪 Logout functionality
- 📱 Responsive UI
- ⚡ Toast notifications for feedback

---

## 🛠 Tech Stack

### Frontend:
- React.js
- React Router DOM
- React Toastify
- CSS

### Backend:
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT (JSON Web Token)
- Joi (Validation)

---

## 📂 Project Structure
```

Signup-Page/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── Home.jsx
│   │   ├── App.jsx
│   │   └── utils/
│
├── backend/
│   ├── Routes/
│   │   └── AuthRouter.js
│   ├── middleware/
│   │   └── AuthValidation.js
│   ├── Models/
│   ├── index.js
│   └── .env
```
---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```
git clone https://github.com/Atul99199/Signup-Page 
```

---

### 2️⃣ Setup Backend
```
cd backend  
npm install  
```

Create a `.env` file:
```

MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  
```
Run backend:
```
npm start  
```
---

### 3️⃣ Setup Frontend
```
cd frontend  
npm install  
npm run dev  
```
---

## 🔐 Authentication Flow

1. User signs up → Data stored in MongoDB  
2. User logs in → JWT token generated  
3. Token stored in localStorage  
4. Protected routes check token  
5. Logout clears token  

---

## 🚀 Deployment

- Frontend deployed on Vercel  
- Backend deployed on Render / Vercel (serverless)  

---


## 🤝 Contributing

Feel free to fork this repo and improve it!

---

## 📧 Contact

Atul Kumar  
Email: atulald97@gmail.com  
GitHub: https://github.com/Atul99199  

---

## ⭐ Show your support

If you like this project, give it a ⭐ on GitHub!