import React from 'react';

const PrintHistoryRow = ({ id, printerId, documentName, paperSize, pageCount, printDate, status }) => {
  const getStatusDisplay = (status) => {
    switch (status) {
      case 'completed':
        return {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/508cd3c5f4c1b3ecb10658c2bf949f3f296bfe079be193fa2657f3bd307a6c87?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104",
          text: "Đã in",
          className: "border-green-500 stroke-green-500"
        };
      case 'printing':
        return {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6856b1c9da181a365fe9a6feaf51d60ef31a870e6e998637820169a0d8e60f84?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104",
          text: "Đang in",
          className: "stroke-yellow-400"
        };
      case 'interrupted':
        return {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab3b49d3ad85e18380b8f354f3c04c0cfa5bfd81858137dc97b1033b33b68a25?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104",
          text: "Bị gián đoạn",
          className: ""
        };
      default:
        return {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/508cd3c5f4c1b3ecb10658c2bf949f3f296bfe079be193fa2657f3bd307a6c87?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104",
          text: "Đã in",
          className: "border-green-500 stroke-green-500"
        };
    }
  };

  const statusInfo = getStatusDisplay(status);

  return (
    <div className="flex flex-wrap items-center w-full bg-white border-r border-b border-l border-zinc-200 max-md:max-w-full">
      <div className="grow shrink gap-1.5 self-stretch p-2.5 my-auto text-sm text-black whitespace-nowrap w-[130px]">
        {id}
      </div>
      <div className="grow shrink gap-1.5 self-stretch p-2.5 my-auto text-sm text-black whitespace-nowrap w-[130px]">
        {printerId}
      </div>
      <div className="flex-1 grow shrink gap-1.5 self-stretch p-2.5 my-auto text-sm text-black whitespace-nowrap min-w-[240px] w-[330px]">
        {documentName}
      </div>
      <div className="grow shrink gap-1.5 self-stretch p-2.5 my-auto w-20 text-sm text-black whitespace-nowrap">
        {paperSize}
      </div>
      <div className="grow shrink gap-1.5 self-stretch p-2.5 my-auto text-sm text-black whitespace-nowrap w-[100px]">
        {pageCount}
      </div>
      <div className="grow shrink gap-1.5 self-stretch p-2.5 my-auto text-sm text-center text-black whitespace-nowrap w-[100px]">
        {printDate}
      </div>
      <div className="flex grow shrink gap-1.5 items-center self-stretch p-2.5 my-auto w-[180px]">
        <div className="flex gap-2.5 justify-center items-center self-stretch px-2.5 my-auto">
          {status === 'completed' ? (
            <div className={`flex flex-col justify-center items-center self-stretch px-1.5 my-auto w-5 h-5 rounded-xl border-2 border-solid min-h-[20px] ${statusInfo.className}`}>
              <img
                loading="lazy"
                src={statusInfo.icon}
                className={`object-contain w-2 aspect-[1.14] stroke-[2px] ${statusInfo.className}`}
                alt={statusInfo.text}
              />
            </div>
          ) : (
            <div className="flex gap-2 items-center self-stretch my-auto w-5">
              <img
                loading="lazy"
                src={statusInfo.icon}
                className={`object-contain self-stretch my-auto w-5 aspect-square stroke-[2px] ${statusInfo.className}`}
                alt={statusInfo.text}
              />
            </div>
          )}
          <div className="self-stretch my-auto text-sm text-black">
            {statusInfo.text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintHistoryRow;