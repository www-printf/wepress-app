import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow fl bg-blue-300">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
