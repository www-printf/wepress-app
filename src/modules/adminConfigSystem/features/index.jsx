import React from 'react';
import { MetricCard } from '../components/MetricCard';
import { ListCard } from '../components/ListCard';

const metrics = [
  {
    title: 'Số credit cung cấp định kỳ',
    value: 'XXX',
    unit: 'credits',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e94607c589affdd75ef96829ed5f8b81af40f279d516468d645f9ca79a8d6cb8?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104'
  },
  {
    title: 'Kích thước file tối đa',
    value: 'XXX',
    unit: 'Mb',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8b75e81a4a00d6639df28583facbbb7f6da1067415e199c0bd10b2cab0fb1320?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104'
  },
  {
    title: 'Giá in một mặt A4',
    value: 'XXX',
    unit: 'credits',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f5c8716d553b56076ee17abbb550b7cc9cea3a0f015c5c527ba0ba72dbb3e0bd?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104'
  }
];

const listItems = [
  {
    title: 'Những ngày hệ thống cung cấp thêm giấy in',
    value: 'DD/MM',
    buttonText: 'Thêm ngày'
  },
  {
    title: 'Những file được hệ thống hỗ trợ',
    value: '.pdf',
    buttonText: 'Thêm định dạng file'
  }
];

function SystemSettings() {
  return (
    <div className="flex overflow-hidden flex-col h-[600px] 16/10-lg:h-[700px] bg-gray-100">
      <header className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-5 py-2 w-full text-xl font-bold tracking-tight text-center text-black bg-white border-b border-zinc-200 min-h-[50px] max-md:max-w-full">
        <div className="self-stretch my-auto">Tùy chỉnh hệ thống</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3bfc8f9391857443f74fa07d67a8db9c7282a08fef76ddb416db81ec841bc5a?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-9 rounded-2xl aspect-square"
        />
      </header>
      
      <main className="flex flex-col p-5 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-8 items-start w-full text-center text-black max-md:max-w-full">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
        
        <div className="flex flex-wrap gap-8 mt-5 w-full max-md:max-w-full">
          {listItems.map((item, index) => (
            <ListCard key={index} {...item} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default SystemSettings;