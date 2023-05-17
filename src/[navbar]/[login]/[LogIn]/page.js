import React from "react";
const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-6 py-12 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none hover:bg-indigo-600"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
