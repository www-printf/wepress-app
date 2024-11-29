import React from 'react';
import StatusGroup from './StatusGroup';
import { ENDPOINTS } from '../../../routes/endPoints';
import  { Link } from 'react-router-dom';
const getRandomStatus = (min = 0, max = 10) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const locations = [
  {
    title: "Toàn trường",
    active: getRandomStatus(),
    maintenance: getRandomStatus(),
  },
  {
    title: "Cơ sở 1",
    active: getRandomStatus(),
    maintenance: getRandomStatus(),
  },
  {
    title: "Cơ sở 2",
    active: getRandomStatus(),
    maintenance: getRandomStatus(),
  }
];

const rooms = [
  {
    title: "Cơ sở 1 - Phòng in B1-101",
    active: getRandomStatus(),
    maintenance: getRandomStatus(),
  },
  {
    title: "Cơ sở 1 - Phòng in C2-404",
    active: getRandomStatus(),
    maintenance: getRandomStatus(),
  },
  {
    title: "Cơ sở 2 - Phòng in H6-105",
    active: getRandomStatus(),
    maintenance: getRandomStatus(),
  },
  {
    title: "Cơ sở 2 - Phòng in H1-103",
    active: getRandomStatus(),
    maintenance: getRandomStatus(),
  }
];

export default function PrinterStatusPanel() {
  return (
    <div className="flex overflow-hidden flex-col p-5 mt-5 w-full bg-white rounded-xl max-md:max-w-full">
      <div className="flex flex-wrap gap-2.5 items-center w-full max-md:max-w-full">
        <div className="flex-1 shrink self-stretch my-auto text-xl font-bold tracking-tight text-black basis-5 max-md:max-w-full">
          Tình trạng máy in
        </div>
        <Link to={ENDPOINTS.ADMIN.PRITERS} className="flex gap-2.5 justify-center items-center self-stretch p-2.5 my-auto text-sm font-semibold tracking-tight text-center bg-white rounded-lg border border-solid border-zinc-200 text-zinc-800">
          <div className="flex gap-2.5 justify-center items-center self-stretch my-auto">
            <div className="self-stretch my-auto">Chi tiết</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca30e1f67688559dcb9a274830295c2009306ae62887e868a110dc90c372e3ee?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap gap-10 justify-between items-start mt-2.5 w-full text-center max-md:max-w-full">
        <div className="flex flex-col min-w-[240px] max-md:max-w-full">
          {locations.map((location, index) => (
            <StatusGroup key={index} {...location} />
          ))}
        </div>
        <div className="flex flex-col min-w-[240px] max-md:max-w-full">
          {rooms.map((room, index) => (
            <StatusGroup key={index} {...room} />
          ))}
        </div>
      </div>
    </div>
  );
}