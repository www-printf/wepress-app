// import React from 'react';


// export default function RevenuePanel() {
//   return (
//     <div className="flex overflow-hidden flex-col p-5 mt-5 w-full bg-white rounded-xl max-md:max-w-full">
//       <div className="flex flex-wrap gap-10 justify-between items-center w-full text-center max-md:max-w-full">
//         <div className="self-stretch my-auto text-xl font-bold tracking-tight text-black">
//           Doanh thu
//         </div>
//         <button className="flex gap-2.5 justify-center items-center self-stretch p-2.5 my-auto text-sm font-semibold tracking-tight bg-white rounded-lg border border-solid border-zinc-200 text-zinc-800">
//           <div className="flex gap-2.5 justify-center items-center self-stretch my-auto">
//             <div className="self-stretch my-auto">Chi tiết</div>
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/19c8e0307922e279b35373acd7068925c9279ecffee7812d133cabb48707c89b?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
//               alt=""
//               className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
//             />
//           </div>
//         </button>
//       </div>
//       <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-2.5 mt-2.5 w-full max-md:max-w-full">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/4278659f1994186528c1b002e428c73d67a1f581c06b21fbd61a255825410df4?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
//           alt="Revenue chart"
//           className="object-contain self-stretch my-auto aspect-[1.54] min-w-[240px] w-[500px] max-md:max-w-full"
//         />
//         <RevenueTable />
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import { Card } from 'flowbite-react';
import RevenueTable from './RevenueTable';
const RevenuePanel = () => {
  const chartRef = useRef(null); // To reference the chart container
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 6 }, (_, index) => currentYear - (5 - index));
  useEffect(() => {
    const options = {
      chart: {
        type: 'line',
        height: 350,
      },
      series: [
        {
          name: 'Product A',
          data: [34, 44, 54, 21, 12, 43],
        },
      ],
      xaxis: {
        categories: years,
      },
    };

    // Initialize the ApexChart instance
    const chart = new ApexCharts(chartRef.current, options);
    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="flex overflow-hidden flex-col p-5 mt-5 w-full bg-white rounded-xl max-md:max-w-full">
       <div className="flex flex-wrap gap-10 justify-between items-center w-full text-center max-md:max-w-full">
         <div className="self-stretch my-auto text-xl font-bold tracking-tight text-black">
           Doanh thu
         </div>
         <button className="flex gap-2.5 justify-center items-center self-stretch p-2.5 my-auto text-sm font-semibold tracking-tight bg-white rounded-lg border border-solid border-zinc-200 text-zinc-800">
           <div className="flex gap-2.5 justify-center items-center self-stretch my-auto">
            <div className="self-stretch my-auto">Chi tiết</div>
             <img
               loading="lazy"
               src="https://cdn.builder.io/api/v1/image/assets/TEMP/19c8e0307922e279b35373acd7068925c9279ecffee7812d133cabb48707c89b?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
               alt=""
               className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
             />
           </div>
         </button>
      </div>
      <div className="flex overflow-hidden gap-10 justify-between items-start px-2.5 mt-2.5 w-full max-md:max-w-full">
        <Card className="flex-1 max-md:max-w-full">
            <div ref={chartRef}></div> {/* Chart will be rendered inside this div */}
        </Card>

        <RevenueTable className="flex-1 max-md:max-w-full" />
        </div>

    </div>
   );
 };

export default RevenuePanel;


