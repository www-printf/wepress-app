import React, {useEffect, useRef, useState} from "react";
import icon_info from "../../assets/icons/icon_info.png";
import { Link } from "react-router-dom";
const MoneyPanel = () => { 
  const [isOpen, setIsOpen] = useState(true); // Trạng thái mở/đóng bảng chọn

  /* Xử lý click ra ngoài để đóng panel */
  const panelRef = useRef(null); // Tạo ref cho bảng chọn
  useEffect(() => { // Hàm xử lý khi click bên ngoài bảng chọn
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsOpen(false); // Đóng bảng chọn nếu click ra ngoài
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside); // Thêm event listener
    return () => {document.removeEventListener("mousedown", handleClickOutside)}; // Xóa event listener khi component bị hủy
  }, []);
  
  if (!isOpen) return null; // Ẩn bảng chọn nếu `isOpen` là false

  return (
    <div ref={panelRef} className="absolute top-16 right-0 p-[10px] text-black w-[300px] h-[200px] z-50"> 
      <div className="bg-white rounded-lg p-4 shadow-lg space-y-4 border-2 border-black">

        <div className="flex items-center space-x-2">
            <img src={icon_info} alt="icon_info" className="h-8 w-8 fillter invert"/>
            <span className="text-lg font-semibold">Bạn hiện có 50 credit</span>
            
        </div>

        <div className="ml-2">
          <p>Với 50 credit, bạn có thể in:</p>
          <ul className="ml-2 list-disc pl-6 mt-1">
            <li>50 trang giấy cỡ A5</li>
            <li>25 trang giấy cỡ A4</li>
            <li>12 trang giấy cỡ A3 </li>
          </ul>
        </div>

        <div className=" border-t border-black w-full"></div>

        <Link to="/user/purchase-paper" onClick={() => setIsOpen(false)} className="border-2 border-gray-300 p-2 rounded-lg hover:bg-gray-200 hover:border-blue-300 w-full text-left flex justify-center items-center space-x-2">
          <span>Nạp thêm credit</span>
        </Link>
        
      </div>
    </div>
  );
};

export default MoneyPanel;