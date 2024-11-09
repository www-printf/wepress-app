import React from "react";
import ico_printer from "../../assets/icons/icon_printer_black.png";
import icon_login from "../../assets/icons/icon_login.png";
import { Link } from "react-router-dom";
import { ENDPOINTS } from "../../routes/endPoints";
function Header({ isLoginRequired, onLoginClick }){
  return (
    <header className="bg-white text-black p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src={ico_printer} alt="WePress Logo" className="h-10 w-10" />
        <span className="font-bold text-xl">WePress</span>
        <Link to="/about" className="text-lg">
          Giới thiệu
        </Link>
      </div>
      
      {isLoginRequired ? (
        <div className="bg-orange-500 text-white rounded-[50px] flex items-center w-[480px] h-[50px]">
          <span className="ml-4">Để sử dụng tính năng này, bạn vui lòng</span>
          <button
            className="login-button ml-2 flex items-center space-x-2"
            onClick={onLoginClick} // Trigger login handler
          >
            <div className="bg-white text-black rounded-[50px] flex items-center w-[150px] h-[35px] m-2">
              <Link to={ENDPOINTS.AUTH.LOGIN} className="ml-4">Đăng nhập</Link>
              <i className="fas fa-sign-in-alt"></i>
              <img src={icon_login} alt="icon_login" className="h-5 w-5 ml-3" />
            </div>
              
          </button>
        </div>
      ) : (
        <button
          onClick={onLoginClick} // Call the handler from props
          className=" login-button flex items-center space-x-2"
        >
          <Link to={ENDPOINTS.AUTH.LOGIN} className="ml-4">Đăng nhập</Link>
          <i className="fas fa-sign-in-alt"></i>
          <img src={icon_login} alt="icon_login" className="h-5 w-5" />
        </button>
      )}
    </header>
  );
}

export default Header;
