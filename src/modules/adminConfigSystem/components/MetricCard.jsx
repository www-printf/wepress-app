import React from 'react';

export function MetricCard({ title, value, unit, iconSrc }) {
  return (
    <div className="flex flex-1 shrink gap-10 justify-between items-start py-1.5 pr-1.5 pl-5 bg-white rounded-xl basis-0 min-w-[240px]">
      <div className="flex flex-col items-start py-2.5">
        <div className="text-sm font-semibold tracking-tight">
          {title}
        </div>
        <div className="flex gap-2.5 justify-center items-center mt-2.5 whitespace-nowrap">
          <div className="gap-2.5 self-stretch px-4 my-auto text-3xl">
            {value}
          </div>
          <div className="flex-1 shrink gap-2.5 self-stretch my-auto text-sm font-semibold tracking-tight">
            {unit}
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="object-contain shrink-0 w-9 rounded-2xl aspect-square"
      />
    </div>
  );
}