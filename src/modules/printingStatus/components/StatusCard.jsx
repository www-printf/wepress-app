import * as React from "react";
import {Progress} from 'flowbite-react'
export function StatusCard({ status, printed, total, progress }) {
  return (
    <div className="flex overflow-hidden flex-col justify-between self-stretch p-2.5 my-auto w-80 bg-white rounded-xl min-h-[210px] min-w-[240px]">
      <div className="flex flex-col items-start max-w-full w-[300px]">
        <div className="flex flex-col justify-center">
          <div className="text-sm font-semibold tracking-tight text-black">
            Tình trạng:
          </div>
          <div className="gap-2.5 self-stretch mt-1.5 text-base font-bold tracking-tight text-amber-400">
            {status}
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-12 w-full max-w-[300px] max-md:mt-10">
        <div className="flex flex-col justify-center self-start text-black">
          <div className="text-sm font-semibold tracking-tight">Đã in:</div>
          <div className="flex gap-2.5 items-end whitespace-nowrap">
            <div className="text-3xl">{`${printed}/${total}`}</div>
            <div className="text-sm">Tờ</div>
          </div>
        </div>
        <div className="flex gap-8 justify-between items-center mt-2.5 w-full">
          <div className="flex flex-col self-stretch my-auto rounded-md min-w-[240px] w-full">
            <Progress className="w-full" progress={progress} color={progress>20 ? "green" : "red"}>"</Progress>
          </div>
          
        </div>
      </div>
    </div>
  );
}