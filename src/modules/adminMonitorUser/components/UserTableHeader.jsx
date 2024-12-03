export function UserTableHeader() {
    return (
      <div className="flex flex-wrap items-center text-sm font-semibold tracking-tight text-black bg-gray-100 rounded-t-xl border border-solid border-zinc-200 max-md:max-w-full">
        <div className="gap-1.5 self-stretch p-2.5 my-auto w-[120px]">ID Người dùng</div>
        <div className="gap-1.5 self-stretch p-2.5 my-auto whitespace-nowrap w-[200px]">Tên</div>
        <div className="gap-1.5 self-stretch p-2.5 my-auto w-[100px]">Chức vụ</div>
        <div className="gap-1.5 self-stretch p-2.5 my-auto w-[120px]">Tổng số đơn in</div>
        <div className="gap-1.5 self-stretch p-2.5 my-auto w-[200px]">Lần in gần nhất</div>
        <div className="gap-1.5 self-stretch p-2.5 my-auto w-[200px]">Tình trạng tài khoản</div>
        <div className="gap-1.5 self-stretch p-2.5 my-auto">Thông tin chi tiết</div>
      </div>
    );
  }