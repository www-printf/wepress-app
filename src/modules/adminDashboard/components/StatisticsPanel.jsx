import React from 'react';
import StatCard from './StatCard';

const getRandomNumber = (min = 100, max = 1000) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const stats = [
  { title: "Số lượng người dùng", value: getRandomNumber() }, // Số liệu ngẫu nhiên từ 100 đến 1000
  { title: "Số lượng máy in", value: getRandomNumber() },
  { title: "Tổng số đơn in", value: getRandomNumber(500, 10000) }, // Số liệu ngẫu nhiên từ 500 đến 10000
  { title: "Doanh thu tháng Y", value: getRandomNumber(1000000, 10000000) } // Số liệu ngẫu nhiên cho doanh thu
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