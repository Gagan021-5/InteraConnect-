import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeClosed, ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();



const registeruser = (data) => {
  const { name, email, password } = data;
  const getdata = JSON.parse(localStorage.getItem("user"));

  if (getdata && getdata.email === email) {
    toast.error("User already exists 😥");
    return;
  }

  localStorage.setItem("user", JSON.stringify({ name, password, email }));
  toast.success("Account created successfully 🎉");
  navigate("/dashboard");
};

  const navigate = useNavigate();
  const password = watch("password");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="bg-zinc-800/90 p-8 rounded-2xl shadow-2xl w-full max-w-sm backdrop-blur-md relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 cursor-pointer text-blue-800 "
          title="Back"
        >
          <ArrowLeft size={20} />
        </button>

        <h2 className="text-3xl text-white font-bold text-center mb-6">
          Create an Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(registeruser)}>
          <div>
            <label className="text-sm text-gray-300 block mb-1">
              Full Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">Name is required</p>
            )}
          </div>

          <div>
            <label className="text-sm text-gray-300 block mb-1">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="jane@example.com"
              className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">Email is required</p>
            )}
          </div>

          <div>
            <label className="text-sm text-gray-300 block mb-1">Password</label>
            <div className="relative">
              <input
                {...register("password", { required: true })}
                type={showPass ? "text" : "password"}
                placeholder="Create a password"
                className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
              <span
                className="absolute right-3 top-2.5 text-gray-300 cursor-pointer"
                onClick={() => setShowPass((prev) => !prev)}
              >
                {showPass ? <EyeClosed size={20} /> : <Eye size={20} />}
              </span>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">Password is required</p>
            )}
          </div>

          <div>
            <label className="text-sm text-gray-300 block mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                {...register("confirmPassword", {
                  required: true,
                  validate: (val) =>
                    val === password || "Passwords do not match",
                })}
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm password"
                className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
              <span
                className="absolute right-3 top-2.5 text-gray-300 cursor-pointer"
                onClick={() => setShowConfirm((prev) => !prev)}
              >
                {showConfirm ? <EyeClosed size={20} /> : <Eye size={20} />}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-xs text-red-500 mt-1">
                {errors.confirmPassword.message || "Confirm your password"}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-slate-800  to-slate-900 text-white py-2 rounded-md cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
