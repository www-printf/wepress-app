import React, { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import ico_printer from "../../assets/icons/icon_printer_black.png";
import icon_bell from "../../assets/icons/icon_bell.png";
import icon_money from "../../assets/icons/icon_money.png";
import icon_people from "../../assets/icons/icon_people.png";
import UserPanel from "../userPanel/UserPanel";
import MoneyPanel from "../moneyPanel/moneyPanel";

function HeaderAuthed() {
  const [isUserPanelVisible, setUserPanelVisible] = useState(false);
  const [isMoneyPanelVisible, setMoneyPanelVisible] = useState(false);

  const toggleUserPanel = () => {
    setUserPanelVisible((prev) => !prev);
    setMoneyPanelVisible(false);
  };

  const toggleMoneyPanel = () => {
    setMoneyPanelVisible((prev) => !prev);
    setUserPanelVisible(false);
  };

  // Tạo danh sách các liên kết
  const options = [
    { to: "/about", label: "Giới thiệu", activeOptions: { exact: true } },
    { to: "/my-documents", label: "Tài liệu của tôi" },
    { to: "/user/purchase-paper", label: "Mua giấy in" },
    { to: "/user/view-printer-status", label: "Tình trạng máy in" },
  ];

  return (
    <>
      <header className="bg-white text-black p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src={ico_printer}
            alt="WePress Logo"
            className="tablet:h-4 h-10 w-10"
          />
          <Link to="/user/home" className="flex items-center space-x-2">
            <span className="font-bold text-xl">WePress</span>
          </Link>
          
          {/* Render các link với active class */}
          <div className="flex space-x-4">
            {options.map((option) => {
              const match = useMatch({
                path: option.to,
                ...option.activeOptions,
              });
              return (
                <Link
                  to={option.to}
                  key={option.to}
                  className={`text-lg p-2 ${match ? "font-bold" : ""}`}
                >
                  {option.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center space-x-2 w-[200px]">
          <button className="thong-bao mr-[10px]">
            <img src={icon_bell} alt="icon_bell" className="h-8 w-8 " />
          </button>

          <button
            onClick={toggleMoneyPanel}
            className="w-[150px] flex justify-center items-center space-x-2"
          >
            <img
              src={icon_money}
              alt="icon_money"
              className="h-8 w-8 filter invert"
            />
            <span className="text-xl">XX</span>
          </button>

          <button onClick={toggleUserPanel}>
            <img
              src={icon_people}
              alt="icon_people"
              className="h-8 w-8 filter invert"
            />
          </button>
        </div>
      </header>

      {/* Hiển thị UserPanel nếu isUserPanelVisible = true */}
      {isUserPanelVisible && (
        <div>
          <UserPanel />
        </div>
      )}

      {/* Hiển thị MoneyPanel nếu isMoneyPanelVisible = true */}
      {isMoneyPanelVisible && (
        <div>
          <MoneyPanel />
        </div>
      )}
    </>
  );
}

export default HeaderAuthed;
