import React from "react";
import PaperPackageItem from "./PaperPackageItem";

const PaperPackage = () => {
  // Dữ liệu của các gói giấy
  const packages = [
    {
      title: 50,
      price: "20.000",
      link: "/user/purchasing",
    },
    {
      title: 100,
      price: "38.000",
      link: "/user/purchasing",
    },
    {
      title: 200,
      price: "70.000",
      link: "/user/purchasing",
    },
  ];

  return (
    <div className="purchase-paper-section p-8 bg-gray-100 min-h-screen">
      <div className="flex flex-col items-center">
        {/* Tiêu đề */}
        <h1 className="text-3xl font-bold mb-8">Chọn gói để mua</h1>

        {/* Hiển thị danh sách các gói giấy */}
        <div className="flex flex-row justify-center space-x-8">
          {packages.map((pkg, index) => (
            <PaperPackageItem
              key={index}
              title={pkg.title}
              price={pkg.price}
              link={pkg.link}
            />
          ))}
        </div>
      </div>

      {/* Hướng dẫn quy đổi tiền tệ */}
      <div className="mt-8 p-4 text-base ml-32">
        <p className="mb-2 font-medium text-lg text-gray-800">💡 Chi tiết đơn vị tiền tệ</p>
        <p className="ml-6">Đơn vị tiền tệ ở WePress được gọi là <span className="font-medium">credit</span>.</p>
        <p className="mt-2 ml-6">Số lượng credit để in các cỡ giấy khác nhau sẽ khác nhau. Cụ thể như sau:</p>
        <ul className="ml-6 list-disc pl-6 mt-2 space-y-1">
          <li>
            Để in 1 trang giấy <span className="font-medium">A5</span>, bạn cần tốn <span className="font-medium">1 credit</span>.
          </li>
          <li>
            Để in 1 trang giấy <span className="font-medium">A4</span>, bạn cần tốn <span className="font-medium">2 credit</span>.
          </li>
          <li>
            Để in 1 trang giấy <span className="font-medium">A3</span>, bạn cần tốn <span className="font-medium">4 credit</span>.
          </li>
        </ul>
      </div>

    </div>
  );
};

export default PaperPackage;
