import React from "react";

function UserInfoPageSideBar({ isChooseDocument, setIsChooseDocument }) {
    return (
        <React.Fragment>
            <div className="ChNTILiU w-full h-10 text-center text-black text-xl font-bold font-['Merriweather']">Chọn tài liệu</div>
            <div
                className={`Rectangle19 w-full h-[101px] border border-black/20 flex items-center justify-center ${isChooseDocument === 31 ? 'bg-[#bbdefb]/50' : 'bg-[#bbdefb]'}`}
                onClick={() => {
                    setIsChooseDocument(31);
                }}
            >
                <div className="text-center text-black text-[22px] font-normal font-['Roboto']">Thư viện</div>
            </div>
            <div
                className={`Rectangle19 w-full h-[101px] border border-black/20 flex items-center justify-center ${isChooseDocument === 32 ? 'bg-[#bbdefb]/50' : 'bg-[#bbdefb]'}`}
                onClick={() => {
                    setIsChooseDocument(32);
                }}
            >
                <div className="text-center text-black text-[22px] font-normal font-['Roboto']">Link</div>
            </div>
            <div
                className={`Rectangle19 w-full h-[101px] border border-black/20 flex items-center justify-center ${isChooseDocument === 33 ? 'bg-[#bbdefb]/50' : 'bg-[#bbdefb]'}`}
                onClick={() => {
                    setIsChooseDocument(33);
                }}
            >
                <div className="text-center text-black text-[22px] font-normal font-['Roboto']">Tải tệp lên</div>
            </div>
            <div
                className={`Rectangle19 w-full h-[101px] border border-black/20 flex items-center justify-center ${isChooseDocument === 34 ? 'bg-[#bbdefb]/50' : 'bg-[#bbdefb]'}`}
                onClick={() => {
                    setIsChooseDocument(34);
                }}
            >
                <div className="text-center text-black text-[22px] font-normal font-['Roboto']">Tài liệu đã in</div>
            </div>
        </React.Fragment>
    )
}

export default UserInfoPageSideBar;
