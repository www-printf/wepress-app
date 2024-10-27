import React from "react";
import UserInfoPageHeader from "../components/Header/UserInfoPageHeader";
import Footer from "../components/Footer/Footer";

const UserInfoPageLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <UserInfoPageHeader />
            {children}
            <Footer />
        </div>
    )
}

export default UserInfoPageLayout;
