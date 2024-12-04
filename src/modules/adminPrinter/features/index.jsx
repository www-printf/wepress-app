import { useState, useEffect } from "react";
import { fetchPrinters } from "../../../../mock/printer.mock.mjs";
import PrinterCard from '../components/adminPrinter';
import { Pagination, Select } from "flowbite-react";
import { Link } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
const PrinterPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [roomFilter, setRoomFilter] = useState("Tất cả");
  const [statusFilter, setStatusFilter] = useState("Tất cả");
  const [locationFilter, setLocationFilter] = useState("Tất cả");
  const [perPage] = useState(9);

  const [printers, setPrinters] = useState({
    data: [],
    meta: {currentPage: 1, totalPages: 0, total: 0},
  });

  useEffect(() => {
    const filteredData = fetchPrinters({
      page: currentPage,
      perPage,
      room: roomFilter,
      status: statusFilter,
      location: locationFilter,
    });
    setPrinters(filteredData);  
    }, [currentPage, roomFilter, statusFilter, locationFilter, perPage]
  );
  const handleLocationChange = (e) => {
    setLocationFilter(e.target.value); //gọi hàm filter khi thay đổi cơ sở in
    setCurrentPage(1);  // Reset về trang đầu tiên khi thay đổi bộ lọc
  };

  const handleRoomChange = (e) => {
    setRoomFilter(e.target.value); //gọi hàm filter khi thay đổi phòng in
    setCurrentPage(1); 
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value); //gọi hàm filter khi thay đổi trạng thái máy in
    setCurrentPage(1);
  };

  return (
    <div className="p-6 min-h-screen w-auto min-w-[1200px]"> 
      <DashboardHeader></DashboardHeader>
      <div className=" mx-[30px] my-[30px]">
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-4">
            <div className="flex flex-col items-start ml-4">
              <label className="block ml-1 mb-1 text-sm font-medium">Cơ sở</label>
              <Select value={locationFilter} onChange={handleLocationChange}>
                <option value="Tất cả">Tất cả</option>
                <option value="Cơ sở Lý Thường Kiệt">Cơ sở Lý Thường Kiệt</option>
                <option value="Cơ sở Dĩ An">Cơ sở Dĩ An</option>
              </Select>
            </div>
            <div className="flex flex-col items-start">
              <label className="block mb-1 text-sm font-medium">Phòng in</label>
              <Select value={roomFilter} onChange={handleRoomChange}>
                <option value="Tất cả">Tất cả</option>
                <option value="Phòng 101">Phòng 101</option>
                <option value="Phòng 102">Phòng 102</option>
                <option value="Phòng 103">Phòng 103</option>
              </Select>
            </div>
            <div className="flex flex-col items-start ">
              <label className="block mb-1 text-sm font-medium">Tình trạng máy in</label>
              <Select value={statusFilter} onChange={handleStatusChange}>
                <option value="Tất cả">Tất cả</option>
                <option value="Sẵn sàng để in">Sẵn sàng để in</option>            
                <option value="Đang in">Đang in</option>
                <option value="Đang bảo trì">Đang bảo trì</option>
              </Select>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <Link to="/admin/add-printer" className="px-4 py-1 text-center border-2 bg-violet-300 hover:bg-violet-400 hover:border-blue-400 
            rounded-lg font-medium">Thêm máy in</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {printers.data.map((printer) => (
            <PrinterCard key={printer.id} {...printer} /> //hiển thị các component máy in
          ))}
        </div>
        {printers.meta.totalPages > 1 && (
          <div className="flex justify-center mt-6"> 
            <Pagination
              currentPage={printers.meta.currentPage}
              totalPages={printers.meta.totalPages}
              onPageChange={(page) => setCurrentPage(page)} //thanh chọn trang
            />
          </div>
        )}
        
      </div>
    </div>
  );
};

export default PrinterPage;

