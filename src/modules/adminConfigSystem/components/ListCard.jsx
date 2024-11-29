import React from 'react';

export function ListCard({ title, value, buttonText }) {
  return (
    <div className="flex flex-1 shrink gap-8 items-start py-1.5 pr-1.5 pl-5 bg-white rounded-xl basis-0 min-w-[240px] max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink py-2.5 w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="text-sm font-semibold tracking-tight text-black">
          {title}
        </div>
        <div className="flex flex-wrap gap-2.5 items-center mt-2.5 w-full text-center max-md:max-w-full">
          <div className="gap-2.5 self-stretch my-auto text-3xl text-black whitespace-nowrap bg-white rounded-xl">
            {value}
          </div>
          <button 
            className="flex gap-2.5 justify-center items-center self-stretch p-2.5 my-auto text-sm font-semibold tracking-tight bg-white rounded-lg border border-solid border-zinc-200 text-zinc-800"
            tabIndex="0"
          >
            <div className="gap-2.5 self-stretch my-auto">{buttonText}</div>
          </button>
        </div>
      </div>
    </div>
  );
}