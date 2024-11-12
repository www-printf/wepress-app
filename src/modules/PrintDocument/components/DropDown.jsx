import React, { useState } from 'react';
import UploadFromLink from './UploadFromLink';
import UploadFromDrive from './UploadFromDrive';

const Dropdown = ({ isOpen, onSelect, inputType, link, setLink, handleLinkSubmit }) => {
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
                {`From ${type.charAt(0).toUpperCase() + type.slice(1)}`}
              </li>
            ))}
          </ul>

          {/* Input file ẩn để tải tệp từ thiết bị */}
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={(e) => onSelect('device', e.target.files[0])}
          />
        </div>
      )}

      {/* Popup cho UploadFromLink */}
      {showUploadFromLink && (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-90 flex items-center justify-center z-20">
          <UploadFromLink
            link={link}
            setLink={setLink}
            handleLinkSubmit={handleLinkSubmit}
            onClose={() => setShowUploadFromLink(false)} // Đóng chỉ component UploadFromLink
          />
        </div>
      )}

      {/* Popup cho UploadFromDrive */}
      {showUploadFromDrive && (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-90 flex items-center justify-center z-20">
          <UploadFromDrive
            onConnect={() => onSelect('googleDrive')}
            onClose={() => setShowUploadFromDrive(false)} // Đóng chỉ component UploadFromDrive
          />
        </div>
      )}
    </div>
  );
};

export default Dropdown;
