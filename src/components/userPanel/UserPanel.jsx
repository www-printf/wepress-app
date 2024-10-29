import React from "react";
import icon_list from "../../assets/icons/icon_list.png";
import icon_logout from "../../assets/icons/icon_logout.png";
const UserPanel = () => {
  return (
    <div className="absolute top-16 right-0 p-[10px] text-white w-[300px] h-[220px]"> {/* Adjusted the top position to be below the header */}
      <div className="bg-[#1976D2] rounded-lg p-4 shadow-lg space-y-4">
        <div className="flex items-center space-x-2">
          <div className="bg-gray-200 p-2 rounded-full">
            <span role="img" aria-label="User Icon">👤</span>
          </div>
          <span>User Name</span>
        </div>
        <button className="bg-blue-300 p-2 rounded-lg hover:bg-blue-800 w-full text-left flex justify-center items-center space-x-2">
          <span>Printing History</span>
          <img src={icon_list} alt="icon_list" className="h-8 w-8"/>
        </button>
        <button className="bg-blue-300 p-2 rounded-lg hover:bg-blue-800 w-full text-left flex justify-center items-center space-x-2">
          <span>Purchase History</span>
          <img src={icon_list} alt="icon_list" className="h-8 w-8"/>
        </button>
        <button className="bg-blue-300 p-2 rounded-lg hover:bg-red-700 w-full text-left flex justify-center items-center space-x-2">
          <span>Log Out</span>
          <img src={icon_logout} alt="icon_logout" className="h-8 w-8"/>
        </button>
      </div>
    </div>
  );
};

export default UserPanel;