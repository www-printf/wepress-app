import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState, useEffect, useRef } from "react";
const LandingLayout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default LandingLayout;
