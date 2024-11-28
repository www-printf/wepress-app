import React from 'react';

export default function StatCard({ title, value }) {
  return (
    <div className="flex overflow-hidden flex-col items-start self-stretch px-5 py-2.5 my-auto bg-white rounded-xl min-w-[240px] w-[250px]">
      <div className="text-sm font-semibold tracking-tight">{title}</div>
      <div className="mt-2.5 text-3xl">{value}</div>
    </div>
  );
}