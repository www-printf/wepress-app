import React from 'react'
import { Link } from 'react-router-dom';
import { ENDPOINTS } from '../../../routes/endPoints';

export function UserTableRow({ user }) {
    return (
      <div className="flex flex-wrap items-center bg-white border-r border-b border-l border-zinc-200 max-md:max-w-full">
        <div className="gap-1.5 self-stretch p-2.5 my-auto text-sm text-black whitespace-nowrap w-[120px]">
          {user.studentId}
        </div>
        <div className="gap-1.5 self-stretch p-2.5 my-auto text-sm text-black w-[200px]">
          {user.fullName}
        </div>
        <div className="flex-1 shrink gap-1.5 self-stretch p-2.5 my-auto text-sm text-black w-[100px]">
          {user.role}
        </div>
        <div className="gap-1.5 self-stretch p-2.5 my-auto text-sm text-black whitespace-nowrap w-[120px]">
          {user.totalPrintOrders}
        </div>
        <div className="gap-1.5 self-stretch p-2.5 my-auto text-sm text-black w-[200px]">
          {user.lastPrintDate}
        </div>
        <div className={`gap-1.5 self-stretch p-2.5 my-auto text-sm w-[200px] ${user.accountStatus === 'Active' ? 'text-green-500' : 'text-amber-400'}`}>
          {user.accountStatus === 'Active' ? 'Đang hoạt động' : 'Đang đình chỉ'}
        </div>
        <Link to={ENDPOINTS.ADMIN.USER_DETAIL.replace(':userID', user.studentId)} className="flex gap-1.5 justify-center items-center self-stretch p-2.5 my-auto w-[130px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d1ab5161494f41826e12276dfabe33f6b953d3462255b4ba22607fed48c3d98?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
            alt=""
            className="object-contain self-stretch my-auto aspect-square w-[19px]"
          />
        </Link>
      </div>
    );
  }