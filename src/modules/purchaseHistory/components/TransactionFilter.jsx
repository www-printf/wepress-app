import * as React from "react";

function TransactionFilter() {
  return (
    <section className="flex overflow-hidden flex-col p-5 w-full bg-white rounded-xl border border-solid border-zinc-200 max-md:max-w-full">
      <h2 className="text-xl font-bold tracking-tight text-black">
        Lịch sử giao dịch
      </h2>
      <hr className="mt-2.5 w-full border border-black border-solid min-h-[1px] max-md:max-w-full" />
      <form className="flex flex-wrap gap-10 justify-between items-center mt-2.5 w-full text-sm max-md:max-w-full">
        <div className="flex gap-5 items-center self-stretch my-auto min-w-[240px]">
          <div className="flex flex-col self-stretch my-auto w-[200px]">
            <label htmlFor="fromDate" className="font-semibold tracking-tight text-black">
              Từ ngày
            </label>
            <div className="flex justify-between items-center px-2.5 py-1.5 mt-1.5 w-full whitespace-nowrap bg-white rounded-md border border-solid border-zinc-600 min-h-[30px] text-neutral-800">
              <input 
                type="text"
                id="fromDate"
                className="self-stretch my-auto w-[180px]"
                placeholder="DD/MM/YYYY"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a28e5d93d5c988b84686a20be9c57aec0ccba0681652dd713c7bbc10d9792dcf?placeholderIfAbsent=true&apiKey=73e6d8e4f51f4cad8cd265c0c54a93e2"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              />
            </div>
          </div>
          <div className="flex flex-col self-stretch my-auto w-[200px]">
            <label htmlFor="toDate" className="font-semibold tracking-tight text-black">
              Đến ngày
            </label>
            <div className="flex justify-between items-center px-2.5 py-1.5 mt-1.5 w-full whitespace-nowrap bg-white rounded-md border border-solid border-zinc-600 min-h-[30px] text-neutral-800">
              <input
                type="text"
                id="toDate"
                className="self-stretch my-auto w-[180px]"
                placeholder="DD/MM/YYYY"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fe76a5fb265c5b50517f61308ae98b232871bc5232b681dbf99739c4113ae2e?placeholderIfAbsent=true&apiKey=73e6d8e4f51f4cad8cd265c0c54a93e2"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              />
            </div>
          </div>
        </div>
        <button className="flex gap-2.5 justify-center items-center self-stretch px-2.5 py-1.5 my-auto font-semibold tracking-tight text-center bg-white rounded-lg border border-solid border-zinc-200 min-h-[30px] text-zinc-800">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c0041a8cd0d89872776e001191a6add8a92d2d197ec80d8c730a9d3914da0cb?placeholderIfAbsent=true&apiKey=73e6d8e4f51f4cad8cd265c0c54a93e2"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
          <span className="self-stretch my-auto">Tra cứu</span>
        </button>
      </form>
    </section>
  );
}

export default TransactionFilter;