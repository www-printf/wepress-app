import * as React from "react";

function TransactionItem({ date, time, transactionId, bankName, accountNumber, description, papers, amount }) {
  return (
    <article className="flex flex-col w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto text-black min-w-[240px] w-[461px] max-md:max-w-full">
          <time className="max-md:max-w-full">{date} - {time}</time>
          <p className="mt-1.5 font-semibold tracking-tight max-md:max-w-full">
            {transactionId} - {bankName} - {accountNumber} - {description}
          </p>
        </div>
        <div className="flex flex-col self-stretch my-auto font-semibold tracking-tight text-green-700 w-[76px]">
          <p>+ {papers} tờ giấy</p>
          <p className="mt-1.5">({amount}đ)</p>
        </div>
      </div>
      <hr className="mt-2.5 w-full border border-black border-solid min-h-[1px] max-md:max-w-full" />
    </article>
  );
}

export default TransactionItem;