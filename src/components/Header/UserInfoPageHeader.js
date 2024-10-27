import React from "react";
import ico_printer from "../../assets/icons/ico_printer.png";
import icon_bell from "../../assets/icons/icon_bell.png";
import icon_money from "../../assets/icons/icon_money.png";
import icon_people from "../../assets/icons/icon_people.png";

function UserInfoPageHeader() {
    return (
        <header className="LogInStatusAuthenticatedSidebarActiveFalseLanguageEnglishColorModeDark w-full h-[52px] px-5 bg-[#575757] justify-between items-center inline-flex">
            <div className="Frame26 justify-start items-center gap-[30px] flex">
                <div className="Logo justify-center items-center flex">
                    <img src={ico_printer} alt="WePress Logo" className="PrinterSvgrepoCom w-10 h-10 relative" />
                    <div className="Wepress text-center text-[#fff5ea] text-sm font-bold font-['Kodchasan']">WePress</div>
                </div>
                <div className="RectangleButton p-2.5 bg-[#575757] rounded-[5px] justify-center items-center gap-2.5 flex">
                    <div className="Frame31 justify-center items-center gap-2.5 flex">
                        <div className="Button text-center text-neutral-100 text-sm font-normal font-['Merriweather']">About</div>
                    </div>
                </div>
                <div className="RectangleButton p-2.5 bg-[#575757] rounded-[5px] justify-center items-center gap-2.5 flex">
                    <div className="Frame31 justify-center items-center gap-2.5 flex">
                        <div className="Button text-center text-neutral-100 text-sm font-normal font-['Merriweather']">My Document</div>
                    </div>
                </div>
            </div>
            <div className="AfterLogin justify-center items-center gap-[5px] flex">
                <div className="Frame12 rounded-[9.83px] justify-center items-center gap-[19.65px] flex">
                    <img src={icon_bell} alt="icon_bell" className="Icon w-[39.31px] h-[39.31px] px-[4.54px] pt-[4.54px] pb-[3.84px] justify-center items-center flex" />
                </div>
                <div className="Frame11 p-2 rounded-lg justify-center items-center gap-2 flex">
                    <img src={icon_money} alt="icon_money" className="Icon w-8 h-8 relative" />
                    <div className="Xx text-center text-[#fff5ea] text-xl font-bold font-['Merriweather']">XX</div>
                </div>
                <div className="CircleButton w-10 h-10 relative rounded-[18px]">
                    <div className="Ellipse1 w-9 h-9 left-0 top-0 absolute bg-[#282828] rounded-full" />
                    <img src={icon_people} alt="icon_people" className="Icon w-5 h-5 px-[2.50px] py-[1.25px] left-[8px] top-[8px] absolute justify-center items-center inline-flex" />
                </div>
            </div>
        </header>
    )
}

export default UserInfoPageHeader;
