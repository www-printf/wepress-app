import * as React from "react";

function HistoryTable({ headers, data, renderRow }) {
  return (
    <div className="flex flex-col mt-2.5 max-w-full w-full">
      {/* Header */}
      <div className="flex w-full bg-gray-100 rounded-t-xl border border-solid border-zinc-200">
        {headers.map((header, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-1.5 p-2.5 my-auto whitespace-nowrap w-[300px]"
          >
            {header}
          </div>
        ))}
      </div>

      {/* Rows */}
      <div className="flex flex-col w-full max-w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex w-full bg-white border-t border-r border-b border-l border-zinc-200"
          >
            {renderRow(item)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryTable;
