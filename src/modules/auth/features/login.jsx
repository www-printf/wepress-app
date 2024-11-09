// Login.jsx
import React, { useState } from "react";
import {useAuth} from "../../../hooks/useAuth";
import logo from "../../../assets/icons/icon_printer_black.png";
import { Link } from "react-router-dom";
import { ENDPOINTS} from "../../../routes/endPoints";
const Login = () => {
  const { login, isLoggingIn, loginError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm border border-gray-200">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="WePress Logo" className="h-12 w-12 mb-2" />
          <h2 className="text-2xl font-semibold">WePress</h2>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email của bạn"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu của bạn"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={isLoggingIn}
            className="flex items-center justify-center w-full px-4 py-2 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Đăng nhập
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
          {loginError && <p className="text-red-500 text-sm mt-2">{loginError.message}</p>}
        </form>
        <div className="mt-4 text-center">
          <Link to={ENDPOINTS.AUTH.FORGOT_PASSWORD} className="text-sm text-blue-500 hover:underline">
            Quên mật khẩu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
