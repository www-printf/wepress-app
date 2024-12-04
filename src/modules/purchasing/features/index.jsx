import React, { useState } from "react";
import logoOCB from "../../../assets/icons/logoOCB.png";
import qrcode from "../../../assets/images/qrcode.jpg";
import { useParams, useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../../../routes/endPoints";

const PurchasePaper = () => {
  const { price, title } = useParams(); // Lấy giá trị price và title từ URL
  const navigate = useNavigate();

  // Trạng thái số tiền hiện có (giả sử số tiền ban đầu là 0)
  const [currentBalance, setCurrentBalance] = useState(0);

  // Hàm xử lý thanh toán
  const handlePayment = () => {
    // Cập nhật số tiền hiện có
    const newBalance = currentBalance + parseInt(title, 10);
    setCurrentBalance(newBalance);

    // Điều hướng đến trang thanh toán thành công
    navigate("/user/payment-success");
  };

  return (
    <div className="payment-page-section">
      <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
        {/* Tiêu đề */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-4xl">
          <div className="flex items-center mb-4 border-b-2 pb-2 text-gray-800">
            <img src={logoOCB} alt="LogoOCB" className="w-10 h-10" />
            <span className="ml-20">
              <h1 className="text-3xl font-bold text-center">
                Thanh toán qua tài khoản ngân hàng OCB
              </h1>
            </span>
          </div>

          {/* Thông tin giao dịch */}
          <div className="flex justify-between mb-6 border-b-2 pb-4 text-gray-900">
            <span>Số tiền: {price} VNĐ</span>
            <span>Phí giao dịch: 0 VNĐ</span>
            <span>Tổng tiền: {price} VNĐ</span>
          </div>

          <div className="flex justify-between">
            {/* Hướng dẫn thanh toán */}
            <div className="pl-8 text-base mr-4">
              <p className="font-semibold mb-4 text-black">
                Thông tin thanh toán:
              </p>
              <p>
                Bạn vui lòng chuyển khoản đến số tài khoản bên dưới hoặc quét mã QR để thực hiện thanh toán. Vui lòng nhập đúng số tài khoản và nội dung chuyển khoản.
              </p>
              <ul className="ml-4 list-disc pl-6 mt-2 space-y-1">
                <li>
                  Ngân hàng TMCP Ngoại Thương Việt Nam - Chi nhánh Hùng Vương - TP.HCM
                </li>
                <li>Số tài khoản: 0421000789789</li>
                <li>Tên tài khoản: TRƯỜNG ĐẠI HỌC BÁCH KHOA</li>
                <li>Số tiền: {price} VNĐ</li>
                <li>Nội dung: 2211709</li>
              </ul>
            </div>

            {/* Mã QR */}
            <div>
              <h2 className="font-semibold mb-4">Quét mã để thanh toán</h2>
              <img
                src={qrcode}
                alt="QRCode"
                className="w-[250px] h-[250px] rounded-lg border border-gray-600 shadow-lg"
              />
              <button
                className="w-64 mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-800 transition"
                onClick={handlePayment}
              >
                Xác nhận thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasePaper;
