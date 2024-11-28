import { Link } from "react-router-dom";
import printer_img from '../../../assets/images/printer_img.png';

const PrinterCard = ({ printerName, printerID, roomNumber, status }) => {
  const statusColors = {
    "Sẵn sàng để in": "bg-green-500",
    "Đang bảo trì": "bg-red-500",
    "Đang in": "bg-yellow-500",
  };

  return (
    <div className="p-4 shadow-md rounded-lg bg-white m-4 w-[330px] border border-gray-300">
      <div className="flex items-start mb-4 mt-2">
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
      {/* <p className="mb-2 flex items-center">
          Cơ sở: {locationName}
      </p> */}
      
      <div className="mt-4 flex justify-center">
        <Link to={`/user/printer-info/${printerID}`} className="px-4 py-1 text-center border-2 bg-violet-300 hover:bg-violet-400 hover:border-blue-400 
        rounded-lg font-medium">Chi tiết</Link>
      </div>
    </div>
  );
};

export default PrinterCard;
