import * as React from "react";
import TransactionHistory from "./TransactionHistory";
import PrintHistory from "./PrintHistory";

export function HistoryPage() {
  return (
    <main className="flex flex-wrap gap-5 justify-center items-center mt-5">
      <TransactionHistory />
      <PrintHistory />
    </main>
  );
}