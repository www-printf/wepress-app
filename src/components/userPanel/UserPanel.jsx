import React, { useEffect, useState } from "react";
import icon_list from "../../assets/icons/icon_list.png";
import icon_logout from "../../assets/icons/icon_logout.png";
import icon_people from "../../assets/icons/icon_avarta.png";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { ENDPOINTS } from "../../routes/endPoints";

const UserPanel = () => {
  const { logout, isAuthenticated } = useAuth(); // Sử dụng hàm logout và trạng thái xác thực từ useAuth
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true); // Trạng thái mở/đóng bảng chọn

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(ENDPOINTS.AUTH.LOGIN, { replace: true }); // Điều hướng về trang login nếu chưa xác thực
    }
  }, [isAuthenticated, navigate]);

  if (!isOpen) return null; // Ẩn bảng chọn nếu `isOpen` là false

  return (
    <div className="absolute top-16 right-0 p-[10px] text-black w-[300px] h-[220px] z-50">
      <div className="bg-white rounded-lg p-4 shadow-lg space-y-4 border-2 border-black">
        <div className="flex items-center space-x-2">
          <img
            src={icon_people}
            alt="icon_people"
            className="h-10 w-10 filter invert"
          />
          <Link to={ENDPOINTS.USER.INFO} onClick={() => setIsOpen(false)}>Tên người dùng</Link>
        </div>
        <div className=" border-t border-black w-full"></div>

        <button className="bg-white p-2 rounded-lg hover:bg-gray-100 hover:border-blue-300 w-full text-left flex items-center space-x-2 border-2 border-gray-200">
          <img
            src={icon_list}
            alt="icon_list"
            className="h-8 w-8 filter invert"
          />
          <Link to={ENDPOINTS.USER.PRINT_HISTORY} onClick={() => setIsOpen(false)}>Lịch sử in ấn</Link>
        </button>

        <button className="bg-white p-2 rounded-lg hover:bg-gray-100 hover:border-blue-300 w-full text-left flex items-center space-x-2 border-2 border-gray-200">
          <img
            src={icon_list}
            alt="icon_list"
            className="h-8 w-8 filter invert"
          />
          <Link to={ENDPOINTS.USER.PURCHASE_HISTORY} onClick={() => setIsOpen(false)}>Lịch sử giao dịch</Link>
        </button>

        <div className=" border-t border-black w-full"></div>

        {/* Nút Đăng Xuất với xử lý logout */}
        <button
          className="bg-white p-2 rounded-lg hover:bg-red-300 hover:border-red-400 w-full text-left flex justify-center items-center space-x-2 border-2 border-gray-200"
          onClick={() => {
            logout();
          }}
        >
          <span>Đăng xuất</span>
          <img
            src={icon_logout}
            alt="icon_logout"
            className="h-8 w-8 filter invert"
          />
        </button>
      </div>
    </div>
  );
};

export default UserPanel;

//thêm nếu muốn click ra ngoài thì đóng bảng chọn:
// thêm ở dòng 14
// const panelRef = useRef(null); // Tạo ref cho bảng chọn
  // useEffect(() => { // Hàm xử lý khi click bên ngoài bảng chọn
  //   const handleClickOutside = (event) => {
  //     if (panelRef.current && !panelRef.current.contains(event.target)) {
  //       setIsOpen(false); // Đóng bảng chọn nếu click ra ngoài
  //     }
  //   };
    
  //   document.addEventListener("mousedown", handleClickOutside); // Thêm event listener
  //   return () => {
  //     // Xóa event listener khi component bị hủy
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  // thêm trong thẻ div ở dòng 24: ref={panelRef}