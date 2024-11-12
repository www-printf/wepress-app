// LandingLayout.js
import React, { useState, useEffect } from "react";
import HeaderAuthed from "../components/Header/Header_afterlogin";
import Footer from "../components/Footer/Footer";

const HomeLayout = ({ children }) => {
  return (
    <>
      <HeaderAuthed />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
