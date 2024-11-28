import React from 'react';
import icon_drive from '../../../assets/icons/icon_drive.png';
// import GoogleDrive from './GoogleDrive';
// import SaveDriveFilesToLibrary from './SaveDriveFilesToLibrary';
// import Signinbutton from './Signinbutton';
import Drive from './Drive';
const UploadFromDrive = ({ handleFile, onClose }) => {
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

      <Drive handleFile={handleFile}></Drive>
    </div>
  );
};

export default UploadFromDrive;
