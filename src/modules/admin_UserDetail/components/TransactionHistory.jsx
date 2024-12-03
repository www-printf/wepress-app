import * as React from "react";
import HistoryTable from "./HistoryTable";

const transactionData = [
  {
    date: "DD/MM/YYYY",
    content: "Mua thêm giấy in",
    amount: "+ 50 trang giấy",
    type: "increase"
  },
  {
    date: "DD/MM/YYYY", 
    content: "In tài liệu [file name].pdf",
    amount: "- 27 trang giấy",
    type: "decrease"
  },
  {
    date: "DD/MM/YYYY",
    content: "In tài liệu [file name].pdf", 
    amount: "- 18 trang giấy",
    type: "decrease"
  },
  {
    date: "DD/MM/YYYY",
    content: "Mua thêm giấy in",
    amount: "+ 20 trang giấy", 
    type: "increase"
  },
  {
    date: "DD/MM/YYYY",
    content: "In tài liệu [file name].pdf",
    amount: "- 14 trang giấy",
    type: "decrease"
  }
];

function TransactionHistory() {
  return (
    <section className="flex flex-col items-center px-2.5 pt-2.5 pb-5 text-sm text-black bg-white rounded-xl border border-solid border-zinc-200 min-w-[240px] w-[1000px] max-md:max-w-full">
      <h2 className="font-semibold tracking-tight">Lịch sử giao dịch</h2>
      <HistoryTable 
        headers={["Ngày", "Nội dung", ""]}
        data={transactionData}
        renderRow={(item) => (
          <>
            <div className="gap-1.5 self-stretch p-2.5 my-auto whitespace-nowrap w-[300px]">
              {item.date}
            </div>
            <div className="gap-1.5 self-stretch p-2.5 my-auto min-w-[240px] w-[300px]">
              {item.content}
            </div>
            <div className={`flex-1 shrink gap-1.5 self-stretch p-2.5 my-auto font-semibold tracking-tight ${item.type === 'increase' ? 'text-green-500' : 'text-red-500'} w-[300px]`}>
              {item.amount}
            </div>
          </>
        )}
      />
    </section>
  );
}

export default TransactionHistory;