import React, { useState } from "react";
import ico_printer from "../../assets/icons/ico_printer.png";
import icon_bell from "../../assets/icons/icon_bell.png";
import icon_money from "../../assets/icons/icon_money.png";
import icon_people from "../../assets/icons/icon_people.png";
import UserPanel from "../userPanel/UserPanel";
function HeaderAuthed(){
  // State to toggle user panel
  const [isUserPanelVisible, setUserPanelVisible] = useState(false);

  // Toggle function to show/hide the UserPanel
  const toggleUserPanel = () => {
    setUserPanelVisible(!isUserPanelVisible);
  };



  return (
    <> 
      <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={ico_printer} alt="WePress Logo" className=" tablet:h-4 h-10 w-10" />
          <span className="font-bold text-xl">WePress</span>
          <a href="/about" className="text-lg">
            About
          </a>
        </div>
        
          <div className=" flex items-center space-x-2 w-[200px]">
              <button className="thong-bao mr-[10px]">
                  <img src={icon_bell} alt="icon_bell" className="h-8 w-8" />
              </button>
              
              <button className="w-[150px] flex justify-center items-center space-x-2">
                  <img src={icon_money} alt="icon_money" className="h-8 w-8" />
                  <span className=" text-xl">XX</span>
              </button>

              {/* Button to toggle the UserPanel */}
              <button onClick={toggleUserPanel}>
                <img src={icon_people} alt="icon_people" className="h-8 w-8" />
              </button>
              
          </div>
      </header>
     {/* Conditionally render the UserPanel */}
     {isUserPanelVisible && <UserPanel />}
    </>
  );
}

export default HeaderAuthed;
