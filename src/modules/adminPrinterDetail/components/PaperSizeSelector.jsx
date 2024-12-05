import * as React from "react";
import { Checkbox, Label } from "flowbite-react";

export default function PaperSizeSelector({ size, isSelected, onSelect }) {
  return (
    <div className="flex gap-2.5 items-center self-stretch px-2.5 py-2 my-auto rounded-md border border-solid border-zinc-200">
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
      </div>
      <div className="self-stretch my-auto">{size}</div>
    </div>
  );
}


