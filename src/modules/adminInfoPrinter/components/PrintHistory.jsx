import * as React from "react";

export default function PrintHistory() {
  const headers = [
    { width: "110px", label: "Thời gian" },
    { width: "90px", label: "Mã đơn in" },
    { width: "90px", label: "ID người in" },
    { width: "190px", label: "Tên file" },
    { width: "65px", label: "Cỡ giấy" },
    { width: "65px", label: "Số trang" },
    { width: "140px", label: "Tình trạng" },
    { width: "10px", label: "" }
  ];

  const printJobs = [
    {
      time: { hour: "HH:MM", date: "DD/MM/YYYY" },
      orderId: "IN1341",
      userId: "SV0001",
      fileName: "example_document.pdf",
      paperSize: "A4",
      pageCount: "36",
      status: { type: "printing", label: "Đang in" }
    }
    // Add more print jobs here
  ];

  return (
    <div className="flex overflow-hidden flex-col items-center p-5 mt-5 w-full bg-white rounded-xl max-md:max-w-full">
      <div className="self-stretch text-xl font-bold tracking-tight text-black max-md:max-w-full">
        Lịch sử in ấn
      </div>
      <div className="flex overflow-hidden flex-col mt-2.5 max-w-full rounded-xl border border-solid border-zinc-200 w-[870px]">
        <TableHeader headers={headers} />
        <TableBody printJobs={printJobs} />
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

function TableBody({ printJobs }) {
  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      {printJobs.map((job, index) => (
        <PrintJobRow key={index} job={job} />
      ))}
    </div>
  );
}

function PrintJobRow({ job }) {
  return (
    <div className="flex flex-wrap items-center w-full bg-white border-b border-zinc-200 max-md:max-w-full">
      <div className="flex flex-col grow shrink justify-center self-stretch p-2.5 my-auto text-black whitespace-nowrap w-[110px]">
        <div className="text-xs tracking-normal">{job.time.hour}</div>
        <div className="text-sm">{job.time.date}</div>
      </div>
      <div className="grow shrink self-stretch p-2.5 my-auto text-sm text-black whitespace-nowrap w-[90px]">
        {job.orderId}
      </div>
      <div className="grow shrink gap-2.5 self-stretch p-2.5 my-auto text-sm text-black whitespace-nowrap w-[90px]">
        {job.userId}
      </div>
      <div className="grow shrink gap-2.5 self-stretch p-2.5 my-auto text-sm text-black whitespace-nowrap w-[190px]">
        {job.fileName}
      </div>
      <div className="grow shrink gap-2.5 self-stretch p-2.5 my-auto text-sm text-black whitespace-nowrap w-[65px]">
        {job.paperSize}
      </div>
      <div className="grow shrink gap-2.5 self-stretch p-2.5 my-auto text-sm text-black whitespace-nowrap w-[65px]">
        {job.pageCount}
      </div>
      <StatusCell status={job.status} />
      <div className="flex grow shrink gap-2.5 justify-center items-center self-stretch p-2.5 my-auto w-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bbe65b6b5d1b0d4fb6fe4fc9050e12eab3d39271d685db13f8a8f55f4856e4f?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
          alt=""
          className="object-contain self-stretch my-auto w-5 aspect-square"
        />
      </div>
    </div>
  );
}

function StatusCell({ status }) {
  return (
    <div className="flex grow shrink gap-2.5 items-center self-stretch p-2.5 my-auto w-[140px]">
      <div className="flex gap-2.5 justify-center items-center self-stretch px-2.5 my-auto">
        <div className="flex gap-2 items-center self-stretch my-auto w-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6856b1c9da181a365fe9a6feaf51d60ef31a870e6e998637820169a0d8e60f84?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
            alt=""
            className="object-contain self-stretch my-auto w-5 aspect-square stroke-[2px] stroke-yellow-400"
          />
        </div>
        <div className="self-stretch my-auto text-sm text-black">
          {status.label}
        </div>
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