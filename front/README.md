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
> ![Homepage](./screenshots/homepage.png)

> Login & Signup:
> ![Login](./screenshots/login.png)
> ![Signup](./screenshots/signup.png)

> Intern Dashboard:
> ![Dashboard](./screenshots/dashboard.png)

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

## 🙌 Credits

* Designed & Developed by **Gagan Singh**
* Badge Icons: Emoji Unicode
* Fonts: Tailwind's default Inter

---

## 📄 License

MIT License. Free to use and customize.

---

## 🌍 Live Preview (Optional)

> Coming Soon on Netlify/Vercel...

---

## 📬 Contact

Need help or want to collaborate?

* Email: `gagan@example.com`
* GitHub: [@your-username](https://github.com/Gagan021-5)

---
