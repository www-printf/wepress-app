import * as React from "react";
import Header from '../components/Header';
import PrinterInfo from '../components/PrinterInfo';
import PrintHistory from '../components/PrintHistory';
import PendingPrints from '../components/PendingPrints';
import MaintenanceHistory from '../components/MaintenanceHistory';

export default function PrinterDetails() {
  return (
    <div className="flex overflow-hidden flex-col">
      <Header />
      <div className="flex flex-col p-5 w-full max-md:max-w-full">
        <PrinterInfo />
        <PrintHistory />
        <div className="flex flex-wrap gap-5 justify-between items-start mt-5 max-w-full w-[1095px]">
          <PendingPrints />
          <MaintenanceHistory />
        </div>
      </div>
    </div>
  );
}