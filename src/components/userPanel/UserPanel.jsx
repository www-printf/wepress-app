import React, { useEffect } from "react";
import icon_list from "../../assets/icons/icon_list.png";
import icon_logout from "../../assets/icons/icon_logout.png";
import icon_people from "../../assets/icons/icon_avarta.png";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../../routes/endPoints";

const UserPanel = () => {
  const { logout, isAuthenticated } = useAuth(); // Sử dụng hàm logout và trạng thái xác thực từ useAuth
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(ENDPOINTS.AUTH.LOGIN); // Điều hướng về trang login nếu chưa xác thực
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="absolute top-16 right-0 p-[10px] text-black w-[300px] h-[220px] "> 
      <div className="bg-white rounded-lg p-4 shadow-lg space-y-4 border-2 border-black">
        <div className="flex items-center space-x-2">
          <img src={icon_people} alt="icon_people" className="h-10 w-10 filter invert"/>
          <span>Tên người dùng</span>
        </div>
        <div className=" border-t border-black w-full"></div>

        <button className="bg-white p-2 rounded-lg hover:bg-gray-100 w-full text-left flex items-center space-x-2 border-2 border-gray-200">
          <img src={icon_list} alt="icon_list" className="h-8 w-8 filter invert"/>
          <span>Lịch sử in ấn</span>
        </button>

        <button className="bg-white p-2 rounded-lg hover:bg-gray-100 w-full text-left flex items-center space-x-2 border-2 border-gray-200">
          <img src={icon_list} alt="icon_list" className="h-8 w-8 filter invert"/>
          <span>Lịch sử giao dịch</span>
        </button>
        
        <div className=" border-t border-black w-full"></div>

        {/* Nút Đăng Xuất với xử lý logout */}
        <button 
          className="bg-white p-2 rounded-lg hover:bg-gray-100 w-full text-left flex justify-center items-center space-x-2 border-2 border-gray-200"
          onClick={() => {
              logout(); 
          }}
        >
          <span>Đăng xuất</span>
          <img src={icon_logout} alt="icon_logout" className="h-8 w-8 filter invert"/>
        </button>
      </div>
    </div>
  );
};

export default UserPanel;
