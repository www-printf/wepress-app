import React from 'react';
import icon_drive from '../../../assets/icons/icon_drive.png';

const UploadFromDrive = ({ onConnect, onClose }) => {
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
                Chọn file từ Google Drive
            </h1>

            {/* Spacer bên phải để giữ tiêu đề ở giữa */}
            <div className="w-12 ml-auto"></div>
        </div>

      {/* Icon Google Drive */}
      <img src={icon_drive} alt="Icon Google Drive" className="w-20 h-20 mb-6 mt-[90px]" />

      {/* Thông báo */}
      <p className="text-black text-lg text-center mb-4">
        Vui lòng xác thực với Google Drive để chọn file
      </p>

      {/* Nút Kết nối tới Google Drive */}
      <button
        onClick={onConnect}
        className="bg-white text-black border-2 border-gray-300 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-200"
      >
        Kết nối tới Google Drive
      </button>
    </div>
  );
};

export default UploadFromDrive;
