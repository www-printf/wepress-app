import React from 'react';

const transactions = [
  { time: "HH:MM", date: "DD/MM/YYYY", userId: "[ID người dùng]", package: "[Tên gói]", amount: "XX.XXXđ" },
  { time: "HH:MM", date: "DD/MM/YYYY", userId: "[ID người dùng]", package: "[Tên gói]", amount: "XX.XXXđ" },
  { time: "HH:MM", date: "DD/MM/YYYY", userId: "[ID người dùng]", package: "[Tên gói]", amount: "XX.XXXđ" },
  { time: "HH:MM", date: "DD/MM/YYYY", userId: "[ID người dùng]", package: "[Tên gói]", amount: "XX.XXXđ" },
  { time: "HH:MM", date: "DD/MM/YYYY", userId: "[ID người dùng]", package: "[Tên gói]", amount: "XX.XXXđ" }
];

export default function RevenueTable() {
  return (
    <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[500px] max-md:max-w-full">
      <div className="flex overflow-hidden flex-col w-full text-black rounded-lg border border-solid border-zinc-200 max-md:max-w-full">
        <div className="flex overflow-hidden flex-wrap items-center text-sm font-semibold tracking-tight max-md:max-w-full">
          <div className="gap-2.5 self-stretch p-2.5 my-auto bg-gray-100 w-[150px]">Thời gian</div>
          <div className="self-stretch p-2.5 my-auto bg-gray-100 w-[150px]">ID người dùng</div>
          <div className="self-stretch p-2.5 my-auto bg-gray-100 w-[100px]">Mua gói</div>
          <div className="self-stretch p-2.5 my-auto bg-gray-100 w-[100px]">Số tiền</div>
        </div>
        {transactions.map((transaction, index) => (
          <div key={index} className="flex flex-wrap items-center w-full max-md:max-w-full">
            <div className="flex flex-col grow shrink justify-center self-stretch p-2.5 my-auto whitespace-nowrap w-[130px]">
              <div className="text-xs tracking-normal">{transaction.time}</div>
              <div className="text-sm">{transaction.date}</div>
            </div>
            <div className="grow shrink self-stretch p-2.5 my-auto text-sm w-[130px]">{transaction.userId}</div>
            <div className="grow shrink self-stretch p-2.5 my-auto w-20 text-sm">{transaction.package}</div>
            <div className="grow shrink self-stretch p-2.5 my-auto w-20 text-sm whitespace-nowrap">{transaction.amount}</div>
          </div>
        ))}
      </div>
      <button className="flex gap-2.5 justify-center items-center self-center p-2.5 mt-2.5 text-sm font-semibold tracking-tight text-center bg-white rounded-lg border border-solid border-zinc-200 text-zinc-800">
        <div className="gap-2.5 self-stretch my-auto">Xem thêm</div>
      </button>
    </div>
  );
}