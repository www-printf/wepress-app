import React from "react";
import Header1 from "./Header_afterlogin";
import Header2 from "./Header_beforelogin";
import { useAuth } from "../../hooks/useAuth";
function Header({ isLoginRequired, onLoginClick }){
  const { isAuthenticated } = useAuth(); // sử dụng useAuth để kiểm tra đăng nhập

    return (
        <>
            {isAuthenticated ? <Header1  /> : <Header2 isLoginRequired={isLoginRequired} onLoginClick={onLoginClick}/>}
        </>
    );
}

export default Header;
