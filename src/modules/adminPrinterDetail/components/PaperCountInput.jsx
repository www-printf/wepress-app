import * as React from "react";

export default function PaperCountInput({ paperSize }) {
  return (
    <div className="flex gap-2.5 items-start mt-2.5 max-w-full w-[275px]">
      <div className="flex overflow-hidden flex-col w-[120px]">
        <label htmlFor={`current${paperSize}`} className="text-zinc-800 text-sm font-semibold tracking-tight">
          Số tờ {paperSize} hiện có
        </label>
        <input
          id={`current${paperSize}`}
          type="number"
          className="overflow-hidden mt-1.5 gap-2.5 self-stretch px-2.5 w-full whitespace-nowrap bg-white rounded-md border border-solid border-zinc-200 min-h-[36px]"
          aria-label={`Số tờ ${paperSize} hiện có`}
        />
      </div>
      <div className="flex overflow-hidden flex-col w-[120px]">
        <label htmlFor={`capacity${paperSize}`} className="text-zinc-800 text-sm font-semibold tracking-tight">
          Sức chứa tờ {paperSize}
        </label>
        <input
          id={`capacity${paperSize}`}
          type="number"
          className="overflow-hidden mt-1.5 gap-2.5 self-stretch px-2.5 w-full whitespace-nowrap bg-white rounded-md border border-solid border-zinc-200 min-h-[36px]"
          aria-label={`Sức chứa tờ ${paperSize}`}
        />
      </div>
    </div>
  );
}