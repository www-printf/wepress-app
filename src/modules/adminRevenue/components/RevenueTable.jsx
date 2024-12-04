import React, { useState, useEffect } from 'react';
import { getTransactions } from '../../../mock/revenueAPI';

const RevenueTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [visibleItems, setVisibleItems] = useState(10);
  const [isExpanded, setIsExpanded] = useState(false);
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTransactions(1, 50);
      setTransactions(response.data);
      setMeta(response.meta);
    };
    fetchData();
  }, []);

  const handleLoadMore = () => {
    if (visibleItems + 10 >= transactions.length) {
      setVisibleItems(transactions.length);
      setIsExpanded(true);
    } else {
      setVisibleItems(visibleItems + 10);
    }
  };

  const handleCollapse = () => {
    setVisibleItems(10);
    setIsExpanded(false);
  };

  return (
    <div>
      <div className="flex flex-col overflow-hidden gap-10 items-center justify-between px-2.5 mt-2.5 w-full max-md:max-w-full">
        <div className="flex overflow-hidden flex-col w-full text-black rounded-lg border border-solid border-zinc-200 max-md:max-w-full">
          {/* Header */}
          <div className="flex overflow-hidden flex-wrap items-center text-sm font-semibold tracking-tight max-md:max-w-full">
            <div className="gap-2.5 self-stretch p-2.5 my-auto bg-gray-100 w-[300px]">Thời gian</div>
            <div className="self-stretch p-2.5 my-auto bg-gray-100 w-[300px]">ID người dùng</div>
            <div className="self-stretch p-2.5 my-auto bg-gray-100 w-[200px]">Mua gói</div>
            <div className="self-stretch p-2.5 my-auto bg-gray-100 w-[200px]">Số tiền</div>
          </div>

          {/* Data Rows */}
          {transactions.slice(0, visibleItems).map((transaction) => (
            <div key={transaction.id} className="flex flex-wrap items-center bg-white border-r border-b border-l border-zinc-200 max-md:max-w-full">
              <div className="w-[300px] p-2.5">
                <div>{transaction.time}</div>
                <div>{transaction.date}</div>
              </div>
              <div className="w-[300px] p-2.5">{transaction.userId}</div>
              <div className="w-[200px] p-2.5">{transaction.package}</div>
              <div className="w-[200px] p-2.5">{transaction.amount}</div>
            </div>
          ))}
        </div>

        <button
          onClick={isExpanded ? handleCollapse : handleLoadMore}
          className="mt-4 p-2.5 text-sm font-semibold bg-gray-200 rounded-lg"
        >
          {isExpanded ? 'Thu gọn' : 'Xem thêm'}
        </button>
      </div>
    </div>
  );
};

export default RevenueTable;
