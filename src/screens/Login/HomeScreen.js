import React from "react";
import AuthCard from "../../components/Authentication Card/Authentication";
import Landing from "../../components/Landing/Landing_unauthed";
//import Header from "../../components/Header/Header"; 
const HomeScreen = ({ isAuthCardVisible, setIsAuthCardVisible }) => {
  return (
    <div className="flex justify-center items-center h-full">
      {isAuthCardVisible ? <AuthCard /> : <Landing />}
    </div>
  );
};

export default HomeScreen;
