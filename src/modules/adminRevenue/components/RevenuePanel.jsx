import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';
import { Card } from 'flowbite-react';
import RevenueTable from './RevenueTable';
import { getChartData } from '../../../mock/revenueAPI';

const RevenuePanel = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getChartData();
      setChartData(response);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (chartData && chartRef.current) {
      const options = {
        chart: {
          type: 'line',
          height: 1000,
        },
        series: [
          {
            name: 'Doanh thu',
            data: chartData.data,
          },
        ],
        xaxis: {
          categories: chartData.labels,
        },
      };

      const chart = new ApexCharts(chartRef.current, options);
      chart.render();
      return () => {
        chart.destroy();
      };
    }
  }, [chartData]);

  return (
    <div className="flex overflow-hidden flex-col p-5 mt-5 w-full bg-white rounded-xl max-md:max-w-full">
      <div className="flex flex-col overflow-hidden gap-10 items-center justify-center px-2.5 mt-2.5 w-full max-md:max-w-full">
        <Card className="flex-1 max-md:max-w-full w-full">
          <div ref={chartRef}></div>
        </Card>
        <RevenueTable className="flex-1 max-md:max-w-full w-full" />
      </div>
    </div>
  );
};

export default RevenuePanel;


