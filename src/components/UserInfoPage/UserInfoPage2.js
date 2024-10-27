import React from "react";
import icon_book from "../../assets/icons/icon_book.png"
import icon_upload from "../../assets/icons/icon_upload.png"
import icon_link from "../../assets/icons/icon_link.png"

function UserInfoPage2({ setIsChooseDocument }) {
    return (
        <div className="UserInformationPage w-full h-screen bg-[#64b5f6] flex items-center justify-center">
            <div className="flex space-x-20">
                <button
                    className="Group w-[200px] h-[300px] bg-[#bbdefb] flex flex-col items-center justify-center border-blue-500"
                    onClick={() => {
                        setIsChooseDocument(31);
                    }}
                >
                    <img src={icon_book} className="icon mb-2" />
                    <div className="text-center text-black text-[18px] font-normal font-['Roboto']">Thư viện</div>
                </button>
                <button
                    className="Group w-[200px] h-[300px] bg-[#bbdefb] flex flex-col items-center justify-center"
                    onClick={() => {
                        setIsChooseDocument(32);
                    }}
                >
                    <img src={icon_link} className="icon mb-2" />
                    <div className="text-center text-black text-[18px] font-normal font-['Roboto']">
                        Kết nối với Google Drive
                    </div>
                </button>
                <button
                    className="Group w-[200px] h-[300px] bg-[#bbdefb] flex flex-col items-center justify-center"
                    onClick={() => {
                        setIsChooseDocument(33);
                    }}
                >
                    <img src={icon_upload} className="icon mb-2" />
                    <div className="text-center text-black text-[18px] font-normal font-['Roboto']">Tải tệp lên</div>
                </button>
                <button
                    className="Group w-[200px] h-[300px] bg-[#bbdefb] flex flex-col items-center justify-center"
                    onClick={() => {
                        setIsChooseDocument(34);
                    }}
                >
                    <div className="icon mb-2">📄</div>
                    <div className="text-center text-black text-[18px] font-normal font-['Roboto']">Tài liệu đã in</div>
                </button>
            </div>
        </div>
    );
}

export default UserInfoPage2;
