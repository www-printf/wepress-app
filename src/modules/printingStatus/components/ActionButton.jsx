import * as React from "react";
import { ENDPOINTS } from "../../../routes/endPoints";
import {Link} from "react-router-dom";
export function ActionButton({ label }) {
    const linkTo = label === "Quay về trang chủ" ? ENDPOINTS.USER.HOME : ENDPOINTS.USER.PRINTDOCUMENT;
  return (
    <button className="flex gap-2.5 justify-center items-center p-2.5 bg-white rounded-lg border border-solid border-zinc-200 w-[150px]">
      <Link to= {linkTo} className="gap-2.5 self-stretch my-auto text-sm font-semibold tracking-tight text-zinc-800">
        {label}
      </Link>
    </button>
  );
}