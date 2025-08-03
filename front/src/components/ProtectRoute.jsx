import {  Navigate } from "react-router-dom";

const ProtectRoute = ({children}) => {
   const checklogin = localStorage.getItem("user");
   return checklogin ? children : <Navigate to={"/login"} replace/>;
}

export default ProtectRoute
