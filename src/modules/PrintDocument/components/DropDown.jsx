import React, { useState } from 'react';
import UploadFromLink from './UploadFromLink';
import UploadFromDrive from './UploadFromDrive';
import { ENDPOINTS } from '../../../routes/endPoints';
import { Link } from 'react-router-dom';
const Dropdown = ({
  isOpen,
  onSelect,
  inputType,
  handleFileFromDevice,
  handleFileFromLink,
  handleGoogleDriveSubmit,
}) => {
  const [link, setLink] = useState('');
  const [showUploadFromLink, setShowUploadFromLink] = useState(false);
  const [showUploadFromDrive, setShowUploadFromDrive] = useState(false);

  const handleSelect = (type) => {
    onSelect(type);

    if (type === 'link') {
      setShowUploadFromLink(true);
    } else if (type === 'googleDrive') {
      setShowUploadFromDrive(true);
    }
  };

  const handleLinkSubmit = () => {
    handleFileFromLink(link);
    setLink('');
    setShowUploadFromLink(false);
  };

  return (
    <div className="relative">
      {isOpen && (
        <div className="absolute top-full mt-1 left-[-100px] w-[200px] bg-white border border-gray-200 rounded-lg shadow-lg text-left z-10">
          <ul className="py-2">
            {['device', 'library', 'link', 'googleDrive'].map((type) => (
              <li
                key={type}
                className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
                onClick={() => handleSelect(type)}
              >
                {type === 'library' ? (
            // Nếu là 'library', sử dụng Link để điều hướng
                    <Link to={ENDPOINTS.USER.LIBRARY} className="text-inherit">
                      {`From ${type.charAt(0).toUpperCase() + type.slice(1)}`}
                    </Link>
                  ) : (
                    // Nếu không phải 'library', hiển thị thông thường
                    `From ${type.charAt(0).toUpperCase() + type.slice(1)}`
                  )}
              </li>
            ))}
          </ul>

          {/* Input file ẩn để tải tệp từ thiết bị */}
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFileFromDevice(e.target.files[0]); // Gọi handleFileFromDevice
              }
            }}
          />
        </div>
      )}

      {/* Popup for UploadFromLink */}
      {showUploadFromLink && (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-90 flex items-center justify-center z-20">
          <UploadFromLink
            link={link}
            setLink={setLink}
            handleLinkSubmit={handleLinkSubmit}
            onClose={() => setShowUploadFromLink(false)}
          />
        </div>
      )}

      {/* Popup for UploadFromDrive */}
      {showUploadFromDrive && (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-90 flex items-center justify-center z-20">
          <UploadFromDrive
            handleFile={handleGoogleDriveSubmit}
            onClose={() => setShowUploadFromDrive(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Dropdown;




