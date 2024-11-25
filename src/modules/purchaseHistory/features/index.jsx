import * as React from "react";
import TransactionFilter from "../components/TransactionFilter";
import TransactionItem from "../components/TransactionItem";

const transactions = [
  {
    id: 1,
    date: "DD/MM/YYYY",
    time: "HH:MM",
    transactionId: "[ID Giao dịch]",
    bankName: "[Tên ngân hàng]",
    accountNumber: "[Số tài khoản]",
    description: "[Nội dung chuyển tiền]",
    papers: "XX",
    amount: "YY.YYY"
  },
  {
    id: 2,
    date: "DD/MM/YYYY",
    time: "HH:MM", 
    transactionId: "[ID Giao dịch]",
    bankName: "[Tên ngân hàng]",
    accountNumber: "[Số tài khoản]",
    description: "[Nội dung chuyển tiền]",
    papers: "XX",
    amount: "YY.YYY"
  },
  {
    id: 3,
    date: "DD/MM/YYYY",
    time: "HH:MM",
    transactionId: "[ID Giao dịch]",
    bankName: "[Tên ngân hàng]",
    accountNumber: "[Số tài khoản]",
    description: "[Nội dung chuyển tiền]",
    papers: "XX",
    amount: "YY.YYY"
  },
  {
    id: 4,
    date: "DD/MM/YYYY",
    time: "HH:MM",
    transactionId: "[ID Giao dịch]",
    bankName: "[Tên ngân hàng]",
    accountNumber: "[Số tài khoản]",
    description: "[Nội dung chuyển tiền]",
    papers: "XX",
    amount: "YY.YYY"
  },
  {
    id: 5,
    date: "DD/MM/YYYY",
    time: "HH:MM",
    transactionId: "[ID Giao dịch]",
    bankName: "[Tên ngân hàng]",
    accountNumber: "[Số tài khoản]",
    description: "[Nội dung chuyển tiền]",
    papers: "XX",
    amount: "YY.YYY"
  },
  {
    id: 6,
    date: "DD/MM/YYYY",
    time: "HH:MM",
    transactionId: "[ID Giao dịch]",
    bankName: "[Tên ngân hàng]",
    accountNumber: "[Số tài khoản]",
    description: "[Nội dung chuyển tiền]",
    papers: "XX",
    amount: "YY.YYY"
  }
];

function TransactionHistory() {
  return (
    <main className="flex overflow-hidden flex-col items-center px-8 py-10 max-md:px-5 bg-gray-100">
      <h1 className="text-4xl font-bold tracking-tighter text-center text-black">
        Xem lịch sử giao dịch
      </h1>
      <section className="flex flex-col mt-5 max-w-full w-[720px]">
        <TransactionFilter />
        <section className="flex overflow-hidden flex-col p-5 mt-2.5 w-full text-sm bg-white rounded-xl border border-solid border-zinc-200 max-md:max-w-full">
          {transactions.map(transaction => (
            <TransactionItem key={transaction.id} {...transaction} />
          ))}
          <button className="flex gap-2.5 justify-center items-center self-center p-2.5 mt-2.5 font-semibold tracking-tight text-center bg-white rounded-lg border border-solid border-zinc-200 text-zinc-800">
            Xem thêm
          </button>
        </section>
      </section>
    </main>
  );
}

export default TransactionHistory;