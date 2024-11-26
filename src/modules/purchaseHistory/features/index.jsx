import React, { useState } from "react";
import icon_filter from "../../../assets/icons/icon_filter.png"

const TransactionHistory = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Dữ liệu mẫu
  const transactions = [
    { id: 1, date: "2024-11-26T10:00:00", bank: "Ngân hàng A", account: "123456", content: "2211709", amount: 100, money: 100000},
    { id: 2, date: "2024-11-25T09:30:00", bank: "Ngân hàng B", account: "654321", content: "2211729", amount: 50, money: 100000},
    { id: 3, date: "2024-11-24T14:00:00", bank: "Ngân hàng C", account: "111222", content: "2210453", amount: 200, money: 100000},
    { id: 4, date: "2024-11-23T15:00:00", bank: "Ngân hàng D", account: "333444", content: "2211205", amount: 75, money: 100000},
    { id: 5, date: "2024-11-26T10:00:00", bank: "Ngân hàng A", account: "123456", content: "2211709", amount: 100, money: 100000},
    { id: 6, date: "2024-11-25T09:30:00", bank: "Ngân hàng B", account: "654321", content: "2211729", amount: 50, money: 100000},
    { id: 7, date: "2024-11-24T14:00:00", bank: "Ngân hàng C", account: "111222", content: "2210453", amount: 200, money: 100000},
    { id: 8, date: "2024-11-23T15:00:00", bank: "Ngân hàng D", account: "333444", content: "2211205", amount: 80, money: 100000},
    { id: 9, date: "2024-11-26T10:00:00", bank: "Ngân hàng A", account: "123456", content: "2211709", amount: 100, money: 100000},
    { id: 10, date: "2024-11-25T09:30:00", bank: "Ngân hàng B", account: "654321", content: "2211729", amount: 10, money: 100000},
    { id: 11, date: "2024-11-24T14:00:00", bank: "Ngân hàng C", account: "111222", content: "2210453", amount: 200, money: 100000},
    { id: 12, date: "2024-11-23T15:00:00", bank: "Ngân hàng D", account: "333444", content: "2211205", amount: 5, money: 100000},
    // Thêm dữ liệu mẫu khác nếu cần
  ];

  const handleSearch = () => {
    if (!startDate || !endDate) {
      setFilteredTransactions([]);
      return;
    }

    const filtered = transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      const start = new Date(startDate);
      const end = new Date(endDate);
      return transactionDate >= start && transactionDate <= end;
    });

    setFilteredTransactions(filtered);
  };

  const displayedTransactions = filteredTransactions.length
    ? filteredTransactions
    : transactions;

  return (
    <div className="bg-gray-100">
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Xem lịch sử giao dịch</h1>

        <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
          <h2 className="text-lg font-semibold mb-4 border-b-2 border-black">Lịch sử giao dịch</h2>
          <div className="flex items-center space-x-4">
            {/* Ngày bắt đầu */}
            <div className="w-[400px]">
              <label className="text-gray-700 font-semibold mb-2 block">Từ ngày:</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            {/* Ngày kết thúc */}
            <div className="w-[400px]">
              <label className="text-gray-700 font-semibold mb-2 block">Đến ngày:</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            {/* Nút Tra cứu */}
            <div>
              <button className="flex w-[120px] px-4 py-2 border rounded-md text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 font-semibold transition" onClick={handleSearch}>
                <img src={icon_filter} className="w-[20px] h-[20px] mr-2 invert"></img>
                Tra cứu        
              </button>
            </div>
          </div>
        </div>


        {/* Kết quả giao dịch */}
        <div className="bg-white p-4 shadow rounded-lg">
          {filteredTransactions.length === 0 && startDate && endDate ? (
            <p className="text-gray-600 italic text-center">
              Bạn chưa có giao dịch trong khoảng thời gian tra cứu
            </p>
          ) : (
            <ul>
              {displayedTransactions.slice(0, showAll ? displayedTransactions.length : 10).map((transaction) => (
                <li key={transaction.id} className="border-b py-2">
                  <p>
                  <div className="flex justify-between">
                    <span>{new Date(transaction.date).toLocaleString()}</span>
                    <span className="float-right text-green-700">{`+ ${transaction.amount} tờ giấy`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">[{transaction.id}] - [{transaction.bank}] - [{transaction.account}] - {transaction.content}</span>
                    <span className="font-semibold text-green-700">{`${transaction.money.toLocaleString()} VNĐ`}</span>
                  </div>
                                     
                  </p>
                </li>
              ))}
            </ul>
          )}
          {displayedTransactions.length > 10 && filteredTransactions.length !== 0 && (
            <button
              className="block mx-auto mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Thu gọn" : "Xem thêm"}
            </button>
          )}
        </div>
      </div>
    </div>
      
  );
};

export default TransactionHistory;

