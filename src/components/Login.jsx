import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser, signInWithGoogle, user } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(user);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        e.target.reset();
        navigate(location.state || "/");
        toast.success("Login Successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
        toast.success("Google Login Successful");
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

        {user ? (
          // 🧩 User Info Card
          <div className="flex flex-col items-center justify-center text-center bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 shadow-2xl transition-transform duration-300 hover:scale-105">
            <div className="relative">
              <img
                className="rounded-full w-28 h-28 object-cover border-4 border-indigo-500 shadow-lg"
                src={
                  user?.photoURL ||
                  "https://img.icons8.com/?size=100&id=22396&format=png&color=000000"
                }
                alt="User Avatar"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></span>
            </div>

            <h2 className="mt-4 text-2xl font-semibold text-white">
              {user?.displayName || "User"}
            </h2>
            <p className="text-gray-400 text-sm">
              {user?.email || "No Email Provided"}
            </p>

            <div className="mt-6 w-full border-t border-gray-700 pt-4 flex flex-col gap-3">
              <button
                onClick={() => navigate("/")}
                className="btn bg-gray-800 hover:bg-gray-700 text-gray-200 w-full border-none"
              >
                Go to Home
              </button>
            </div>
          </div>
        ) : (
          // 🧠 Login Form
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="label-text text-gray-300 mb-1 block">
                Email
              </label>
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

            {/* 🔹 Google Sign-In */}
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="w-full btn bg-white text-black border-[#e5e5e5] hover:bg-gray-100"
            >
              <svg
                aria-label="Google logo"
                width="18"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="mr-2"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </form>
        )}

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
