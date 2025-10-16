import { use } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        toast.success("Login Successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4">
      <title>Login</title>
      <div className="w-full max-w-md bg-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-white mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-gray-400 mb-6">
          Login to continue your journey
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="label-text text-gray-300 mb-1 block">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-gray-800 text-gray-200 placeholder-gray-500 border-gray-700 focus:border-indigo-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="label-text text-gray-300 mb-1 block">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full bg-gray-800 text-gray-200 placeholder-gray-500 border-gray-700 focus:border-indigo-500 focus:outline-none"
              required
            />
            <div className="text-right mt-1">
              <a href="#" className="text-sm text-indigo-400 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          <button className="btn w-full bg-indigo-600 hover:bg-indigo-700 text-white border-none">
            Login
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-400 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
