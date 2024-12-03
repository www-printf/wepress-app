import * as React from "react";
import { UserTable } from "../components/UserTable";

export default function UsersPage() {
  return (
    <div className="flex overflow-hidden flex-col">
      <header className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-5 py-2 w-full text-xl font-bold tracking-tight text-center text-black bg-white border-b border-zinc-200 min-h-[50px] max-md:max-w-full">
        <div className="self-stretch my-auto">Người dùng</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3bfc8f9391857443f74fa07d67a8db9c7282a08fef76ddb416db81ec841bc5a?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-9 rounded-2xl aspect-square"
        />
      </header>
      <UserTable />
    </div>
  );
}