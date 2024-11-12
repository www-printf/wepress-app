// useDropdown.js
import { useState } from 'react';

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputType, setInputType] = useState(''); // '' | 'link' | 'googleDrive'
  const [link, setLink] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null); // Trạng thái lưu tệp đã tải lên
  const [fileContent, setFileContent] = useState(null); // Trạng thái lưu nội dung tệp
  const [error, setError] = useState(null); // Trạng thái lưu lỗi

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const onSelect = (type, data) => {
    if (type === 'device') {
      if (!data) {
        document.getElementById("fileInput").click();
      } else {
        setUploadedFile(data);
        setIsOpen(false); // Đóng dropdown sau khi tải lên thành công
        setError(null); // Reset lỗi trước khi đọc file

        // Sử dụng FileReader để đọc nội dung tệp
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target.result;
          setFileContent(result); // Lưu nội dung tệp
        };

        if (data.type.startsWith("image/")) {
          // Đọc ảnh dưới dạng URL
          reader.readAsDataURL(data);
        } else if (data.type === "text/plain") {
          // Đọc văn bản
          reader.readAsText(data);
        } else if (data.type === "application/pdf") {
          // Đọc PDF (ở mức đơn giản chỉ là URL, để render PDF chi tiết hơn cần thêm thư viện)
          reader.readAsDataURL(data);
        } else {
          console.warn("Unsupported file type");
          setError("Unsupported file type"); // Lưu thông báo lỗi
        }
      }
    } else if (type === 'library') {
      console.log("Upload from WePress Library");
    } else if (type === 'link') {
      setInputType('link');
    } else if (type === 'googleDrive') {
      setInputType('googleDrive');
    }
  };

  const handleLinkSubmit = () => {
    setUploadedFile(link);
    setInputType('');
    setIsOpen(false);
    setFileContent(link); // Giả sử link là URL để hiển thị
  };

  return {
    isOpen,
    toggleDropdown,
    inputType,
    setInputType,
    link,
    setLink,
    uploadedFile,
    fileContent,
    error,
    onSelect,
    handleLinkSubmit,
  };
};

export default useDropdown;
