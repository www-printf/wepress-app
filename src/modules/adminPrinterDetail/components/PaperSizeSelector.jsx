import * as React from "react";

export default function PaperSizeSelector({ size }) {
  return (
    <div className="flex gap-2.5 items-center self-stretch px-2.5 py-2 my-auto rounded-md border border-solid border-zinc-200">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d2585bd3a4228c78d93382fe8539f9b590d634807349c18dbd7d1e9e26e57ee?placeholderIfAbsent=true&apiKey=73e6d8e4f51f4cad8cd265c0c54a93e2"
        className="object-contain shrink-0 self-stretch my-auto w-2.5 aspect-square"
        alt=""
      />
      <div className="self-stretch my-auto">{size}</div>
    </div>
  );
}