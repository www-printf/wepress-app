import * as React from "react";
import { InfoCard } from "../components/InfoCard";
import { StatusCard } from "../components/StatusCard";
import { ActionButton } from "../components/ActionButton";

function PrintStatus() {
  const printInfo = {
    room: "H1-103",
    printer: "Máy in 1",
    document: "example_document.pdf",
    sheets: "32",
    paperSize: "A4"
  };

  const statusInfo = {
    status: "Đang đợi máy in",
    printed: 0,
    total: 32,
    progress: 0
  };

  const actions = [
    { label: "Quay về trang chủ" },
    { label: "In tài liệu khác" }
  ];

  return (
    <div className="flex overflow-hidden flex-col items-center justify-center h-[600px] 16/10-lg:h-[700px] p-3 bg-gray-100">
      <div className="text-4xl font-bold tracking-tighter text-center text-black">
        Tình trạng đơn in
      </div>
      <div className="flex flex-wrap gap-10 items-center mt-5 max-md:max-w-full">
        <InfoCard {...printInfo} />
        <StatusCard {...statusInfo} />
      </div>
      <div className="flex gap-2.5 items-start mt-5">
        {actions.map((action, index) => (
          <ActionButton key={index} {...action} />
        ))}
      </div>
    </div>
  );
}

export default PrintStatus;