import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Loginpage from "./components/Loginpage.jsx";
import Signup from "./components/Signup.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Homepage from "./components/Hompage.jsx";
import ProtectRoute from "./components/ProtectRoute.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Loginpage />} />
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectRoute>
              <Dashboard />
            </ProtectRoute>
          }
        ></Route>

        <Route path="/signup" element={<Signup />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-center" autoClose={2500} theme="dark" />
  </StrictMode>
);
