import React from "react";
import InputField from "../InputField/InputField"
import icon_camera from "../../assets/icons/icon_camera.png"

function UserInfoPage1() {
    return (
        <div className="UserInformationPage w-full h-screen bg-[#64b5f6] flex flex-col items-center">
            <div className="ThNgTinCNhN text-center text-black text-[34px] font-bold font-['Merriweather'] mt-6">Thông tin cá nhân</div>
            <div className="relative flex justify-center items-start mt-8">
                <div className="Group2 w-[189px] h-[279px] items-center mr-8">
                    <img className="Rectangle1 w-[180px] h-[270px] bg-[#d9d9d9] border border-black" />
                    <div className="relative">
                        <div className="Group1 w-[42px] h-[42px] -bottom-3 -right-2 absolute">
                            <div className="Ellipse1 w-[42px] h-[42px] bg-[#d9d9d9] rounded-full border border-black" />
                            <img src={icon_camera} className="Camera w-7 h-7 px-[1.17px] py-[3.50px] left-[7px] top-[7px] absolute justify-center items-center inline-flex" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-start gap-8">
                    <div className="flex flex-col gap-4">
                        <InputField
                            label="Mã số sinh viên"
                            value="Value"
                        />
                        <InputField
                            label="Ngày sinh"
                            value="Value"
                        />
                        <InputField
                            label="Email sinh viên"
                            value="Value"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <InputField
                            label="Họ và tên đệm"
                            value="Value"
                        />
                        <InputField
                            label="Giới tính"
                            value="Value"
                        />
                        <InputField
                            label="Email liên lạc"
                            value="Value"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <InputField
                            label="Tên"
                            value="Value"
                        />
                        <InputField
                            label="Khoa"
                            value="Value"
                        />
                        <InputField
                            label="Số điện thoại"
                            value="Value"
                        />
                    </div>
                </div>
                <div className="RectangleButton w-[200px] h-[50px] p-2.5 bg-[#2196f3] rounded-lg border border-[#fff5ea] justify-center items-center gap-2.5 inline-flex absolute right-0 bottom-0">
                    <div className="Frame35 grow shrink basis-0 h-7 justify-center items-center gap-2.5 flex">
                        <div className="Button text-center text-neutral-100 text-[18px] font-normal font-['Roboto'] leading-7">Cập nhật thông tin</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfoPage1;
