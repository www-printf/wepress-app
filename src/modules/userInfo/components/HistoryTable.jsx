import * as React from "react";

function HistoryTable({ headers, data, renderRow }) {
  return (
    <div className="flex flex-col mt-2.5 max-w-full w-[575px]">
      <div className="flex flex-wrap items-center font-semibold tracking-tight bg-gray-100 rounded-t-xl border border-solid border-zinc-200 max-md:max-w-full">
        {headers.map((header, index) => (
          <div key={index} className="gap-1.5 self-stretch p-2.5 my-auto whitespace-nowrap w-[170px]">
            {header}
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full max-w-[575px] max-md:max-w-full">
        {data.map((item, index) => (
          <div key={index} className="flex flex-wrap items-center bg-white border-r border-b border-l border-zinc-200 max-md:max-w-full">
            {renderRow(item)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryTable;