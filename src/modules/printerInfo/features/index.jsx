import { useParams } from "react-router-dom";
import { ENDPOINTS } from "../../../routes/endPoints";
import PrinterDetails from "../components/printer";
import { mockPrinters } from "../../../../mock/printer.mock.mjs"

const PrinterPage = () => {
  const { printerID } = useParams();
  const printerInfoURL = ENDPOINTS.USER.PRINTER_INFO.replace(":printerID", printerID);

  console.log(printerInfoURL);

  // Tìm thông tin máy in theo printerID
  const printerData = mockPrinters.find((p) => p.printerID === printerID);

  return (
    <div className="p-6 bg-gray-100 min-h-screen"> 
      <div className="mx-[80px] my-[30px] justify-items-center">
        <h1 className="text-3xl font-bold mb-4">{printerData.printerName}</h1>
        <div className="">
          <PrinterDetails printer={printerData}/>
        </div>
      </div>
    </div>
    
  );
};

export default PrinterPage;
