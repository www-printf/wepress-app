import * as React from "react";
import HistoryTable from "./HistoryTable";
import {transactionData } from "../../../../mock/transactionHistory.mock.mjs";
import { Link } from "react-router-dom";
function TransactionHistory() {
  return (
    <section className="flex flex-col items-center px-2.5 pt-2.5 pb-5 text-sm text-black bg-white rounded-t-xl border border-solid border-zinc-200 min-w-[240px] w-[625px] max-md:max-w-full">
      <h2 className="font-semibold tracking-tight">Lịch sử giao dịch</h2>
      <HistoryTable 
        headers={["Ngày", "Nội dung", ""]}
        data={transactionData}
        renderRow={(item) => (
          <>
            <div className="gap-1.5 self-stretch p-2.5 my-auto whitespace-nowrap w-[125px]">
              {item.date}
            </div>
            <div className="gap-1.5 self-stretch p-2.5 my-auto min-w-[240px] w-[300px]">
              {item.content}
            </div>
            <div className={`flex-1 shrink gap-1.5 self-stretch p-2.5 my-auto font-semibold tracking-tight ${item.type === 'increase' ? 'text-green-500' : 'text-red-500'} w-[150px]`}>
              {item.amount}
            </div>
          </>
        )}
      />
      <button className="flex gap-2.5 justify-center items-center p-2.5 mt-2.5 font-semibold tracking-tight text-center bg-white rounded-lg border border-solid border-zinc-200 text-zinc-800">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/96ba76ab8a3a78f74793a2e903a37aa018a41ceebe54bd42eb71d587c2dda3f0?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
        <Link to="/user/purchase-history">Xem chi tiết lịch sử giao dịch</Link>
      </button>
    </section>
  );
}

export default TransactionHistory;