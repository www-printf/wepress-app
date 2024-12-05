// import * as React from "react";

// export default function PrinterInfo() {
//   return (
//     <div className="flex overflow-hidden flex-col items-center p-5 w-full bg-white rounded-xl max-md:max-w-full">
//       <div className="flex-1 shrink gap-2.5 self-stretch w-full text-xl font-bold tracking-tight text-black max-md:max-w-full">
//         Thông tin máy in
//       </div>
//       <PrinterInfoContent />
//       <PrinterActions />
//     </div>
//   );
// }

// function PrinterInfoContent() {
//   return (
//     <div className="flex flex-wrap gap-5 justify-center items-start mt-5 max-md:max-w-full">
//       <GeneralInfo />
//       <LocationInfo />
//       <StatusInfo />
//     </div>
//   );
// }

// function GeneralInfo() {
//   const fields = [
//     { label: "Mã máy in", value: "PT0001" },
//     { label: "Hãng sản xuất", value: "Canon" },
//     { label: "Tên máy in", value: "Máy in" },
//     { label: "Model", value: "PIXMA GM2070" }
//   ];

//   return (
//     <div className="flex flex-col w-60 text-sm font-semibold tracking-tight">
//       <div className="text-base font-bold tracking-tight text-black">
//         Thông tin chung
//       </div>
//       {fields.map((field, index) => (
//         <div key={index} className="flex overflow-hidden flex-col mt-2.5 w-full max-w-[240px]">
//           <div className="text-neutral-800 text-opacity-40">
//             {field.label}
//           </div>
//           <div className="overflow-hidden gap-2.5 self-stretch px-2.5 w-full whitespace-nowrap rounded-md border border-solid bg-zinc-200 border-zinc-200 min-h-[36px] text-black text-opacity-40">
//             {field.value}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// function LocationInfo() {
//   return (
//     <div className="flex flex-col w-60 text-sm">
//       <div className="text-base font-bold tracking-tight text-black">
//         Vị trí đặt máy
//       </div>
//       <LocationField label="Cơ sở" value="1" />
//       <LocationField label="Phòng in" value="B1-101" />
//     </div>
//   );
// }

// function LocationField({ label, value }) {
//   return (
//     <div className="flex flex-col mt-2.5 w-full">
//       <div className="font-semibold tracking-tight text-black text-opacity-40">
//         {label}
//       </div>
//       <div className="flex gap-5 justify-between items-center px-2.5 py-1.5 mt-1.5 w-full whitespace-nowrap rounded-md border border-solid bg-zinc-200 border-white border-opacity-40 min-h-[30px] text-neutral-800 text-opacity-40">
//         <div className="self-stretch my-auto w-[180px]">{value}</div>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/26294e7adb45ab69335f946ab6b27144c7ee13a667af288d0819219fe5bc0e1e?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
//           alt=""
//           className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
//         />
//       </div>
//     </div>
//   );
// }

// function StatusInfo() {
//   const paperSizes = [
//     { size: "A3", active: true },
//     { size: "A4", active: true },
//     { size: "A5", active: false }
//   ];

//   const paperCounts = [
//     { size: "A3", current: "34", max: "100" },
//     { size: "A4", current: "102", max: "200" },
//     { size: "A5", current: "--", max: "--" }
//   ];

//   return (
//     <div className="flex overflow-hidden flex-col min-w-[240px] max-md:max-w-full">
//       <div className="text-base font-bold tracking-tight text-black">
//         Tình trạng hiện tại
//       </div>
//       <div className="flex flex-wrap gap-5 items-start mt-2.5 text-sm font-semibold tracking-tight max-md:max-w-full">
//         <PaperStatus paperSizes={paperSizes} paperCounts={paperCounts} />
//         <ConnectionStatus />
//       </div>
//     </div>
//   );
// }

// function PaperStatus({ paperSizes, paperCounts }) {
//   return (
//     <div className="flex flex-col min-w-[240px] w-[275px]">
//       <div className="flex flex-col justify-center self-start text-black text-opacity-30">
//         <div>Các cỡ giấy được hỗ trợ</div>
//         <div className="flex gap-2.5 justify-center items-center whitespace-nowrap">
//           {paperSizes.map((paper, index) => (
//             <div key={index} className="flex gap-2.5 items-center self-stretch px-2.5 py-2 my-auto rounded-md border border-solid bg-zinc-200 border-zinc-200">
//               <img
//                 loading="lazy"
//                 src={`http://b.io/ext_${paper.active ? "3" : "4"}-`}
//                 alt=""
//                 className="object-contain shrink-0 self-stretch my-auto w-2.5 aspect-square"
//               />
//               <div className="self-stretch my-auto">{paper.size}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {paperCounts.map((paper, index) => (
//         <PaperCountRow
//           key={index}
//           size={paper.size}
//           current={paper.current}
//           max={paper.max}
//         />
//       ))}
//       <div className="flex justify-between items-end mt-2.5 max-w-full w-[275px]">
//         <div className="flex overflow-hidden flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
//           <div className="text-neutral-800 text-opacity-40">Lượng mực </div>
//           <div className="overflow-hidden gap-2.5 self-stretch px-2.5 w-full whitespace-nowrap rounded-md border border-solid bg-zinc-200 border-zinc-200 min-h-[36px] text-black text-opacity-40">
//             64%
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function PaperCountRow({ size, current, max }) {
//   return (
//     <div className="flex gap-2.5 items-start mt-2.5 max-w-full w-[275px]">
//       <div className="flex overflow-hidden flex-col w-[120px]">
//         <div className="text-neutral-800 text-opacity-40">
//           Số tờ {size} hiện có
//         </div>
//         <div className="overflow-hidden gap-2.5 self-stretch px-2.5 w-full whitespace-nowrap rounded-md border border-solid bg-zinc-200 border-zinc-200 min-h-[36px] text-black text-opacity-40">
//           {current}
//         </div>
//       </div>
//       <div className="flex overflow-hidden flex-col w-[120px]">
//         <div className="text-neutral-800 text-opacity-40">
//           Sức chứa tờ {size}
//         </div>
//         <div className="overflow-hidden gap-2.5 self-stretch px-2.5 w-full whitespace-nowrap rounded-md border border-solid bg-zinc-200 border-zinc-200 min-h-[36px] text-black text-opacity-40">
//           {max}
//         </div>
//       </div>
//     </div>
//   );
// }

// function ConnectionStatus() {
//   return (
//     <div className="flex flex-col w-60">
//       <div className="flex flex-col w-60 max-w-full">
//         <div className="flex overflow-hidden flex-col w-full max-w-[240px]">
//           <div className="text-neutral-800 text-opacity-40">Kiểu kết nối</div>
//           <div className="overflow-hidden gap-2.5 self-stretch px-2.5 w-full rounded-md border border-solid bg-zinc-200 border-zinc-200 min-h-[36px] text-black text-opacity-40">
//             Có dây
//           </div>
//         </div>
//         <div className="flex overflow-hidden flex-col mt-2.5 w-full max-w-[240px]">
//           <div className="text-neutral-800 text-opacity-40">Địa chỉ IP</div>
//           <div className="overflow-hidden gap-2.5 self-stretch px-2.5 w-full whitespace-nowrap rounded-md border border-solid bg-zinc-200 border-zinc-200 min-h-[36px] text-black text-opacity-40">
//             Value
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function PrinterActions() {
//   const actions = [
//     { label: "Cập nhật thông tin", className: "bg-white" },
//     { label: "Bảo trì máy in", className: "bg-yellow-100" },
//     { label: "Xóa máy in", className: "bg-red-500 text-white" }
//   ];

//   return (
//     <div className="flex gap-2.5 items-start mt-5 text-sm font-semibold tracking-tight text-center text-zinc-800 max-md:max-w-full">
//       {actions.map((action, index) => (
//         <button
//           key={index}
//           className={`flex gap-2.5 justify-center items-center p-2.5 rounded-lg border border-solid border-zinc-200 w-[150px] ${action.className}`}
//         >
//           <div className="gap-2.5 self-stretch my-auto">{action.label}</div>
//         </button>
//       ))}
//     </div>
//   );
// }

import React, { useState } from "react";

export default function PrinterInfo() {
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);
  const [printerInfo, setPrinterInfo] = useState({
    machineCode: "PT0001",
    manufacturer: "Canon",
    printerName: "Máy in",
    model: "PIXMA GM2070",
    location: {
      facility: "1",
      room: "B1-101"
    },
    status: {
      isOnline: true,
      errorMessage: "",
      lastMaintenance: "2024-10-01",
      paperSizes: [
        { size: "A4", active: true },
        { size: "A3", active: false },
        { size: "A5", active: true }
      ],
      paperCounts: [
        { size: "A4", current: 100, max: 500 },
        { size: "A3", current: 50, max: 200 }
      ],
      inkLevel: "64%"
    }
  });

  const togglePrinterStatus = () => {
    setIsMaintenanceMode((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("status")) {
      const [key] = name.split(".").slice(1);
      setPrinterInfo((prevInfo) => ({
        ...prevInfo,
        status: {
          ...prevInfo.status,
          [key]: value
        }
      }));
    } else if (name.includes("location")) {
      const [key] = name.split(".").slice(1);
      setPrinterInfo((prevInfo) => ({
        ...prevInfo,
        location: {
          ...prevInfo.location,
          [key]: value
        }
      }));
    } else {
      setPrinterInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value
      }));
    }
  };

  return (
    <div className="flex overflow-hidden flex-col items-center p-5 w-full bg-white rounded-xl max-md:max-w-full">
      <div className="flex-1 shrink gap-2.5 self-stretch w-full text-xl font-bold tracking-tight text-black max-md:max-w-full">
        Thông tin máy in
      </div>
      <PrinterInfoContent
        isMaintenanceMode={isMaintenanceMode}
        printerInfo={printerInfo}
        handleInputChange={handleInputChange}
      />
      <PrinterActions
        isMaintenanceMode={isMaintenanceMode}
        togglePrinterStatus={togglePrinterStatus}
      />
    </div>
  );
}
function PrinterInfoContent({ isMaintenanceMode, printerInfo, handleInputChange }) {
  return (
    <div className="flex flex-wrap gap-5 justify-center items-start mt-5 max-md:max-w-full">
      <GeneralInfo
        isMaintenanceMode={isMaintenanceMode}
        printerInfo={printerInfo}
        handleInputChange={handleInputChange}
      />
      <LocationInfo
        isMaintenanceMode={isMaintenanceMode}
        printerInfo={printerInfo}
        handleInputChange={handleInputChange}
      />
      <StatusInfo
        isMaintenanceMode={isMaintenanceMode}
        printerInfo={printerInfo}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

function GeneralInfo({ isMaintenanceMode, printerInfo, handleInputChange }) {
  const fields = [
    { label: "Mã máy in", name: "machineCode", value: printerInfo.machineCode },
    { label: "Hãng sản xuất", name: "manufacturer", value: printerInfo.manufacturer },
    { label: "Tên máy in", name: "printerName", value: printerInfo.printerName },
    { label: "Model", name: "model", value: printerInfo.model },
  ];

  return (
    <div className="flex flex-col w-60 text-sm font-semibold tracking-tight">
      <div className="text-base font-bold tracking-tight text-black">
        Thông tin chung
      </div>
      {fields.map((field, index) => (
        <div key={index} className="flex overflow-hidden flex-col mt-2.5 w-full max-w-[240px]">
          <div className="text-neutral-800 text-opacity-40">{field.label}</div>
          <input
            type="text"
            name={field.name}
            value={field.value}
            onChange={handleInputChange}
            disabled={!isMaintenanceMode}  // Disable the input when not in maintenance mode
            className={`overflow-hidden gap-2.5 self-stretch px-2.5 w-full whitespace-nowrap rounded-md border border-solid ${isMaintenanceMode ? "bg-white" : "bg-gray-200 cursor-not-allowed"} min-h-[36px] text-black text-opacity-40`}
          />
        </div>
      ))}
    </div>
  );
}

function LocationInfo({ isMaintenanceMode, printerInfo, handleInputChange }) {
  return (
    <div className="flex flex-col w-60 text-sm">
      <div className="text-base font-bold tracking-tight text-black">
        Vị trí đặt máy
      </div>
      <LocationField
        label="Cơ sở"
        name="location.facility"
        value={printerInfo.location.facility}
        editable={isMaintenanceMode}
        handleInputChange={handleInputChange}
      />
      <LocationField
        label="Phòng in"
        name="location.room"
        value={printerInfo.location.room}
        editable={isMaintenanceMode}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

function LocationField({ label, name, value, editable, handleInputChange }) {
  return (
    <div className="flex flex-col mt-2.5 w-full">
      <div className="font-semibold tracking-tight text-black text-opacity-40">
        {label}
      </div>
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleInputChange}
        disabled={!editable}  // Disable the input when not editable
        className={`flex gap-5 justify-between items-center px-2.5 py-1.5 mt-1.5 w-full whitespace-nowrap rounded-md border border-solid ${editable ? "bg-white" : "bg-gray-200 cursor-not-allowed"} min-h-[30px] text-neutral-800 text-opacity-40`}
      />
    </div>
  );
}

function StatusInfo({ isMaintenanceMode, printerInfo, handleInputChange }) {
  return (
    <div className="flex flex-col min-w-[240px] w-[275px]">
      {/* Tiêu đề "Tình trạng hiện tại" */}
      <div className="text-xl font-bold tracking-tight text-black mb-2.5">
        Tình trạng hiện tại
      </div>
      
      <div className="flex flex-col justify-center self-start text-black text-opacity-30">
        <div>Các cỡ giấy được hỗ trợ</div>
        <div className="flex gap-2.5 justify-center items-center whitespace-nowrap">
          {printerInfo.status.paperSizes.map((paper, index) => (
            <div key={index} className="flex gap-2.5 items-center self-stretch px-2.5 py-2 my-auto rounded-md border border-solid bg-zinc-200 border-zinc-200">
              <img
                loading="lazy"
                src={`http://b.io/ext_${paper.active ? "3" : "4"}-`}
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-2.5 aspect-square"
              />
              <div className="self-stretch my-auto">{paper.size}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Hiển thị số lượng giấy hiện tại */}
      {printerInfo.status.paperCounts.map((paper, index) => (
        <div key={index} className="flex justify-between items-center mt-2.5">
          <div>{paper.size}</div>
          <div>{paper.current}/{paper.max}</div>
        </div>
      ))}
      
      {/* Lượng mực */}
      <div className="flex justify-between items-end mt-2.5 max-w-full w-[275px]">
        <div className="flex overflow-hidden flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
          <div className="text-neutral-800 text-opacity-40">Lượng mực</div>
          <div className="overflow-hidden gap-2.5 self-stretch px-2.5 w-full whitespace-nowrap rounded-md border border-solid bg-zinc-200 border-zinc-200 min-h-[36px] text-black text-opacity-40">
            {printerInfo.status.inkLevel}
          </div>
        </div>
      </div>
    </div>
  );
}

function PrinterActions({ isMaintenanceMode, togglePrinterStatus }) {
  return (
    <div className="flex flex-row gap-3 mt-5">
      <button onClick={togglePrinterStatus} className={`px-4 py-2 rounded-md text-white ${
        isMaintenanceMode ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"}`}>
        {isMaintenanceMode ? "Kích hoạt máy in" : "Bảo trì máy in"}
      </button>
    </div>
  );
}