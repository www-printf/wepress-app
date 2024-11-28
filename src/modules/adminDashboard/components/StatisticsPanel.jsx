import React from 'react';
import StatCard from './StatCard';

const stats = [
  { title: "Số lượng người dùng", value: "XXXX" },
  { title: "Số lượng máy in", value: "XXXX" },
  { title: "Tổng số đơn in", value: "XXXX" },
  { title: "Doanh thu tháng Y", value: "XXXX" }
];

export default function StatisticsPanel() {
  return (
    <div className="flex flex-wrap gap-8 justify-between items-center w-full text-center text-black max-md:max-w-full">
      {stats.map((stat, index) => (
        <StatCard key={index} title={stat.title} value={stat.value} />
      ))}
    </div>
  );
}