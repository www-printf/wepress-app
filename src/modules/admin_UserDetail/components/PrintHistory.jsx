import * as React from "react";
import HistoryTable from "./HistoryTable";
import {printData} from "../../../../mock/printHistory.mock.mjs";

function PrintHistory() {
  const renderStatus = (status) => {
    switch(status) {
      case 'printing':
        return (
          <>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6856b1c9da181a365fe9a6feaf51d60ef31a870e6e998637820169a0d8e60f84?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
              alt=""
              className="object-contain self-stretch my-auto w-5 aspect-square stroke-[2px] stroke-yellow-400"
            />
            <span>Đang in</span>
          </>
        );
      case 'completed':
        return (
          <>
            <div className="flex flex-col justify-center items-center self-stretch px-1.5 my-auto w-5 h-5 rounded-xl border-2 border-green-500 border-solid min-h-[20px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/508cd3c5f4c1b3ecb10658c2bf949f3f296bfe079be193fa2657f3bd307a6c87?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
                alt=""
                className="object-contain w-2 aspect-[1.14] stroke-[2px] stroke-green-500"
              />
            </div>
            <span>Đã in</span>
          </>
        );
      case 'interrupted':
        return (
          <>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab3b49d3ad85e18380b8f354f3c04c0cfa5bfd81858137dc97b1033b33b68a25?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
            <span>Bị gián đoạn</span>
          </>
        );
    }
  };

  return (
    <section className="flex flex-col items-center px-2.5 pt-2.5 pb-5 bg-white rounded-xl border border-solid border-zinc-200 min-w-[240px] w-[625px] max-md:max-w-full">
      <h2 className="text-sm font-semibold tracking-tight text-black">
        Lịch sử in ấn
      </h2>
      <HistoryTable
        headers={["Ngày in", "Tên tài liệu", "Trạng thái in"]}
        data={printData}
        renderRow={(item) => (
          <>
            <div className="gap-1.5 self-stretch p-2.5 my-auto text-sm text-black whitespace-nowrap w-[150px]">
              {item.date}
            </div>
            <div className="gap-1.5 self-stretch p-2.5 my-auto text-sm text-black min-w-[240px] w-[150px]">
              {item.document}
            </div>
            <div className="flex gap-1.5 items-center self-stretch p-2.5 my-auto w-[170px]">
              <div className="flex gap-2.5 justify-center items-center self-stretch px-2.5 my-auto">
                {renderStatus(item.status)}
              </div>
            </div>
          </>
        )}
      />
    </section>
  );
}

export default PrintHistory;