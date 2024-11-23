import { useState } from "react";
import { fetchPrinters } from "../../../../mock/printer.mock.mjs";
import PrinterCard from '../components/printerCard';
import { Pagination, Select } from "flowbite-react";

const PrinterPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [roomFilter, setRoomFilter] = useState("Toàn bộ");
  const [statusFilter, setStatusFilter] = useState("Toàn bộ");
  const [perPage] = useState(9);

  const { data, meta } = fetchPrinters({
    page: currentPage,
    perPage,
    room: roomFilter,
    status: statusFilter,
  });

  const handleRoomChange = (e) => {
    setRoomFilter(e.target.value); //gọi hàm filter khi thay đổi phòng in
    setCurrentPage(1); // Reset về trang đầu tiên khi thay đổi bộ lọc
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value); //gọi hàm filter khi thay đổi trạng thái máy in
    setCurrentPage(1);
  };

  return (
    <div className="p-6 bg-gray-100"> 
      <div className="mx-[80px] my-[30px]">
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-4">
            <div className="flex flex-col items-start ml-4">
              <label className="block ml-1 mb-1 text-sm font-medium">Phòng in</label>
              <Select value={roomFilter} onChange={handleRoomChange}>
                <option value="Toàn bộ">Tất cả</option>
                <option value="Phòng 101">Phòng 101</option>
                <option value="Phòng 102">Phòng 102</option>
                <option value="Phòng 103">Phòng 103</option>
              </Select>
            </div>
            <div className="flex flex-col items-start ">
              <label className="block mb-1 text-sm font-medium">Tình trạng máy in</label>
              <Select value={statusFilter} onChange={handleStatusChange}>
                <option value="Toàn bộ">Toàn bộ</option>
                <option value="Sẵn sàng để in">Sẵn sàng để in</option>            
                <option value="Đang in">Đang in</option>
                <option value="Đang bảo trì">Đang bảo trì</option>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((printer) => (
            <PrinterCard key={printer.id} {...printer} /> //hiển thị các component máy in
          ))}
        </div>

        <div className="flex justify-center mt-6"> 
          <Pagination
            currentPage={meta.currentPage}
            totalPages={meta.totalPages}
            onPageChange={(page) => setCurrentPage(page)} //thanh chọn trang
          />
        </div>
      </div>
    </div>
  );
};

export default PrinterPage;
