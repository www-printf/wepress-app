import React from 'react';

export default function StatusGroup({ title, active, maintenance }) {
  return (
    <div className="flex flex-col mt-2.5 max-md:max-w-full">
      <div className="self-start text-base font-bold tracking-tight text-black">
        {title}
      </div>
      <div className="flex flex-wrap gap-2.5 items-center mt-2.5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-start self-stretch px-5 py-2.5 my-auto bg-white rounded-xl border border-solid border-zinc-200 min-w-[240px] w-[250px]">
          <div className="text-sm font-semibold tracking-tight text-green-500">
            Số máy in đang <span className="text-green-500">hoạt động</span>
          </div>
          <div className="mt-2.5 text-3xl text-black">{active}</div>
        </div>
        <div className="flex overflow-hidden flex-col items-start self-stretch px-5 py-2.5 my-auto bg-white rounded-xl border border-solid border-zinc-200 min-w-[240px] w-[250px]">
          <div className="text-sm font-semibold tracking-tight text-red-500">
            Số máy in đang <span className="text-red-500">bảo trì</span>
          </div>
          <div className="mt-2.5 text-3xl text-black">{maintenance}</div>
        </div>
      </div>
    </div>
  );
}