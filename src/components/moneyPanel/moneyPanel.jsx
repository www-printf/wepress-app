import React from "react";
import icon_info from "../../assets/icons/icon_info.png";
import { Link } from "react-router-dom";
const MoneyPanel = () => {
  return (
    <div className="absolute top-16 right-0 p-[10px] text-black w-[350px] h-[220px] "> 
      <div className="bg-white rounded-lg p-4 shadow-lg space-y-4 border-2 border-black">

        <div className="flex items-center space-x-2">
            <img src={icon_info} alt="icon_info" className="h-8 w-8 fillter invert"/>
            <span>Bạn có thể in XX trang giấy A4</span>
            
        </div>

        <div className=" border-t border-black w-full"></div>

        <Link to="/user/purchase-paper" className="p-2 rounded-lg hover:bg-gray-200 w-full text-left flex justify-center items-center space-x-2">
          <span>Nạp thêm tiền</span>
        </Link>
        
      </div>
    </div>
  );
};

export default MoneyPanel;