import icon_library from "../../../../assets/icons/icon_library.png";
import icon_printer_white from "../../../../assets/icons/icon_printer_white.png";
import { Link } from "react-router-dom";
import { ENDPOINTS } from "../../../../routes/endPoints";
export default function HomeSection() {
  return (
    <div className="demo-section">
      <div className="flex flex-row items-center justify-center h-[864px] p-3 bg-gray-100">
       
        <div className="h-[160px] shadow-xl rounded-lg p-4 bg-white mx-5"> 
          <Link to={ENDPOINTS.USER.LIBRARY} className="bg-white text-black font-semibold rounded-md h-full w-[200px] flex flex-col justify-center items-center space-y-2">
            <img src={icon_library} alt="Library" className="w-[40px] filter invert" />
            <span>Thư viện</span>
          </Link>
        </div>

        <div className="h-[160px] shadow-xl rounded-lg p-4 bg-white mx-5">
          <Link to={ENDPOINTS.USER.PRINTDOCUMENT} className="bg-white text-black font-semibold rounded-md h-full w-[200px] flex flex-col justify-center items-center space-y-2">
            <img src={icon_printer_white} alt="Printer" className="w-[40px] filter invert" />
            <span>In tài liệu</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
