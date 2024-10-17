import React from "react";
import ico_printer from "../../assets/icons/ico_printer.png";
function Header() {
  return (
    <header className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src={ico_printer} alt="WePress Logo" className="h-10 w-10" />
        <span className="font-bold text-xl">WePress</span>
        <a href="/about" className="text-lg">
          About
        </a>
      </div>

      <a href="/login" className="flex items-center space-x-2">
        <span>Log In</span>
        <i className="fas fa-sign-in-alt"></i>
      </a>
    </header>
  );
}

export default Header;
