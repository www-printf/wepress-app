import * as React from "react";
import TransactionHistory from "./TransactionHistory";
import PrintHistory from "./PrintHistory";

export function HistoryPage() {
  return (
    <main className="flex overflow-hidden flex-wrap gap-5 justify-between items-start mt-5">
      <TransactionHistory />
      <PrintHistory />
    </main>
  );
}