import * as React from "react";

export function InfoCard({ room, printer, document, sheets, paperSize }) {
  return (
    <div className="flex overflow-hidden flex-col justify-center self-stretch px-2.5 py-4 my-auto w-80 text-black bg-white rounded-xl min-h-[210px] min-w-[240px]">
      <div className="text-xl font-bold tracking-tight">
        Thông tin đơn in
      </div>
      <div className="flex flex-col self-center mt-2.5 w-full text-sm max-w-[300px]">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col self-stretch my-auto w-[155px]">
            <div className="font-semibold tracking-tight">Phòng in: </div>
            <div>{room}</div>
          </div>
          <div className="flex flex-col self-stretch my-auto w-[155px]">
            <div className="font-semibold tracking-tight">Máy in: </div>
            <div>{printer}</div>
          </div>
        </div>
        <div className="flex flex-col mt-2.5 w-full">
          <div className="font-semibold tracking-tight">Tên tài liệu: </div>
          <div>{document}</div>
        </div>
        <div className="flex justify-between items-start mt-2.5 w-full">
          <div className="flex flex-col w-[155px]">
            <div className="font-semibold tracking-tight">Số tờ: </div>
            <div>{sheets}</div>
          </div>
          <div className="flex flex-col w-[155px]">
            <div className="font-semibold tracking-tight">Cỡ giấy:</div>
            <div>{paperSize}</div>
          </div>
        </div>
      </div>
    </div>
  );
}