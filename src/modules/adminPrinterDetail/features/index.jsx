import * as React from "react";
import InputField from "../components/InputField";
import PaperSizeSelector from "../components/PaperSizeSelector";
import PaperCountInput from "../components/PaperCountInput";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Alert } from "flowbite-react";

const paperSizes = ["A3", "A4", "A5"];

export default function PrinterForm() {
  const [successMessage, setSuccessMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(true);  // Giả lập thêm máy in thành công
    setTimeout(() => setSuccessMessage(false), 3000);  // Ẩn thông báo sau 3 giây
  };

  return (
    <div className="flex overflow-hidden flex-col">
      <header className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-5 py-2 w-full text-xl font-bold tracking-tight text-center text-black bg-white border-b border-zinc-200 min-h-[50px] max-md:max-w-full">
        <div className="self-stretch my-auto">Các máy in</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ade77393d3036a720f62c087037e113190e701f0cd2f0277b394c805ec5e8b5?placeholderIfAbsent=true&apiKey=73e6d8e4f51f4cad8cd265c0c54a93e2"
          className="object-contain shrink-0 self-stretch my-auto w-9 rounded-2xl aspect-square"
          alt=""
        />
      </header>
      
      <main className="flex flex-col justify-center p-5 w-full max-md:max-w-full">
        <form className="flex overflow-hidden flex-col items-center p-5 w-full bg-white rounded-xl max-md:max-w-full">
          <div className="flex-1 shrink gap-2.5 self-stretch w-full text-xl font-bold tracking-tight text-black max-md:max-w-full">
            Thêm máy in mới
          </div>
          
          <div className="flex flex-wrap gap-5 justify-center items-start mt-5 max-md:max-w-full">
            <div className="flex flex-col w-60 text-sm font-semibold tracking-tight">
              <div className="text-base font-bold tracking-tight text-black">
                Thông tin chung
              </div>
              <InputField label="Mã máy in" id="printerId" />
              <InputField label="Hãng sản xuất" id="manufacturer" />
              <InputField label="Tên máy in" id="printerName" />
              <InputField label="Mẫu mã" id="model" />
            </div>

            <div className="flex flex-col w-60 text-sm">
              <div className="text-base font-bold tracking-tight text-black">
                Vị trí đặt máy
              </div>
              <div className="flex flex-col mt-2.5 w-full">
                <label htmlFor="facility" className="font-semibold tracking-tight text-black">
                  Cơ sở
                </label>
                <div className="flex gap-5 justify-between items-center px-2.5 py-1.5 mt-1.5 w-full whitespace-nowrap bg-white rounded-md border border-solid border-zinc-200 min-h-[30px] text-neutral-800">
                  <select id="facility" className="self-stretch my-auto w-full border-none bg-transparent">
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col mt-2.5 w-full">
                <label htmlFor="building" className="font-semibold tracking-tight text-black">
                  Cơ sở
                </label>
                <div className="flex gap-5 justify-between items-center px-2.5 py-1.5 mt-1.5 w-full whitespace-nowrap bg-white rounded-md border border-solid border-zinc-200 min-h-[30px] text-neutral-800">
                  <select id="building" className="self-stretch my-auto w-full border-none bg-transparent">
                    <option>H1</option>
                    <option>H2</option>
                    <option>A1</option>
                    <option>A4</option>
                    <option>B2</option>
                    <option>C1</option>
                    <option>C5</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col mt-2.5 w-full">
                <label htmlFor="room" className="font-semibold tracking-tight text-black">
                  Phòng in
                </label>
                <div className="flex gap-5 justify-between items-center px-2.5 py-1.5 mt-1.5 w-full whitespace-nowrap bg-white rounded-md border border-solid border-zinc-200 min-h-[30px] text-neutral-800">
                  <select id="room" className="self-stretch my-auto w-full border-none bg-transparent">
                    <option>101</option>
                    <option>201</option>
                    <option>301</option>
                    <option>401</option>
                    <option>501</option>
                    <option>601</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex overflow-hidden flex-col min-w-[240px] max-md:max-w-full">
              <div className="text-base font-bold tracking-tight text-black">
                Các tính năng của máy
              </div>
              <div className="flex flex-wrap gap-5 items-start mt-2.5 text-sm font-semibold tracking-tight max-md:max-w-full">
                <div className="flex flex-col min-w-[240px] w-[275px]">
                  <div className="flex flex-col justify-center self-start text-black">
                    <div className="mb-2.5">Các cỡ giấy được hỗ trợ</div>
                    <div className="flex gap-2.5 justify-center items-center whitespace-nowrap">
                      {paperSizes.map(size => (
                        <PaperSizeSelector key={size} size={size} />
                      ))}
                    </div>
                  </div>
                  
                  {paperSizes.map(size => (
                    <PaperCountInput key={size} paperSize={size} />
                  ))}
                </div>

                <div className="flex flex-col w-60">
                  <div className="flex flex-col w-60 max-w-full">
                    <InputField label="Kiểu kết nối" id="connectionType" />
                    <InputField label="Địa chỉ URI" id="uriAddress" />
                  </div>
                </div>
              </div>
            </div>
          </div>
            {/* Thông báo thành công */}
            {successMessage && (
              <Alert
                color="success"
                className="mt-5"
                onDismiss={() => setSuccessMessage(false)}
              >
                Máy in đã được thêm thành công!
              </Alert>
            )}
          <div className="flex gap-2.5 items-start mt-5 text-sm font-semibold tracking-tight text-center text-zinc-800">
            <Link to="/admin/printers" className="flex gap-2.5 justify-center items-center p-2.5 bg-white rounded-lg border border-solid border-zinc-200 w-[105px]">
               Quay lại 
            </Link>
            <button onSubmit={handleSubmit} type="submit" className="flex gap-2.5 justify-center items-center p-2.5 bg-white rounded-lg border border-solid border-zinc-200">
              Thêm máy in
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}