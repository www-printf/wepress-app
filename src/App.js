import React from "react";
import MainLayout from "./layouts/MainLayout";
import HomeScreen from "./screens/Login/HomeScreen";
import UserInfoPageLayout from "./layouts/UserInfoPageLayout";
import UserInfoPageScreen from "./screens/Login/UserInfoPageScreen";

function App() {
  // return (
  //   <MainLayout>
  //     <HomeScreen />
  //   </MainLayout>
  // );
  return (
    <UserInfoPageLayout>
      <UserInfoPageScreen />
    </UserInfoPageLayout>
  )
}

export default App;
