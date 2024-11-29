import * as React from "react";

export default function MaintenanceHistory() {
  const headers = [
    { width: "120px", label: "Thời gian" },
    { width: "75px", label: "ID SPSO" },
    { width: "150px", label: "Nội dung" }
  ];

  const maintenanceRecords = [
    {
      time: { hour: "HH:MM", date: "DD/MM/YYYY" },
      spsoId: "AD0001",
      content: "Kích hoạt máy in"
    }
    // Add more maintenance records here
  ];

  return (
    <div className="flex overflow-hidden flex-col items-center p-5 text-black bg-white rounded-xl min-w-[240px] w-[385px]">
      <div className="self-stretch text-xl font-bold tracking-tight">
        Lịch sử chỉnh sửa - bảo trì
      </div>
      <div className="flex overflow-hidden flex-col mt-2.5 w-full rounded-xl border border-solid border-zinc-200 max-w-[345px]">
        <TableHeader headers={headers} />
        <TableBody records={maintenanceRecords} />
      </div>
      <ViewMoreButton />
    </div>
  );
}

function TableHeader({ headers }) {
  return (
    <div className="flex items-center w-full text-sm font-semibold tracking-tight">
      {headers.map((header, index) => (
        <div
          key={index}
          className={`gap-2.5 self-stretch p-2.5 my-auto bg-gray-100 w-[${header.width}]`}
        >
          {header.label}
        </div>
      ))}
    </div>
  );
}

function TableBody({ records }) {
  return (
    <div className="flex flex-col w-full">
      {records.map((record, index) => (
        <MaintenanceRecord key={index} record={record} />
      ))}
    </div>
  );
}

function MaintenanceRecord({ record }) {
  return (
    <div className="flex items-center w-full bg-white border-b border-zinc-200">
      <div className="flex flex-col justify-center self-stretch p-2.5 my-auto whitespace-nowrap w-[120px]">
        <div className="text-xs tracking-normal">{record.time.hour}</div>
        <div className="text-sm">{record.time.date}</div>
      </div>
      <div className="gap-2.5 self-stretch p-2.5 my-auto text-sm whitespace-nowrap w-[75px]">
        {record.spsoId}
      </div>
      <div className="gap-2.5 self-stretch p-2.5 my-auto text-sm w-[150px]">
        {record.content}
      </div>
    </div>
  );
}

function ViewMoreButton() {
  return (
    <button className="flex gap-2.5 justify-center items-center p-2.5 mt-2.5 text-sm font-semibold tracking-tight text-center bg-white rounded-lg border border-solid border-zinc-200 text-zinc-800">
      <div className="gap-2.5 self-stretch my-auto">Xem thêm</div>
    </button>
  );
}