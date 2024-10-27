import React from "react";

function InputField({ label, value }) {
    return (
        <div className="w-[250px] h-[55px] flex-col justify-start items-start gap-[3px] inline-flex">
            <div className="text-[#fff5ea] text-sm font-normal font-['Merriweather']">{label}</div>
            <div className="self-stretch p-2.5 bg-[#3f3f3f] rounded-[5px] justify-start items-start gap-2.5 inline-flex">
                <div className="text-[#fff5ea] text-sm font-normal font-['Merriweather']">{value}</div>
            </div>
        </div>
    )
}

export default InputField;
