import React from 'react';

const navItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/611959f72068ddbe3b8a212c5d916e1b87e9335792dbec91d81a2687f26850ff?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104", text: "Bảng điều khiển", active: true },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dab65bf2ca23810b682b111f283e7428f91a42360e40c89423b53b11067dea77?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104", text: "Các máy in", active: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/df53fc9d184bd8805a71c79e9e6f3bc5621dce51624dd4bc0380d728223fcce8?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104", text: "Người dùng", active: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0219161a8ae988928141919514caa8ec34806d99e69d52459675c6f88f3e4d5b?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104", text: "Doanh thu", active: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1401520be6aed80ef537984b7008641ce700dc5ee54225c0193903102c7a01a0?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104", text: "Tùy chỉnh hệ thống", active: false }
];

export default function Sidebar() {
  return (
    <div className="flex overflow-hidden z-0 flex-col px-5 py-2.5 text-center bg-white border-r border-zinc-200 min-w-[240px] text-zinc-800 w-[300px]">
      <div className="flex flex-col justify-center items-center py-1.5 w-full border-b border-zinc-200">
        <div className="flex gap-4 justify-center items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/45d341c9fddf447d5ebd62caa5f9590f69fe0208ddec424508532390c512acdf?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
            alt="WePress Logo"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[50px]"
          />
          <div className="flex flex-col justify-center items-start self-stretch my-auto">
            <div className="text-lg font-bold">WePress</div>
            <div className="text-sm">SPSO panel</div>
          </div>
        </div>
      </div>
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`flex gap-2.5 items-center p-2.5 mt-2.5 w-full text-sm font-semibold tracking-tight ${
            item.active ? 'bg-gray-100' : 'bg-white'
          } rounded-md`}
          role="button"
          tabIndex={0}
        >
          <div className="flex gap-2.5 items-center self-stretch my-auto">
            <img
              loading="lazy"
              src={item.icon}
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
            <div className="self-stretch my-auto">{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}