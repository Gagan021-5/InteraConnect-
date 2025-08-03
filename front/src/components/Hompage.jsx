import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
<div className="min-h-screen flex flex-col items-center justify-center  px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.7, ease: "easeOut" }}
        className="text-7xl max-sm:text-3xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent"
      >
        Welcome to InteraConnect
      </motion.h1>

      <motion.h3
        className="text-4xl max-sm:text-2xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 30 }}
        transition={{ delay:1.2,duration: 1.5, ease: "easeInOut" }}
      >
        Your Gateway to Real world Experience
      </motion.h3>
    </div>
  );
};

export default Homepage;
