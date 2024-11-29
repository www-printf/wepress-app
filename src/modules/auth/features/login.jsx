// Login.jsx
import React, { useState, useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
import logo from "../../../assets/icons/icon_printer_black.png";
import { Link, useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../../../routes/endPoints";
import LoginForm from "../components/form";
import request from "../../../utils/request";

const Login = () => {
  const { login, isLoggingIn, loginError, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    login({ email, password });
  };


  useEffect(() => {
    // Kiểm tra nếu người dùng đã xác thực trước khi thực hiện fetch và logic điều hướng
    if (!isAuthenticated) return; // Nếu chưa đăng nhập, không làm gì cả

    const fetchUserProfile = async () => {
      const response = await request.get("/auth/me");
      console.log(response.role);
      let role = "user"; // Đặt giá trị mặc định cho role

      // Kiểm tra nếu role của người dùng là "spso"
      if (["spso"].includes(response.role)) {
        role = "spso";
      }

      // Điều hướng sau khi xác định vai trò người dùng
      if (role === "user") {
        navigate(ENDPOINTS.USER.HOME); // Chuyển hướng đến trang chủ của người dùng
      } else if (role === "spso") {
        navigate(ENDPOINTS.ADMIN.DASHBOARD); // Chuyển hướng đến trang dashboard của admin
      }
    };

    // Gọi hàm fetchUserProfile để lấy thông tin người dùng và điều hướng
    fetchUserProfile();
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm border border-gray-200">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="WePress Logo" className="h-12 w-12 mb-2" />
          <h2 className="text-2xl font-semibold">WePress</h2>
        </div>

        {/* Sử dụng LoginForm */}
        <LoginForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogin={handleLogin}
          isLoggingIn={isLoggingIn}
          loginError={loginError}
        />

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
