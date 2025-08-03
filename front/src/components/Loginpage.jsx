import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Loginpage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

const loginuser = (data) => {
  const { email, password } = data;
  const getval = JSON.parse(localStorage.getItem("user"));

  if (!getval) {
    toast.error("User not found 😥. Try signing up.");
    return;
  }

  if (getval.email === email && getval.password === password) {
    toast.success("Login successful ✅");
    navigate("/dashboard");
  } else {
    toast.error("Invalid credentials !");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="bg-zinc-800/90 p-8 rounded-2xl shadow-2xl w-full max-w-sm backdrop-blur-md">
        <h2 className="text-3xl text-white font-bold text-center mb-6">
          Intern Portal Login
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit(loginuser)}>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-500 bg-transparent text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600 transition"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">Email is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-500 bg-transparent text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600 transition"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">Password is required</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2  cursor-pointer rounded-md text-white bg-gradient-to-r from-slate-800  to-slate-900 "
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-5 text-gray-400">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-blue-700 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Loginpage;
