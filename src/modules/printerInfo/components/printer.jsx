import { Progress } from 'flowbite-react';
import printer_img from '../../../assets/images/printer_img2.png';
import { Link } from 'react-router-dom';

const PrinterDetails = ({ printer }) => {
  const statusColors = {
    "Sẵn sàng để in": "bg-green-500",
    "Đang bảo trì": "bg-red-500",
    "Đang in": "bg-yellow-500",
  };

  if (!printer) {
    return <div>Không tìm thấy thông tin máy in!</div>;
  }

  return (
    <div>
      <div className="px-10 py-8 shadow-md rounded-lg bg-white m-4 border border-gray-300 justify-items-center">
          <div className="flex items-start mb-4 mt-2">
            <img src={printer_img} alt="Printer" className="w-[200px] h-[200px] mr-4" />
            <div className="ml-4">
              <h2 className="font-semibold text-base">Thông tin về máy in</h2>
              <div className="ml-4">
                <p>ID máy in: {printer.printerID}</p>
                <p>Hãng sản xuất: {printer.manufacturer}</p>
                <p>Mẫu mã: {printer.model}</p>
              </div>
              
              <h2 className="font-semibold text-base mt-4">Vị trí đặt máy in</h2>
              <div className="ml-4">
                <p>{printer.locationName}</p>
                <p>Tòa {printer.building}</p>
                <p>{printer.roomNumber}</p>
              </div>
              
            </div>
            <div className="ml-10 mr-10">
                <h2 className="font-semibold text-base">Tài nguyên in ấn</h2>
                <div className="ml-4">
                  <p className="flex justify-items-center">Số trang giấy </p>
                  <ul className="list-disc ml-12">
                    <li>{printer.paperA5} trang A5</li>
                    <li>{printer.paperA4} trang A4</li>
                    <li>{printer.paperA3} trang A3</li>
                  </ul>
                      
                  <div className="w-full max-w-md mr-10">
                      <div className="flex justify-between mb-2">
                          <span>Lượng mực</span>
                          <span>{printer.inkLevel}%</span>
                      </div>
                      <Progress progress={printer.inkLevel} color={printer.inkLevel > 20 ? "green" : "red"} />
                  </div>
                </div>
            </div>
          </div>
        </div>


        <div className="px-10 py-8 shadow-md rounded-lg bg-white m-4 border border-gray-300">
        <div className="flex justify-center items-center">
          <p className="text-lg font-semibold mr-4">Tình trạng máy in: </p>
            <div className="flex items-center">
              <span className={`w-3 h-3 rounded-full mr-2 ${statusColors[printer.status]}`}></span> 
              {printer.status}
            </div>
        </div>

        {printer.status === "Đang in" && (
          <div className="mt-2 text-left">
              <p>Số tài liệu trong hàng đợi: {printer.queueCount}</p>
              <p>Tổng số tờ của tài liệu trong hàng đợi: {printer.totalPagesInQueue}</p>
              <p>Số tờ của tài liệu đang in: {printer.currentPages}</p>

            <div className="w-full mt-2">
              <div className="flex justify-between mb-2">
                <span>Tiến trình:</span>
                <span>{printer.printProgress}%</span>
              </div>
              <Progress
                progress={printer.printProgress}
                color={printer.printProgress < 80 ? "yellow" : "green"}
              />
            </div>
          </div>
        )}
        </div>

        <div className="mt-4 flex justify-center p-4">
          <Link to={`/user/view-printer-status`} className="px-8 py-2 text-center border-2 bg-white hover:bg-violet-400 hover:border-blue-400 
          rounded-lg  font-medium">Quay lại</Link>
        </div>
    </div>
    
  );
  
};

export default PrinterDetails;

// const PrinterDetails = ({ printerName, printerID, roomNumber, locationName, status }) => {
