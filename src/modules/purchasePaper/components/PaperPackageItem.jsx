// import { Link } from "react-router-dom";
// import icon_paper from "../../../assets/icons/icon_paper.png";
// function PaperPackage() {
//   return (
//     <div className="purchase-paper-section">
//       <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
//         {/* Tiêu đề */}
//         <h1 className="text-2xl font-semibold mb-8">Chọn gói để mua</h1>

//         {/* Các gói giấy */}
//         <div className="flex flex-row justify-center space-x-8">
//           {/* Gói 50 trang A4 */}
//           <div className="border border-gray-300 rounded-lg p-6 w-[250px] shadow-lg bg-white flex flex-col items-center">
//             <h2 className="text-2xl font-bold mb-4">Gói 50 trang A4</h2>
//             <div className="flex items-center mb-4">
//               <span className="text-xl font-semibold ">50</span>
//               <img src={icon_paper} alt="Paper" className="ml-2 w-6 h-6"/>
//             </div>
            
//             <p className="text-xl font-bold mb-4">20.000 VNĐ</p>
//             <Link 
//               to="/user/purchasing" 
//               className="bg-white text-black font-semibold rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-100 transition"
//             >
//               Chọn mua
//             </Link>
//           </div>

//           {/* Gói 100 trang A4 */}
//           <div className="border border-gray-300 rounded-lg p-6 w-[250px] shadow-lg bg-white flex flex-col items-center">
//             <h2 className="text-2xl font-bold mb-4">Gói 100 trang A4</h2>
//             <div className="flex items-center mb-4">
//               <span className="text-xl font-semibold ">100</span>
//               <img src={icon_paper} alt="Paper" className="ml-2 w-6 h-6"/>
//             </div>
            
//             <p className="text-xl font-bold mb-4">30.000 VNĐ</p>
//             <Link 
//               to="/user/purchasing" 
//               className="bg-white text-black font-semibold rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-100 transition"
//             >
//               Chọn mua
//             </Link>
//           </div>

//           {/* Gói 200 trang A4 */}
//           <div className="border border-gray-300 rounded-lg p-6 w-[250px] shadow-lg bg-white flex flex-col items-center">
//             <h2 className="text-2xl font-bold mb-4">Gói 200 trang A4</h2>
//             <div className="flex items-center mb-4">
//               <span className="text-xl font-semibold ">200</span>
//               <img src={icon_paper} alt="Paper" className="ml-2 w-6 h-6"/>
//             </div>
            
//             <p className="text-xl font-bold mb-4">40.000 VNĐ</p>
//             <Link 
//               to="/user/purchasing" 
//               className="bg-white text-black font-semibold rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-100 transition"
//             >
//               Chọn mua
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PaperPackage;

import React from "react";
import { Link } from "react-router-dom";

// Component hiển thị từng gói giấy
const PaperPackageItem = ({ title, paperCount, price, link, iconPaper }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-6 w-[250px] shadow-lg bg-white flex flex-col items-center">
      {/* Tiêu đề gói giấy */}
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      {/* Số lượng giấy và hình ảnh */}
      <div className="flex items-center mb-4">
        <span className="text-xl font-semibold">{paperCount}</span>
        <img src={iconPaper} alt="Paper" className="ml-2 w-6 h-6" />
      </div>

      {/* Giá tiền */}
      <p className="text-xl font-bold mb-4">{price} VNĐ</p>

      {/* Nút chọn mua */}
      <Link
        to={link}
        className="bg-white text-black font-semibold rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-100 transition"
      >
        Chọn mua
      </Link>
    </div>
  );
};

export default PaperPackageItem;
