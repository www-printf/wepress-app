import React from "react";
import icon_printer from "../../../assets/icons/icon_printer_black.png"
export default function PaymentSuccess() {
  const phoneNumber = `WP${Math.floor(Math.random() * 90000000) + 10000000}`;
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 min-h-screen">
      <img src={icon_printer} alt="PrinterLogo" className=""></img>
      <h1 className="text-4xl font-bold text-green-600 mb-6">Thanh toán thành công!</h1>
      <p className="text-lg text-gray-700">Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.</p>
      <p className="text-lg text-gray-700">Mã giao dịch của bạn là: <strong>{phoneNumber}</strong></p>
      <button
        className="mt-6 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
        onClick={() => window.location.href = "/"} // Điều hướng về trang chủ
      >
        Quay về Trang Chủ
      </button>
    </div>
  );
}
