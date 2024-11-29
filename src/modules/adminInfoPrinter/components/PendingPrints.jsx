import * as React from "react";

export default function PendingPrints() {
  const headers = [
    { width: "140px", label: "Thời gian tạo đơn" },
    { width: "90px", label: "ID người in" },
    { width: "190px", label: "Tên file" },
    { width: "65px", label: "Cỡ giấy" },
    { width: "65px", label: "Số trang" },
    { width: "10px", label: "" }
  ];

  const pendingJobs = [
    {
      time: { hour: "HH:MM", date: "DD/MM/YYYY" },
      userId: "AD0001",
      fileName: "Kích hoạt máy in",
      paperSize: "A4",
      pageCount: "14"
    }
    // Add more pending jobs here
  ];

  return (
    <div className="flex overflow-hidden flex-col items-center p-5 bg-white rounded-xl min-w-[240px] w-[690px] max-md:max-w-full">
      <div className="self-stretch text-xl font-bold tracking-tight text-black max-md:max-w-full">
        Các tài liệu đang chờ in
      </div>
      <div className="flex overflow-hidden flex-col mt-2.5 w-full rounded-xl border border-solid border-zinc-200 max-w-[650px] max-md:max-w-full">
        <TableHeader headers={headers} />
        <TableBody pendingJobs={pendingJobs} />
      </div>
      <ViewMoreButton />
    </div>
  );
}

function TableHeader({ headers }) {
  return (
    <div className="flex flex-wrap items-center w-full text-sm font-semibold tracking-tight text-black bg-gray-100 max-md:max-w-full">
      {headers.map((header, index) => (
        <div
          key={index}
          className={`grow shrink gap-2.5 self-stretch p-2.5 my-auto w-[${header.width}]`}
        >
          {header.label}
        </div>
      ))}
    </div>
  );
}

function TableBody({ pendingJobs }) {
  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      {pendingJobs.map((job, index) => (
        <PendingJobRow key={index} job={job} />
      ))}
    </div>
  );
}

function PendingJobRow({ job }) {
  return (
    <div className="flex flex-wrap items-center w-full bg-white border-b border-zinc-200 max-md:max-w-full">
      <div className="flex flex-col grow shrink justify-center self-stretch p-2.5 my-auto text-black whitespace-nowrap w-[140px]">
        <div className="text-xs tracking-normal">{job.time.hour}</div>
        <div className="text-sm">{job.time.date}</div>
      </div>
      <div className="grow shrink gap-2.5 self-stretch p-2.5 my-auto text-sm text-black whitespace-nowrap w-[90px]">
        {job.userId}
      </div>
      <div className="grow shrink gap-2.5 self-stretch p-2.5 my-auto text-sm text-black w-[190px]">
        {job.fileName}
      </div>
      <div className="grow shrink gap-2.5 self-stretch p-2.5 my-auto text-sm text-black whitespace-nowrap w-[65px]">
        {job.paperSize}
      </div>
      <div className="grow shrink gap-2.5 self-stretch p-2.5 my-auto text-sm text-black whitespace-nowrap w-[65px]">
        {job.pageCount}
      </div>
      <div className="flex grow shrink gap-2.5 justify-center items-center self-stretch p-2.5 my-auto w-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e26fc0e0bd613b97794f16b093a586244ee4881f5dd6a2ebd25f1868bfa91b0?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
          alt=""
          className="object-contain self-stretch my-auto w-5 aspect-square"
        />
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