
import React, { useState } from "react";
import logo from "../../../assets/icons/icon_printer_black.png"; // Đảm bảo đường dẫn chính xác
import { ENDPOINTS } from "../../../routes/endPoints";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý yêu cầu đặt lại mật khẩu tại đây
    console.log("Email for password reset:", email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm border border-gray-200">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="WePress Logo" className="h-12 w-12 mb-2" />
          <h2 className="text-2xl font-semibold">WePress</h2>
        </div>
        <h3 className="text-xl font-bold text-center mb-4">Đặt lại mật khẩu</h3>
        <p className="text-center text-white bg-blue-500 rounded-md py-2 px-4 mb-6">
          Chúng tôi sẽ gửi cho bạn đường link đặt lại mật khẩu vào email bạn nhập bên dưới
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <button
            type="submit"
            className="w-full px-4 py-2 mt-2 text-white bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Đặt lại mật khẩu
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/login" className="text-sm text-blue-500 hover:underline">
            Đăng nhập
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
