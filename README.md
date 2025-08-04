# 🌐 InteraConnect

**InteraConnect** is a polished intern dashboard portal built with React, Express.js, and Tailwind CSS. It features real-time intern data display, local user authentication (with `localStorage`), and rewards visualization. This is a compact but powerful app ideal for internship assessments or learning purposes.

---

## 🚀 Tech Stack

### Frontend:

* ⚛️ React + Vite
* 💅 Tailwind CSS
* 🔄 React Router v6
* 🪄 Framer Motion (for page transitions)
* 🔔 React Toastify (for notifications)

### Backend:

* 🧠 Express.js
* 🗄 Dummy Data API (local)
* 🔓 CORS-enabled JSON endpoints

---

## ✨ Features

### 👤 Authentication

* Signup & Login using localStorage
* Form validation using React Hook Form
* Password visibility toggles
* ProtectedRoute for dashboard access

### 🧑‍💻 Intern Dashboard

* Dynamic intern cards from backend (dummy)
* Referral Code & Total Donations
* Reward badge list (🥇 🥈 🥉)
* Responsive logout button

### 🌟 UI/UX

* Dark-mode inspired theme
* Glassmorphic login/signup boxes
* Gradient buttons and clean typography
* Subtle hover & animation effects

---

## 📸 Screenshots

> Homepage (Auto Redirect to Login):
> ![Homepage](https://i.postimg.cc/htm7TyNs/Screenshot-2025-08-04-211724.png)

> Login & Signup:
> ![Login](https://i.postimg.cc/brMs2kT4/Screenshot-2025-08-04-211855.png)
> ![Signup](https://i.postimg.cc/QxTMyBSx/Screenshot-2025-08-04-211933.png)

> Intern Dashboard:
> ![Dashboard](https://i.postimg.cc/zvmfz8G1/Screenshot-2025-08-04-212105.png)

---

## 🧪 Getting Started

### 1. Clone the repo:

```bash
git clone https://github.com/your-username/interaconnect.git
cd interaconnect
```

### 2. Install dependencies:

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

### 3. Run the app:

```bash
# Start backend (port 3000)
npm run dev

# Start frontend (port 5173)
npm run dev
```

---

## 🔐 Folder Structure (Simplified)

```
interaconnect/
├── client/             # React Frontend
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── server/             # Express Backend
│   ├── routers/userroute.js
│   ├── utils/dummydata.js
│   └── index.js
```

---

## 📦 API Overview

> Base URL: `http://localhost:3000`

### `GET /intern/dashboard`

* Returns a list of intern objects with:

```json
{
  "name": "John Doe",
  "referalcode": "john2025",
  "totalDonation": 3500,
  "rewards": [
    { "reward": "Gold Badge", "criteria": "Raised $5000" },
    ...
  ]
}
```

---

## 📌 Notes

* This app does not use databases (local only)
* Easy to plug in real DB (MongoDB, PostgreSQL) later
* Designed for frontend polish & integration demo

---

## Made By

* Designed & Developed by **Gagan Singh**
* Badge Icons: Emoji Unicode
* Fonts: Tailwind's default Inter


---

## 🌍 Live Preview 
https://interaconnectfrontend.onrender.com/

---

## 📬 Contact

* GitHub: [@Gagan021-5](https://github.com/Gagan021-5)

---
