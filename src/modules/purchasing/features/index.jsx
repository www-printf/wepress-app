import logoOCB from "../../../assets/icons/logoOCB.png";
// import QRCode from "qrcode.react";
import qrcode from "../../../assets/images/qrcode.jpg";
export default function PurchasePaper() {
  // const paymentUrl = "http://localhost:3000/user/payment-success";
  return (
    <div className="payment-page-section">
      <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
        {/* Tiêu đề */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-4xl">
          <div className="flex items-center mb-4 border-b-2 pb-2 text-gray-800">
            <img src={logoOCB} alt="LogoOCB" className="w-10 h-10"></img>
            <span className="ml-20">
              <h1 className="text-3xl font-bold text-center">
                Thanh toán qua tài khoản ngân hàng OCB
              </h1>
            </span>
          </div>
          

          {/* Thông tin giao dịch */}
          
          <div className="flex justify-between mb-6 border-b-2 pb-4 text-gray-900">
            <span>Số tiền: XX.XXXđ</span>
            <span>Phí giao dịch: 0đ</span>
            <span>Tổng tiền: ZZ.ZZZđ</span>
          </div>

          
          <div className="flex justify-between ">

            {/* Hướng dẫn thanh toán */}
            <div className="pl-8 text-base mr-4">
                <p className="font-semibold mb-4 text-black">Thông tin thanh toán:</p>
                <p>Bạn vui lòng chuyển khoản đến số tài khoản bên dưới hoặc quét mã QR để thực hiện thanh toán. Vui lòng nhập đúng số tài khoản và nội dung chuyển khoản.</p>
                <ul className="ml-4 list-disc pl-6 mt-2 space-y-1">
                  <li>Ngân hàng TMCP Ngoại Thương Việt Nam - Chi nhánh Hùng Vương - TP.HCM</li>
                  <li>Số tài khoản: 0421000789789</li>
                  <li>Tên tài khoản: TRƯỜNG ĐẠI HỌC BÁCH KHOA</li>
                  <li>Số tiền: ZZ.ZZZ VNĐ</li>
                  <li>Nội dung: 2211709_Gói 50 credits</li>
                </ul>  
            </div>
            {/* Mã QR */}
            <div>
              <h2 className="font-semibold mb-4">Quét mã để thanh toán</h2>
                {/* <QRCode value={paymentUrl} size={256} /> */}
                <img src={qrcode} alt="QRCode" className="w-[250px] h-[250px] rounded-lg border border-gray-600 shadow-lg"></img>
              <button
                className="w-64 mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-800 transition"
                onClick={() => window.location.href = "/user/payment-success"} // Điều hướng về trang thanh toán thành công
              >
                Xác nhận thanh toán
              </button>
            </div>
            

            
          </div>
        </div>
      </div>
    </div>
  );
}
