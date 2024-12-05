import React from 'react';
import PrintHistoryHeader from '../components/PrintHistoryHeader';
import PrintHistoryFilters from '../components/PrintHistoryFilters';
import PrintHistoryRow from '../components/PrintHistoryRow';
import PrintHistoryLoadMore from '../components/PrintHistoryLoadMore';

const PrintHistoryTable = () => {
  const printHistory = [
    {
      id: 'SPS_00001',
      printerId: 'CS2_H6_110_1',
      documentName: 'BTL2_20241.pdf',
      paperSize: 'A4',
      pageCount: '26',
      printDate: 'DD/MM/YYYY',
      status: 'completed'
    },
    {
      id: 'SPS_00002',
      printerId: 'CS1_B1_210_3',
      documentName: 'DCMH.SP1039_History of Vietnamese C...Party.pdf',
      paperSize: 'A3',
      pageCount: '40',
      printDate: 'DD/MM/YYYY',
      status: 'printing'
    },
    {
      id: 'SPS_00012',
      printerId: 'CS2_H3_103_2',
      documentName: 'BTL LSĐ - Phần 3.1.docx',
      paperSize: 'A4',
      pageCount: '10',
      printDate: 'DD/MM/YYYY',
      status: 'interrupted'
    },
    {
      id: 'SPS_00001',
      printerId: 'CS2_H6_110_1',
      documentName: 'BTL2_20241.pdf',
      paperSize: 'A4',
      pageCount: '26',
      printDate: 'DD/MM/YYYY',
      status: 'completed'
    },
    {
      id: 'SPS_00002',
      printerId: 'CS1_B1_210_3',
      documentName: 'DCMH.SP1039_History of Vietnamese C...Party.pdf',
      paperSize: 'A3',
      pageCount: '40',
      printDate: 'DD/MM/YYYY',
      status: 'printing'
    },
    {
      id: 'SPS_00012',
      printerId: 'CS2_H3_103_2',
      documentName: 'BTL LSĐ - Phần 3.1.docx',
      paperSize: 'A4',
      pageCount: '10',
      printDate: 'DD/MM/YYYY',
      status: 'interrupted'
    },
    {
      id: 'SPS_00001',
      printerId: 'CS2_H6_110_1',
      documentName: 'BTL2_20241.pdf',
      paperSize: 'A4',
      pageCount: '26',
      printDate: 'DD/MM/YYYY',
      status: 'completed'
    },
    {
      id: 'SPS_00002',
      printerId: 'CS1_B1_210_3',
      documentName: 'DCMH.SP1039_History of Vietnamese C...Party.pdf',
      paperSize: 'A3',
      pageCount: '40',
      printDate: 'DD/MM/YYYY',
      status: 'printing'
    },
    {
      id: 'SPS_00012',
      printerId: 'CS2_H3_103_2',
      documentName: 'BTL LSĐ - Phần 3.1.docx',
      paperSize: 'A4',
      pageCount: '10',
      printDate: 'DD/MM/YYYY',
      status: 'interrupted'
    }
  ];

  return (
    <div className="flex overflow-hidden flex-col items-center px-8 py-10 max-md:px-5 bg-gray-100">
      <div className="text-4xl font-bold tracking-tighter text-center text-black">
        Lịch sử in ấn
      </div>
      <div className="flex flex-col mt-5 max-w-full w-[1210px]">
        <PrintHistoryFilters />
        <div className="flex flex-col items-center self-center px-2.5 pt-2.5 pb-5 mt-2.5 w-full bg-white rounded-xl border border-solid border-zinc-200 max-w-[1210px] max-md:max-w-full">
          <div className="flex flex-col w-full max-w-[1190px] max-md:max-w-full">
            <PrintHistoryHeader />
            <div className="flex flex-col w-full max-md:max-w-full">
              {printHistory.map((item) => (
                <PrintHistoryRow key={item.id} {...item} />
              ))}
            </div>
          </div>
          <PrintHistoryLoadMore />
        </div>
      </div>
    </div>
  );
};

export default PrintHistoryTable;