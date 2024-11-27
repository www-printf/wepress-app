import React from "react";
import { Link } from "react-router-dom";

// Component hiển thị từng gói giấy
const PaperPackageItem = ({ title, paperCount, price, link, iconPaper }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-6 w-[250px] shadow-lg bg-white flex flex-col items-center">
      {/* Tiêu đề gói giấy */}
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      {/* Giá tiền */}
      <p className="text-xl text-green-500 font-bold mb-4">{price} VNĐ</p>

      {/* Nút chọn mua */}
      <Link
        to={link}
        className="bg-gray-200 text-black font-semibold rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-400 transition"
      >
        Chọn mua
      </Link>
    </div>
  );
};

export default PaperPackageItem;
