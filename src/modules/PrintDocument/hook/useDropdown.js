import { useState } from 'react';

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputType, setInputType] = useState(''); // '' | 'link' | 'googleDrive'

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const onSelect = (type) => {
    if (type === 'link' || type === 'googleDrive') {
      setInputType(type); // Chuyển input để nhập link hoặc Google Drive
    }
    setIsOpen(false);
  };

  return {
    isOpen,
    toggleDropdown,
    inputType,
    setInputType,
    onSelect,
  };
};

export default useDropdown;

