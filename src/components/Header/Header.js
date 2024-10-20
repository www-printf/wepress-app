import React from "react";
import ico_printer from "../../assets/icons/ico_printer.png";
import icon_login from "../../assets/icons/icon_login.png";
function Header({ isLoginRequired, onLoginClick }){
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src={ico_printer} alt="WePress Logo" className="h-10 w-10" />
        <span className="font-bold text-xl">WePress</span>
        <a href="/about" className="text-lg">
          About
        </a>
      </div>
      
      {isLoginRequired ? (
        <div className="bg-orange-500 text-white rounded-[50px] flex items-center w-[350px] h-[50px]">
          <span className="ml-4">To use this feature, you must</span>
          <button
            className="login-button ml-2 flex items-center space-x-2"
            onClick={onLoginClick} // Trigger login handler
          >
            <div className="bg-blue-300 text-white rounded-[50px] flex items-center w-[100px] h-[35px] m-2">
              <span className="ml-4">Log In</span>
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
          <span>Log In</span>
          <i className="fas fa-sign-in-alt"></i>
          <img src={icon_login} alt="icon_login" className="h-5 w-5" />
        </button>
      )}
    </header>
  );
}

export default Header;
