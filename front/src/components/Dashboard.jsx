import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [interns, setinterns] = useState([]);

  const handlelogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  useEffect(() => {
    const fromback = async () => {
      try {
        const response = await axios.get(
          "https://interaconnectback-t96q.onrender.com"
        );
        setinterns(response.data);
      } catch (err) {
        console.error("Error fetching interns:", err);
      }
    };
    fromback();
  }, []);

  return (
    <div className="relative p-6 min-h-screen">
      <button
        onClick={handlelogout}
        className="absolute top-6 cursor-pointer right-6 bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
      >
        Logout
      </button>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white/90 mb-2">
          Welcome, {user?.name}
        </h1>
        <p className="text-gray-400">
          Here are your fellow interns' achievements
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {interns.map((emp, index) => (
          <div
            key={index}
            className="bg-slate-800/80 backdrop-blur-md shadow-md rounded-lg p-6 cursor-pointer transition-all ease-in-out duration-200 hover:scale-[1.02] hover:shadow-indigo-800 hover:shadow-lg"
          >
            <h2 className="text-xl text-sky-700 font-bold mb-2">{emp.name}</h2>
            <p className="text-gray-300 mb-1">
              <span className="font-medium">Referral Code:</span>{" "}
              {emp.referalcode}
            </p>
            <p className="text-gray-300 mb-3">
              <span className="font-medium">Total Donations:</span> $
              {emp.totalDonation}
            </p>
            <div>
              <h3 className="font-semibold text-white mb-2">Rewards:</h3>
              <ul className="space-y-1 text-sm text-emerald-400 font-semibold">
                {emp.rewards.map((val, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">🏅</span>
                    {val.reward} – {val.criteria}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
