import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState, useEffect, useRef } from "react";
const MainLayout = ({ children }) => {
  const [isAuthCardVisible, setIsAuthCardVisible] = useState(false); // Toggle AuthCard visibility
  const [isLoginRequired, setIsLoginRequired] = useState(false); // Track if login prompt is needed
  const mainRef = useRef(null); // To detect clicks outside login button

  // Detect clicks outside of the login button to change the header state
  useEffect(() => {
    const handleClick = (event) => {
      if (
        mainRef.current &&
        !event.target.closest(".login-button") // Ignore clicks on the login button
      ) {
        setIsLoginRequired(true); // Show "Login required" in header
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick); // Cleanup event listener
  }, []);

  // Handle login event to reset the header state
  const handleLogin = () => {
    setIsAuthCardVisible(true); // Show AuthCard
    setIsLoginRequired(false); // Reset header to original state
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onLoginClick={handleLogin} 
        isLoginRequired={isLoginRequired} 
        />
      <main  ref={mainRef} className="flex-grow fl bg-blue-300">{React.cloneElement(children, { isAuthCardVisible, setIsAuthCardVisible })}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
