import React, {useState} from "react";
import icon_info from "../../assets/icons/icon_info.png";
import { Link } from "react-router-dom";
const MoneyPanel = () => { 
  const [isOpen, setIsOpen] = useState(true); // Trạng thái mở/đóng bảng chọn
  if (!isOpen) return null; // Ẩn bảng chọn nếu `isOpen` là false
  return (
    <div className="absolute top-16 right-0 p-[10px] text-black w-[300px] h-[200px] z-50"> 
      <div className="bg-white rounded-lg p-4 shadow-lg space-y-4 border-2 border-black">

        <div className="flex items-center space-x-2">
            <img src={icon_info} alt="icon_info" className="h-8 w-8 fillter invert"/>
            <span className="text-lg font-semibold">Bạn hiện có XX credit</span>
            
        </div>

        <div className="ml-2">
          <p>Với XX credit, bạn có thể in:</p>
          <ul className="ml-2 list-disc pl-6 mt-1">
            <li>XX trang giấy cỡ A5</li>
            <li>1/2XX trang giấy cỡ A4</li>
            <li>1/4XX trang giấy cỡ A3 </li>
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