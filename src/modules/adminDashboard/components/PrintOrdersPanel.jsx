import React from 'react';
import PrintOrdersTable from './PrintOrdersTable';

export default function PrintOrdersPanel() {
  return (
    <div className="flex overflow-hidden flex-col items-center p-5 mt-5 w-full bg-white rounded-xl max-md:max-w-full">
      <div className="flex flex-wrap gap-2.5 justify-center items-center self-stretch w-full max-md:max-w-full">
        <div className="flex-1 shrink self-stretch my-auto text-xl font-bold tracking-tight text-black basis-5 max-md:max-w-full">
          Đơn in
        </div>
        <button className="flex gap-2.5 justify-center items-center self-stretch p-2.5 my-auto text-sm font-semibold tracking-tight text-center bg-white rounded-lg border border-solid border-zinc-200 text-zinc-800">
          <div className="flex gap-2.5 justify-center items-center self-stretch my-auto">
            <div className="self-stretch my-auto">Chi tiết</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/19c8e0307922e279b35373acd7068925c9279ecffee7812d133cabb48707c89b?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
          </div>
        </button>
      </div>
      <PrintOrdersTable />
    </div>
  );
}