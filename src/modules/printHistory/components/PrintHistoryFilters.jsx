import React from 'react';

const PrintHistoryFilters = () => {
  return (
    <div className="flex flex-col justify-center p-2.5 w-full text-sm bg-white rounded-xl border border-solid border-zinc-200 text-neutral-800 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
          <div className="flex gap-10 justify-between items-center px-2.5 py-1.5 w-full bg-gray-50 rounded-md border border-solid border-zinc-200 min-h-[30px]">
            <div className="self-stretch my-auto w-[180px]">Mã đơn in</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ffcd967cda12f04497f045ef2186dd4de49beddbae847361b7cd67750a08f5e?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              alt="Filter by order ID"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
          <div className="flex gap-10 justify-between items-center px-2.5 py-1.5 w-full bg-gray-50 rounded-md border border-solid border-zinc-200 min-h-[30px]">
            <div className="self-stretch my-auto w-[180px]">Mã máy in</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4797b0a228704b9bf3843ef1ac616a2d5699beb94378cb8cd200743ae6534f75?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              alt="Filter by printer ID"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
          <div className="flex gap-10 justify-between items-center px-2.5 py-1.5 w-full bg-gray-50 rounded-md border border-solid border-zinc-200 min-h-[30px]">
            <div className="self-stretch my-auto w-[180px]">Tên tài liệu</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c0041a8cd0d89872776e001191a6add8a92d2d197ec80d8c730a9d3914da0cb?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              alt="Filter by document name"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintHistoryFilters;