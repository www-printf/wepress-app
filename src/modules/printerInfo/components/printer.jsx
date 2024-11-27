import { Progress } from 'flowbite-react';
import printer_img from '../../../assets/images/printer_img.png';

const PrinterCard = ({ printerName, printerID, roomNumber, locationName, status }) => {
  const statusColors = {
    "Sẵn sàng để in": "bg-green-500",
    "Đang bảo trì": "bg-red-500",
    "Đang in": "bg-yellow-500",
  };

  return (
    <div className="p-4 shadow-md rounded-lg bg-white m-4 w-[790px] border border-gray-300">
      <div className="flex items-start mb-4 mt-2">
        <img src={printer_img} alt="Printer" className="w-[250px] h-[250px] mr-4" />
        <div>
          <h2 className="font-semibold text-base">Thông tin về máy in</h2>
          <p>ID máy in: {printerID}</p>
          <p>Hãng sản xuất: {manufacturer}</p>
          <p>Mẫu mã: {model}</p>

          <h2 className="font-semibold text-base">Vị trí đặt máy in</h2>
          <p>{locationName}</p>
          <p>{buldingName}</p>
          <p>{roomNumber}</p>
        </div>
        <div>
            <h2 className="font-semibold text-base">Tài nguyên in ấn</h2>
            <div className="flex justify-items-center font-semibold">Số trang giấy
                <p>{paperA5} trang A5</p>
                <p>{paperA4} trang A4</p>
                <p>{paperA3} trang A3</p>
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


      {/* <div className="mb-4">
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
      </div> */}
    </div>
  );
};

export default PrinterCard;
