import React from 'react';

const PrintHistoryHeader = () => {
  return (
    <div className="flex flex-wrap items-center text-sm font-semibold tracking-tight text-black bg-gray-100 rounded-xl border border-solid border-zinc-200 max-md:max-w-full">
      <div className="flex gap-1.5 items-center self-stretch p-2.5 my-auto w-[150px]">
        <div className="self-stretch my-auto">Mã đơn in</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ad3481e9e1006f28b80e94906fc254f522f3d1190fcad0b12ff75bd249d1ff1?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          alt="Sort by order ID"
        />
      </div>
      <div className="flex gap-1.5 items-center self-stretch p-2.5 my-auto w-[150px]">
        <div className="self-stretch my-auto">Máy in</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ad3481e9e1006f28b80e94906fc254f522f3d1190fcad0b12ff75bd249d1ff1?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          alt="Sort by printer"
        />
      </div>
      <div className="flex gap-1.5 items-center self-stretch p-2.5 my-auto min-w-[240px] w-[350px]">
        <div className="self-stretch my-auto">Tên tài liệu</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ded3e48251a64a1a79da1ff504de3a666c063bfbfee339926d93b91ec437fc04?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          alt="Sort by document name"
        />
      </div>
      <div className="flex gap-1.5 justify-center items-center self-stretch py-2.5 pr-2.5 pl-2.5 my-auto w-[100px]">
        <div className="self-stretch my-auto">Khổ giấy</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f8bdf63fc19880eea3fdc17c2b927344cba2d53da5f02ad7c3b97c9e96d7e32?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          alt="Sort by paper size"
        />
      </div>
      <div className="flex gap-1.5 items-center self-stretch p-2.5 my-auto w-[120px]">
        <div className="self-stretch my-auto">Số trang in</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ded3e48251a64a1a79da1ff504de3a666c063bfbfee339926d93b91ec437fc04?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          alt="Sort by page count"
        />
      </div>
      <div className="flex gap-1.5 items-center self-stretch p-2.5 my-auto w-[120px]">
        <div className="self-stretch my-auto">Ngày in</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ded3e48251a64a1a79da1ff504de3a666c063bfbfee339926d93b91ec437fc04?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          alt="Sort by print date"
        />
      </div>
      <div className="flex gap-1.5 items-center self-stretch p-2.5 my-auto w-[200px]">
        <div className="self-stretch my-auto">Trạng thái in</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ded3e48251a64a1a79da1ff504de3a666c063bfbfee339926d93b91ec437fc04?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          alt="Sort by status"
        />
      </div>
    </div>
  );
};

export default PrintHistoryHeader;