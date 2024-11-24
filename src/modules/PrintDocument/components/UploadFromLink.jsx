import React, { useState } from 'react';
import icon_link from '../../../assets/icons/icon_link.png';
import icon_up from '../../../assets/icons/icon_up.png';
import GoogleDrive from './GoogleDrive';
const UploadFromLink = ({ link, setLink, handleLinkSubmit, onClose }) => {
  const handleInputChange = (e) => {
    setLink(e.target.value);
  };

  return (
    <div className="flex flex-col items-center bg-white  rounded-lg shadow-2xl w-full max-w-[800px] h-full max-h-[500px] relative">
        {/* Nút Hoàn thành */}
        <div className="w-full border-b-2 border-gray-200 flex items-center justify-center mb-6 h-[50px] relative">
            {/* Nút Hoàn thành nằm ở góc trái */}
            <button
                onClick={onClose}
                className="text-blue-500 text-lg font-medium hover:underline ml-3 mr-auto"
            >
                Hoàn thành
            </button>

            {/* Tiêu đề căn giữa */}
            <h1 className="text-3xl font-semibold text-gray-800 mx-auto">
                Tải file lên từ đường dẫn
            </h1>

            {/* Spacer bên phải để giữ tiêu đề ở giữa */}
            <div className="w-12 ml-auto"></div>
        </div>

        
            {/* Icon liên kết */}
            <img src={icon_link} alt="Icon Link" className="w-20 h-20 mt-[90px] mb-[30px]" />

            {/* Input URL */}
            <input
                type="text"
                className="w-3/4 p-2 border border-black rounded-lg focus:outline-none focus:ring focus:ring-blue-200 mb-6 text-lg "
                placeholder="Nhập URL để tải file lên"
                value={link}
                onChange={handleInputChange}
            />

            {/* Nút Tải file lên */}
            {/* <button
                onClick={handleLinkSubmit}
                className="flex items-center justify-center w-1/4 bg-white text-black py-2 rounded-lg hover:bg-gray-300 transition duration-200 text-sm font-medium border-2 border-gray-200"
            >
                <img src={icon_up} alt="Icon Up" className="w-5 h-5 mr-2" />
                Tải file lên
            </button> */}
            <GoogleDrive></GoogleDrive>
    </div>
  );
};

export default UploadFromLink;
