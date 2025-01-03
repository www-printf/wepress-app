import React from "react";
import { Link } from "react-router-dom";

// Component hiển thị từng gói giấy
const PaperPackageItem = ({ title, price, link }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-6 w-[250px] shadow-lg bg-white flex flex-col items-center">
      {/* Tiêu đề gói giấy */}
      <h2 className="text-2xl font-bold mb-4">Gói {title} credits</h2>

      {/* Giá tiền */}
      <p className="text-xl text-red-500 font-bold mb-4">{price} VNĐ</p>

      {/* Nút chọn mua */}
      <Link
        to={`${link}/${price}`}
        className="bg-blue-600 text-white font-semibold rounded-md border border-gray-300 px-4 py-2 hover:bg-blue-800 transition"
      >
        Chọn mua
      </Link>
    </div>
  );
};

export default PaperPackageItem;
