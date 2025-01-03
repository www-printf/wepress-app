import icon_library from "../../../../assets/icons/icon_library.png";
import icon_printer_white from "../../../../assets/icons/icon_printer_white.png";
import { Link } from "react-router-dom";
import { ENDPOINTS } from "../../../../routes/endPoints";

export default function HomeSection() {
  return (
    <div className="demo-section">
      <div className="flex flex-row items-center justify-center h-[600px] 16/10-lg:h-[700px] p-3 bg-gray-100">
        <div className="h-[160px] shadow-xl rounded-lg p-4 bg-white mx-5 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <Link
            to={ENDPOINTS.USER.MY_DOCUMENTS}
            className="bg-white text-black font-semibold rounded-md h-full w-[200px] flex flex-col justify-center items-center space-y-2 hover:bg-gray-100 transition-colors duration-300"
          >
            <img
              src={icon_library}
              alt="Library"
              className="w-[40px] filter invert"
            />
            <span>Thư viện</span>
          </Link>
        </div>

        <div className="h-[160px] shadow-xl rounded-lg p-4 bg-white mx-5 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <Link
            to={ENDPOINTS.USER.PRINTDOCUMENT}
            className="bg-white text-black font-semibold rounded-md h-full w-[200px] flex flex-col justify-center items-center space-y-2 hover:bg-gray-100 transition-colors duration-300"
          >
            <img
              src={icon_printer_white}
              alt="Printer"
              className="w-[40px] filter invert"
            />
            <span>In tài liệu</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
