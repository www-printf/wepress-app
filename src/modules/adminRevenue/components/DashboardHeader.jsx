import React from 'react';

export default function DashboardHeader() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-5 py-2 w-full text-xl font-bold tracking-tight text-center text-black bg-white border-b border-zinc-200 min-h-[50px] max-md:max-w-full">
      <div className="self-stretch my-auto">Doanh Thu Năm {currentYear}</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ade77393d3036a720f62c087037e113190e701f0cd2f0277b394c805ec5e8b5?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
        alt="User profile"
        className="object-contain shrink-0 self-stretch my-auto w-9 rounded-2xl aspect-square"
      />
    </div>
  );
}