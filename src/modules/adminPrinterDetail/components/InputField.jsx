import * as React from "react";

export default function InputField({ label, id }) {
  return (
    <div className="flex overflow-hidden flex-col w-full max-w-[240px] mt-2.5">
      <label htmlFor={id} className="text-zinc-800 text-sm font-semibold tracking-tight">
        {label}
      </label>
      <input
        id={id}
        type="text"
        className="overflow-hidden mt-1.5 gap-2.5 self-stretch px-2.5 w-full whitespace-nowrap bg-white rounded-md border border-solid border-zinc-200 min-h-[36px] text-[color:var(--sds-color-text-default-secondary)]"
        aria-label={label}
      />
    </div>
  );
}