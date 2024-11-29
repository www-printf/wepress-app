import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import StatisticsPanel from '../components/StatisticsPanel';
import PrinterStatusPanel from '../components/PrinterStatusPanel';
import RevenuePanel from '../components/RevenuePanel';
import PrintOrdersPanel from '../components/PrintOrdersPanel';

export default function DashboardLayout() {
  return (
    <div className="flex overflow-hidden relative">
      <div className="flex absolute right-0 bottom-0 z-0 self-start h-[1596px] min-h-[1596px]  w-full" />
      <div className="flex overflow-hidden z-0 flex-col flex-1 shrink basis-10 min-w-[240px] max-md:max-w-full">
        <DashboardHeader />
        <div className="flex flex-col p-5 w-full max-md:max-w-full">
          <StatisticsPanel />
          <PrinterStatusPanel />
          <RevenuePanel />
          <PrintOrdersPanel />
        </div>
      </div>
    </div>
  );
}