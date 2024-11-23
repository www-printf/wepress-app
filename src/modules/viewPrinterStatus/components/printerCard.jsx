import { Progress } from 'flowbite-react';
import printer_img from '../../../assets/images/printer_img.png';

const PrinterCard = ({ printerName, printerID, roomNumber, paperA5, paperA4, paperA3, inkLevel, status }) => {
  const statusColors = {
    "Sẵn sàng để in": "bg-green-500",
    "Đang bảo trì": "bg-red-500",
    "Đang in": "bg-yellow-500",
  };

  return (
    <div className="p-4 shadow-md rounded-lg bg-white m-4 w-[320px] border border-gray-300">
      <div className="flex items-start mb-2 mt-2">
        <img src={printer_img} alt="Printer" className="w-25 h-25 mr-4" />
        <div>
          <h2 className="font-semibold text-lg">Tên máy in: {printerName}</h2>
          <p>ID máy in: {printerID}</p>
          <p>Phòng in: {roomNumber}</p>
        </div>
      </div>

      <div className="mb-2 flex items-center">
          Tình trạng máy in:  
          <span className={`w-3 h-3 rounded-full ml-3 mr-3 ${statusColors[status]}`}></span> 
          {status}
      </div>

      <div className="mb-4">
        <div className="mt-2">Tài nguyên in ấn:</div>
        <div className="ml-4">
          <div className="flex justify-between">
            <div className="mr-2">Số trang giấy:</div>
            <div className="mr-14">
                <p>A5: {paperA5} trang</p>
                <p>A4: {paperA4} trang</p>
                <p>A3: {paperA3} trang</p>
            </div>
          </div>
        
          <div className="w-full max-w-md">
            <div className="flex justify-between mb-2">
              <span>Lượng mực</span>
              <span>{inkLevel}%</span>
            </div>
            <Progress progress={inkLevel} color={inkLevel > 20 ? "green" : "red"} />
          </div>
        </div>  
      </div>
    </div>
  );
};

export default PrinterCard;
