import React from 'react';

const getRandomDate = () => {
  const start = new Date(2023, 0, 1); // Ngày bắt đầu (1/1/2023)
  const end = new Date(); // Ngày hiện tại
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return randomDate.toLocaleDateString("en-GB"); // Định dạng DD/MM/YYYY
};

// Hàm tạo mã đơn ngẫu nhiên
const getRandomOrderId = () => {
  return "ORD-" + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
};

// Hàm tạo ID ngẫu nhiên cho người dùng và máy in
const getRandomId = () => {
  return Math.floor(Math.random() * 1000).toString().padStart(3, '0');
};

// Hàm tạo trạng thái ngẫu nhiên
const getRandomStatus = () => {
  const statuses = ["printing", "interrupted", "completed"];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

// Tạo dữ liệu ngẫu nhiên cho đơn hàng
const orders = [
  {
    date: getRandomDate(),
    orderId: getRandomOrderId(),
    userId: getRandomId(),
    printerId: getRandomId(),
    fileName: "example_document.pdf",
    pages: Math.floor(Math.random() * 20) + 1, // Số trang ngẫu nhiên từ 1 đến 20
    paperSize: "A4",
    status: getRandomStatus()
  },
  {
    date: getRandomDate(),
    orderId: getRandomOrderId(),
    userId: getRandomId(),
    printerId: getRandomId(),
    fileName: "example_document.pdf",
    pages: Math.floor(Math.random() * 20) + 1,
    paperSize: "A4",
    status: getRandomStatus()
  },
  {
    date: getRandomDate(),
    orderId: getRandomOrderId(),
    userId: getRandomId(),
    printerId: getRandomId(),
    fileName: "example_document.pdf",
    pages: Math.floor(Math.random() * 20) + 1,
    paperSize: "A4",
    status: getRandomStatus()
  },
  {
    date: getRandomDate(),
    orderId: getRandomOrderId(),
    userId: getRandomId(),
    printerId: getRandomId(),
    fileName: "example_document.pdf",
    pages: Math.floor(Math.random() * 20) + 1,
    paperSize: "A4",
    status: getRandomStatus()
  },
  {
    date: getRandomDate(),
    orderId: getRandomOrderId(),
    userId: getRandomId(),
    printerId: getRandomId(),
    fileName: "example_document.pdf",
    pages: Math.floor(Math.random() * 20) + 1,
    paperSize: "A4",
    status: getRandomStatus()
  },
  {
    date: getRandomDate(),
    orderId: getRandomOrderId(),
    userId: getRandomId(),
    printerId: getRandomId(),
    fileName: "example_document.pdf",
    pages: Math.floor(Math.random() * 20) + 1,
    paperSize: "A4",
    status: getRandomStatus()
  }
  // Thêm các đơn hàng khác nếu cần
];

const StatusIcon = ({ status }) => {
  switch(status) {
    case 'printing':
      return (
        <div className="flex gap-2.5  justify-start  self-stretch px-2.5 my-auto">
          <div className="flex gap-2 items-center self-stretch my-auto w-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e47bd8787adea8470c7d4f123f237ab2caeb02a7533488f8d8cb2e8b01d92a1?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
              alt=""
              className="object-contain self-stretch my-auto w-5 aspect-square stroke-[2px] stroke-yellow-400"
            />
          </div>
          <div className="self-stretch my-auto text-sm text-black">Đang in</div>
        </div>
      );
    case 'completed':
      return (
        <div className="flex gap-2.5  justify-start  self-stretch px-2.5 my-auto">
          <div className="flex flex-col justify-center items-center self-stretch px-1.5 my-auto w-5 h-5 rounded-xl border-2 border-green-500 border-solid min-h-[20px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f27fef5f91fe4aaab30e331b880e47b366c6a39e75c445ae211a59e46302b51b?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
              alt=""
              className="object-contain w-2 aspect-square stroke-[2px] stroke-green-500"
            />
          </div>
          <div className="self-stretch my-auto text-sm text-black">Đã in</div>
        </div>
      );
    case 'interrupted':
      return (
        <div className="flex gap-2.5  justify-start  items-center self-stretch px-2.5 my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0609800423bd6e4115db6b141e281885111a2b9a0e79b0d216fe29e8dbc15b96?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
          <div className="self-stretch my-auto">Bị gián đoạn</div>
        </div>
      );
    default:
      return null;
  }
};

export default function PrintOrdersTable() {
    return (
      <div className="flex overflow-hidden flex-col mt-2.5 w-full rounded-xl max-w-[1055px] max-md:max-w-full">
        <div className="flex flex-wrap items-center w-full text-sm font-semibold tracking-tight text-black max-md:max-w-full">
          <div className="p-2.5 my-auto bg-gray-100 w-[108px]">Ngày in</div>
          <div className="p-2.5 my-auto bg-gray-100 w-[138px]">Mã đơn in</div>
          <div className="p-2.5 my-auto bg-gray-100 w-[138px]">ID người dùng</div>
          <div className="p-2.5 my-auto bg-gray-100 w-[138px]">ID máy in</div>
          <div className="p-2.5 my-auto bg-gray-100 w-[230px]">Tên file in</div>
          <div className="p-2.5 my-auto bg-gray-100 w-[60px]">Số tờ</div>
          <div className="p-2.5 my-auto bg-gray-100 w-[75px]">Cỡ giấy</div>
          <div className="p-2.5 my-auto bg-gray-100 w-[150px]">Tình trạng in</div>
        </div>
        <div className="flex flex-col justify-center w-full max-md:max-w-full">
          {orders.map((order, index) => (
            <div key={index} className="flex flex-wrap items-center w-full max-md:max-w-full">
              <div className="p-2.5 my-auto text-sm text-black whitespace-nowrap bg-white w-[108px]">
                {order.date}
              </div>
              <div className="p-2.5 my-auto text-sm text-black bg-white w-[138px]">
                {order.orderId}
              </div>
              <div className="p-2.5 my-auto text-sm text-black bg-white w-[138px]">
                {order.userId}
              </div>
              <div className="p-2.5 my-auto text-sm text-black bg-white w-[138px]">
                {order.printerId}
              </div>
              <div className="p-2.5 my-auto text-sm text-black whitespace-nowrap bg-white w-[230px]">
                {order.fileName}
              </div>
              <div className="p-2.5 my-auto text-sm text-center text-black whitespace-nowrap bg-white w-[60px]">
                {order.pages}
              </div>
              <div className="p-2.5 my-auto text-sm text-center text-black whitespace-nowrap bg-white w-[75px]">
                {order.paperSize}
              </div>
              <div className="p-2.5 my-auto text-sm text-black bg-white w-[150px]">
                <StatusIcon status={order.status} />
              </div>
            </div>
          ))}
        </div>
        <button className="flex gap-2.5 justify-center items-center p-2.5 mt-2.5 text-sm font-semibold tracking-tight text-center bg-white rounded-lg border border-solid border-zinc-200 text-zinc-800">
          <div className="gap-2.5 self-stretch my-auto">Xem thêm</div>
        </button>
      </div>
    );
  }
  