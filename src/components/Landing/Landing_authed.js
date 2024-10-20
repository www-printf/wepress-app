import React from "react";
import icon_library from "../../assets/icons/icon_library.png";
import icon_printer_white from "../../assets/icons/icon_printer_white.png";
function Landingauthed() {
    return (
        <div className="flex flex-row items-center justify-center h-[864px] p-3 bg-second"> 
        <div className="h-[160px]">
            <button className="bg-blue-700 text-white font-bold rounded-md h-full w-[200px] mr-11 flex flex-col justify-center items-center space-y-2">
                <img src={icon_library} alt="Library" className="w-[40px]" />
                <i></i>Library
            </button>
        </div>
        <div className="h-[160px]">
            <button className="bg-blue-700 text-white font-bold rounded-md h-full w-[200px] ml-11 flex flex-col justify-center items-center space-y-2">
                <img src={icon_printer_white} alt="Library" className="w-[40px]" />
                <i></i> Print Document
            </button>
        </div>
    </div>
    );
  }
  export default Landingauthed;