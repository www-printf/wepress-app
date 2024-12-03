import { useState } from 'react';
import { UserTableHeader } from './UserTableHeader';
import { UserTableRow } from './UserTableRow';
import { userData } from './userData';

export function UserTable() {
  // Tạo state để lưu số lượng hàng hiển thị
  const [visibleCount, setVisibleCount] = useState(10);

  // Hàm xử lý khi bấm "Xem thêm"
  const handleLoadMore = () => {
    setVisibleCount(visibleCount + 10);
  };

  return (
    <div className="flex flex-col justify-center items-center p-5 w-full max-md:max-w-full">
      <div className="flex flex-col items-center max-md:max-w-full">
        <div className="flex overflow-hidden flex-col rounded-xl max-md:max-w-full">
          <UserTableHeader />
          <div className="flex flex-col max-md:max-w-full">
            {/* Lọc và chỉ hiển thị tối đa visibleCount hàng */}
            {userData.slice(0, visibleCount).map((user, index) => (
              <UserTableRow key={index} user={user} />
            ))}
          </div>
        </div>
        {/* Nút Xem thêm */}
        <button
          onClick={handleLoadMore}
          className="flex gap-2.5 justify-center items-center p-2.5 mt-2.5 text-sm font-semibold tracking-tight text-center bg-white rounded-lg border border-solid border-zinc-200 text-zinc-800"
        >
          <span className="gap-2.5 self-stretch my-auto">Xem thêm</span>
        </button>
      </div>
    </div>
  );
}