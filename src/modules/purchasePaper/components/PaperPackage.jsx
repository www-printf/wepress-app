import React from "react";
import PaperPackageItem from "./PaperPackageItem";
import iconPaper from "../../../assets/icons/icon_paper.png";

const PaperPackage = () => {
  // Dữ liệu của các gói giấy
  const packages = [
    {
      title: "Gói 50 trang A4",
      paperCount: 50,
      price: "20.000",
      link: "/user/purchasing",
      iconPaper: iconPaper,
    },
    {
      title: "Gói 100 trang A4",
      paperCount: 100,
      price: "30.000",
      link: "/user/purchasing",
      iconPaper: iconPaper,
    },
    {
      title: "Gói 200 trang A4",
      paperCount: 200,
      price: "40.000",
      link: "/user/purchasing",
      iconPaper: iconPaper,
    },
  ];

  return (
    <div className="purchase-paper-section">
      <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
        {/* Tiêu đề */}
        <h1 className="text-2xl font-semibold mb-8">Chọn gói để mua</h1>

        {/* Hiển thị danh sách các gói giấy */}
        <div className="flex flex-row justify-center space-x-8">
          {packages.map((pkg, index) => (
            <PaperPackageItem
              key={index}
              title={pkg.title}
              paperCount={pkg.paperCount}
              price={pkg.price}
              link={pkg.link}
              iconPaper={pkg.iconPaper}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaperPackage;
