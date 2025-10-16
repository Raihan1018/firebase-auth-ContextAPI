import { use } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("User Created");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center px-4">
      <title>Register</title>
      <div className="w-full max-w-md bg-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-white mb-2">
          Create Account
        </h1>
        <p className="text-center text-gray-400 mb-6">
          Join us and start your journey
        </p>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* user name */}
          <div>
            <label className="label-text text-gray-300 mb-1 block">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered w-full bg-gray-800 text-gray-200 placeholder-gray-500 border-gray-700 focus:border-pink-500 focus:outline-none"
              required
            />
          </div>
          {/* email */}
          <div>
            <label className="label-text text-gray-300 mb-1 block px">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="input input-bordered w-full bg-gray-800 text-gray-200 placeholder-gray-500 border-gray-700 focus:border-pink-500 focus:outline-none"
              required
            />
          </div>

          {/* password */}
          <div>
            <label className="label-text text-gray-300 mb-1 block">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="input input-bordered w-full bg-gray-800 text-gray-200 placeholder-gray-500 border-gray-700 focus:border-pink-500 focus:outline-none"
              required
            />
          </div>

          <button className="btn w-full bg-pink-600 hover:bg-pink-700 text-white border-none">
            Register
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
