import React from "react";

export function InfoCard({ title, iconSrc, items }) {
  return (
    <section className="flex flex-col px-5 pt-5 pb-5 bg-white rounded-md shadow-md min-h-[300px] min-w-[240px] w-[400px]">
      {/* Header */}
      <header className="flex justify-between items-center w-full text-xl font-bold tracking-tight mb-4">
        <h2 className="text-black">{title}</h2>
        <img
          src={iconSrc}
          alt=""
          className="object-contain w-6 h-6 cursor-pointer"
        />
      </header>

      {/* Items */}
      <div className="flex flex-col gap-4 text-left">
        {Array.isArray(items) &&
          items.map((item, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-sm font-medium text-gray-600">{item.label}</h3>
              <p className="text-base text-black">{item.value}</p>
            </div>
          ))}
      </div>
    </section>
  );
}
