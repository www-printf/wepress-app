// LandingLayout.js
import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const LandingLayout = ({ children }) => {
  const [isLoginRequired, setIsLoginRequired] = useState(false);

  // Set isLoginRequired to true if clicked outside the login button
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Kiểm tra nếu nhấn bên ngoài nút "Đăng nhập"
      if (!event.target.closest(".login-button")) {
        setIsLoginRequired(true);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLoginClick = () => {
    setIsLoginRequired(false); // Tắt yêu cầu đăng nhập khi nhấn nút "Đăng nhập"
  };

  return (
    <>
      <Header isLoginRequired={isLoginRequired} onLoginClick={handleLoginClick} />
      {children}
      <Footer />
    </>
  );
};

export default LandingLayout;
