import logoOCB from "../../../assets/icons/logoOCB.png";
// import QRCode from "qrcode.react";
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
            <div className="pl-8 text-gray-700">
                <h2 className="font-semibold mb-4">Thông tin thanh toán:</h2>
                <h2 >Bạn vui lòng chuyển khoản đến số tài khoản bên dưới hoặc quét mã QR để thực hiện thanh toán. Vui lòng nhập đúng số tài khoản và nội dung chuyển khoản.</h2>
                <ul>
                  <li>Ngân hàng TMCP Ngoại Thương Việt Nam - Chi nhánh Hùng Vương - TP.HCM</li>
                  <li>Số tài khoản: 0421000789789</li>
                  <li>Tên tài khoản: TRƯỜNG ĐẠI HỌC BÁCH KHOA</li>
                  <li>Số tiền: ZZ.ZZZ VNĐ</li>
                  <li>Nội dung: [Mã số sinh viên]_Gói giấy</li>
                </ul>
                  
                
            </div>
            {/* Mã QR */}
            <div>
              <h2 className="font-semibold mb-4">Quét mã để thanh toán</h2>
              <div className="w-64 h-64 flex justify-center items-center border border-gray-300 rounded-lg p-8">
                {/* <QRCode value={paymentUrl} size={256} /> */}
                <span className="text-gray-500">Mã QR</span>
              </div>
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

// import logoOCB from "../../../assets/icons/logoOCB.png";
// export default function PurchasePaper() {
//   return (
//     <div className="payment-page-section">
//       <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
//         {/* Tiêu đề và thông tin thanh toán */}
//         <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-4xl">
//           <div className="flex items-center mb-4 border-b-2 pb-2 text-gray-800">
//             <img src={logoOCB} alt="LogoOCB" className="w-10 h-10"></img>
//             <span className="ml-20">
//               <h1 className="text-3xl font-bold text-center">
//                 Thanh toán qua tài khoản ngân hàng OCB
//               </h1>
//             </span>
//           </div>
          

//           {/* Thông tin giao dịch */}
          
//           <div className="flex justify-between mb-6 border-b-2 pb-4 text-gray-900">
//             <span>Số tiền: XX.XXXđ</span>
//             <span>Phí giao dịch: 0đ</span>
//             <span>Tổng tiền: ZZ.ZZZđ</span>
//           </div>

//           {/* Mã QR và Hướng dẫn thanh toán */}
//           <div className="flex items-center">
//             {/* Mã QR */}
//             <div className="w-64 h-64 flex justify-center items-center border border-gray-300 rounded-lg p-8">
//               <span className="text-gray-500">Mã QR</span>
//             </div>

//             {/* Hướng dẫn thanh toán */}
//             <div className="w-1/2 pl-8 text-gray-700">
//               <h2 className="font-semibold mb-4">Thực hiện theo hướng dẫn để thanh toán:</h2>
//               <p>Bước 1: Mở app OCB OMNI 4.0 hoặc các app chuyển tiền khác</p>
//               <p>Bước 2: Quét mã QR trên màn hình.</p>
//               <p>Bước 3: Kiểm tra thông tin và bấm Thanh toán.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }