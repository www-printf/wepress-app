// import React from 'react';

// // Hàm tạo thời gian ngẫu nhiên
// const getRandomTime = () => {
//   const hours = Math.floor(Math.random() * 9) + 8; // Tạo giờ ngẫu nhiên từ 08 đến 16
//   const minutes = Math.floor(Math.random() * 60); // Tạo phút ngẫu nhiên từ 0 đến 59
//   return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
// };

// // Hàm tạo ngày ngẫu nhiên trong phạm vi
// const getRandomDate = () => {
//   const start = new Date(2023, 0, 1); // Ngày bắt đầu (1/1/2023)
//   const end = new Date(); // Ngày hiện tại
//   const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
//   return randomDate.toLocaleDateString("en-GB"); // Định dạng DD/MM/YYYY
// };

// // Hàm tạo ID người dùng ngẫu nhiên
// const getRandomUserId = () => {
//   return Math.floor(Math.random() * 1000).toString().padStart(3, '0');
// };

// // Hàm tạo tên gói ngẫu nhiên
// const getRandomPackage = () => {
//   const packages = ["Basic", "Premium", "VIP", "Enterprise"];
//   return packages[Math.floor(Math.random() * packages.length)];
// };

// // Hàm tạo số tiền ngẫu nhiên
// const getRandomAmount = () => {
//   const minAmount = 100000; // 100.000đ
//   const maxAmount = 1000000; // 1.000.000đ
//   const amount = Math.floor(Math.random() * (maxAmount - minAmount + 1)) + minAmount;
//   return amount.toLocaleString("vi-VN") + "đ"; // Định dạng tiền tệ
// };

// // Tạo dữ liệu ngẫu nhiên cho các giao dịch
// const transactions = [
//   {
//     time: getRandomTime(),
//     date: getRandomDate(),
//     userId: getRandomUserId(),
//     package: getRandomPackage(),
//     amount: getRandomAmount()
//   },
//   {
//     time: getRandomTime(),
//     date: getRandomDate(),
//     userId: getRandomUserId(),
//     package: getRandomPackage(),
//     amount: getRandomAmount()
//   },
//   {
//     time: getRandomTime(),
//     date: getRandomDate(),
//     userId: getRandomUserId(),
//     package: getRandomPackage(),
//     amount: getRandomAmount()
//   },
//   {
//     time: getRandomTime(),
//     date: getRandomDate(),
//     userId: getRandomUserId(),
//     package: getRandomPackage(),
//     amount: getRandomAmount()
//   },
//   {
//     time: getRandomTime(),
//     date: getRandomDate(),
//     userId: getRandomUserId(),
//     package: getRandomPackage(),
//     amount: getRandomAmount()
//   }
//   // Thêm các giao dịch khác nếu cần
// ];

// export default function RevenueTable() {
//   return (
//     <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[1000px] max-md:max-w-full">
//       <div className="flex overflow-hidden flex-col w-full text-black rounded-lg border border-solid border-zinc-200 max-md:max-w-full">
//         <div className="flex overflow-hidden flex-wrap items-center text-sm font-semibold tracking-tight max-md:max-w-full">
//           <div className="gap-2.5 self-stretch p-2.5 my-auto bg-gray-100 w-[300px]">Thời gian</div>
//           <div className="self-stretch p-2.5 my-auto bg-gray-100 w-[300px]">ID người dùng</div>
//           <div className="self-stretch p-2.5 my-auto bg-gray-100 w-[200px]">Mua gói</div>
//           <div className="self-stretch p-2.5 my-auto bg-gray-100 w-[198px]">Số tiền</div>
//         </div>
//         {transactions.map((transaction, index) => (
//           <div key={index} className="flex flex-wrap items-center w-full max-md:max-w-full">
//             <div className="flex flex-col grow shrink justify-center self-stretch p-2.5 my-auto whitespace-nowrap w-[200px]">
//               <div className="text-xs tracking-normal">{transaction.time}</div>
//               <div className="text-sm">{transaction.date}</div>
//             </div>
//             <div className="grow shrink self-stretch p-2.5 my-auto text-sm w-[200px]">{transaction.userId}</div>
//             <div className="grow shrink self-stretch p-2.5 my-auto w-20 text-sm">{transaction.package}</div>
//             <div className="grow shrink self-stretch p-2.5 my-auto w-20 text-sm whitespace-nowrap">{transaction.amount}</div>
//           </div>
//         ))}
//       </div>
//       <button className="flex gap-2.5 justify-center items-center self-center p-2.5 mt-2.5 text-sm font-semibold tracking-tight text-center bg-white rounded-lg border border-solid border-zinc-200 text-zinc-800">
//         <div className="gap-2.5 self-stretch my-auto">Xem thêm</div>
//       </button>
//     </div>
//   );
// }
import React, { useState } from 'react';

// Hàm tạo thời gian ngẫu nhiên
const getRandomTime = () => {
  const hours = Math.floor(Math.random() * 9) + 8; // Tạo giờ ngẫu nhiên từ 08 đến 16
  const minutes = Math.floor(Math.random() * 60); // Tạo phút ngẫu nhiên từ 0 đến 59
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};

// Hàm tạo ngày ngẫu nhiên trong phạm vi
const getRandomDate = () => {
  const start = new Date(2023, 0, 1); // Ngày bắt đầu (1/1/2023)
  const end = new Date(); // Ngày hiện tại
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return randomDate.toLocaleDateString("en-GB"); // Định dạng DD/MM/YYYY
};

// Hàm tạo ID người dùng ngẫu nhiên
const getRandomUserId = () => {
  return Math.floor(Math.random() * 10000); // ID ngẫu nhiên từ 0 đến 9999
};

// Tạo dữ liệu mẫu
const generateData = (num) => {
  const data = [];
  for (let i = 0; i < num; i++) {
    data.push({
      time: getRandomTime(),
      date: getRandomDate(),
      userId: getRandomUserId(),
      package: `Package ${Math.floor(Math.random() * 5) + 1}`,
      amount: Math.floor(Math.random() * 100) + 1
    });
  }
  return data;
};

const MyComponent = () => {
  // Dữ liệu mẫu
  const allData = generateData(50); // Giả sử có 50 bản ghi

  const [visibleItems, setVisibleItems] = useState(10); // Mặc định hiển thị 10 bản ghi
  const [isExpanded, setIsExpanded] = useState(false); // Để xác định xem đã hết hàng hay chưa

  const handleLoadMore = () => {
    if (visibleItems + 10 >= allData.length) {
      setVisibleItems(allData.length); // Nếu dữ liệu đã hết, hiển thị tất cả
      setIsExpanded(true); // Chuyển sang trạng thái thu gọn
    } else {
      setVisibleItems(visibleItems + 10); // Hiển thị thêm 10 bản ghi
    }
  };

  const handleCollapse = () => {
    setVisibleItems(10); // Thu gọn về 10 bản ghi ban đầu
    setIsExpanded(false); // Đặt lại trạng thái thành "Xem thêm"
  };

  return (
    <div>
      <div className="flex flex-col overflow-hidden gap-10 items-center justify-between px-2.5 mt-2.5 w-full max-md:max-w-full">
        <div className="flex overflow-hidden flex-col w-full text-black rounded-lg border border-solid border-zinc-200 max-md:max-w-full">
          {/* Header */}
          <div className="flex overflow-hidden flex-wrap items-center text-sm font-semibold tracking-tight max-md:max-w-full">
            <div className="gap-2.5 self-stretch p-2.5 my-auto bg-gray-100 w-[300px]">Thời gian</div>
            <div className="self-stretch p-2.5 my-auto bg-gray-100 w-[300px]">ID người dùng</div>
            <div className="self-stretch p-2.5 my-auto bg-gray-100 w-[200px]">Mua gói</div>
            <div className="self-stretch p-2.5 my-auto bg-gray-100 w-[200px]">Số tiền</div>
          </div>

          {/* Data Rows */}
          {allData.slice(0, visibleItems).map((transaction, index) => (
            <div key={index} className="flex flex-wrap items-center bg-white border-r border-b border-l border-zinc-200 max-md:max-w-full">
              <div className="w-[300px] p-2.5">{transaction.time}</div>
              <div className="w-[300px] p-2.5">{transaction.userId}</div>
              <div className="w-[200px] p-2.5">{transaction.package}</div>
              <div className="w-[200px] p-2.5">{transaction.amount}</div>
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={isExpanded ? handleCollapse : handleLoadMore}
          className="mt-4 p-2.5 text-sm font-semibold bg-gray-200 rounded-lg"
        >
          {isExpanded ? 'Thu gọn' : 'Xem thêm'}
        </button>
      </div>
    </div>
  );
};

export default MyComponent;
