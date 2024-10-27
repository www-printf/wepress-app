import React from "react";
import UserInfoPageSideBar from "./UserInfoPageSideBar";
import UserInfoPageContent31 from "./UserInfoPageContent31";
import UserInfoPageContent32 from "./UserInfoPageContent32";
import UserInfoPageContent33 from "./UserInfoPageContent33";
import UserInfoPageContent34 from "./UserInfoPageContent34";

function UserInfoPage3({ isChooseDocument, setIsChooseDocument }) {
    return (
        <div className="UserInformationPage w-full h-screen bg-[#64b5f6] flex flex-row items-center justify-center">
            <div className="w-1/4 h-screen bg-[#64b5f6] border-black border-r-[1px] flex flex-col justify-center space-y-2">
                <UserInfoPageSideBar isChooseDocument={isChooseDocument} setIsChooseDocument={setIsChooseDocument} />
            </div>
            <div className="w-3/4 h-screen bg-[#64b5f6] flex flex-col items-center justify-around">
                {isChooseDocument === 31 && <UserInfoPageContent31 />}
                {isChooseDocument === 32 && <UserInfoPageContent32 />}
                {isChooseDocument === 33 && <UserInfoPageContent33 />}
                {isChooseDocument === 34 && <UserInfoPageContent34 />}
            </div>
        </div>
    )
}

export default UserInfoPage3;
