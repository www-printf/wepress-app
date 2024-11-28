import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import icon_upload from "../../../assets/icons/icon_upload.png";
import icon_up from "../../../assets/icons/icon_up.png";
import Dropdown from '../components/DropDown';
import useDropdown from '../hook/useDropdown';
import useFileHandler from '../hook/useFileHandler';
import { ENDPOINTS } from '../../../routes/endPoints';
import { useFileUpload } from '../../../hooks/useFileUpload';

const PrintDocument = () => {
  const {
    isOpen,
    toggleDropdown,
    inputType,
    setInputType,
    onSelect,
  } = useDropdown();

  const { uploadFiletosever } = useFileUpload();
  const {
    uploadedFile,
    handleFileFromDevice,
    handleFileFromLink,
    handleFileFromGoogleDrive,
  } = useFileHandler();

  const navigate = useNavigate();

  useEffect(() => {
    const uploadFile = async () => {
      if (uploadedFile) {
        try {
          // Gọi hàm upload tệp
          const response = await uploadFiletosever(uploadedFile);
          console.log("File uploaded successfully", response);
          // Điều hướng đến trang chỉnh sửa sau khi upload thành công
          navigate(ENDPOINTS.USER.EDITDOCUMENT);
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      }
    };

    uploadFile();
  }, [uploadedFile, navigate, uploadFiletosever]);

  const handleLinkSubmit = (link) => {
    handleFileFromLink(link);
    setInputType(''); // Đặt lại trạng thái input
  };

  const handleDriveSubmit = (googleDriveData) => {
    handleFileFromGoogleDrive(googleDriveData);
    setInputType(''); // Đặt lại trạng thái input
  };

  return (
    <div className="flex justify-center h-[864px] bg-gray-100">
      <div className="text-center mt-[100px]">
        <h1 className="text-4xl font-semibold text-black mb-[100px]">In tài liệu</h1>

        <div className="p-10 bg-white relative w-[1100px] h-[300px] rounded-lg shadow-md">
          <div className="flex flex-col bg-gray-50 items-center border-2 border-dashed border-black rounded-lg h-full justify-center">
            <img src={icon_upload} alt="upload" className="w-[80px] mb-[20px] filter invert" />

            <button
              onClick={toggleDropdown}
              className="flex items-center justify-center bg-white border border-gray-300 rounded-lg py-2 px-4 cursor-pointer hover:bg-gray-300 hover:text-white transition-colors duration-300 shadow-sm"
            >
              <img src={icon_up} alt="up" className="w-[20px] mr-2" />
              Chọn tài liệu
            </button>

            <Dropdown
              isOpen={isOpen}
              onSelect={(type) => {
                if (type === 'device') {
                  document.getElementById('fileInput').click();
                } else if (type === 'link') {
                  setInputType('link');
                } else if (type === 'googleDrive') {
                  setInputType('googleDrive');
                }
              }}
              inputType={inputType}
              link={''}
              setLink={(link) => handleLinkSubmit(link)}
              handleFileFromDevice={handleFileFromDevice}
              handleLinkSubmit={handleLinkSubmit}
              handleGoogleDriveSubmit={handleDriveSubmit}
            />
            <span className="text-gray-600 mt-2">hoặc kéo thả tài liệu vào đây</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintDocument;
