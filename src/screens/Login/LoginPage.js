import React from "react";
import MainLayout from "../../layouts/MainLayout";
import AuthCard from "../../components/Authentication Card/Authentication";
const LoginPage = () => {
  return (
    <MainLayout>
      <div className="flex-grow justify-center items-center bg-blue-300 ">
        <AuthCard />
      </div>
    </MainLayout>
  );
};

export default LoginPage;
