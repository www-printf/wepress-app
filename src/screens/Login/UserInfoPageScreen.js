import React, { useState } from "react";
import UserInfoPage1 from "../../components/UserInfoPage/UserInfoPage1";
import UserInfoPage2 from "../../components/UserInfoPage/UserInfoPage2";
import UserInfoPage3 from "../../components/UserInfoPage/UserInfoPage3";

function UserInfoPageScreen() {

    const [isChooseDocument, setIsChooseDocument] = useState(2);

    return (
        // <UserInfoPage1 />
        <React.Fragment>
            {isChooseDocument === 2 && <UserInfoPage2 setIsChooseDocument={setIsChooseDocument} />}
            {(isChooseDocument === 31 || isChooseDocument === 32 || isChooseDocument === 33 || isChooseDocument === 34) && <UserInfoPage3 isChooseDocument={isChooseDocument} setIsChooseDocument={setIsChooseDocument} />}
        </React.Fragment>
    )
}

export default UserInfoPageScreen;
