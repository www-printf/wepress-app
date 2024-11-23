//Mock các thông số máy in
const generateMockPrinters = (count) => { 
  const printers = [];
  const statuses = ["Sẵn sàng để in", "Đang bảo trì", "Đang in"];
  const rooms = ["Phòng 101", "Phòng 102", "Phòng 103"];

  for (let i = 1; i <= count; i++) {
    printers.push({
      id: i,
      printerName: `Máy in ${i}`,
      printerID: `PRT-${i}`,
      roomNumber: rooms[i % rooms.length],
      paperA5: Math.floor(Math.random() * 500),
      paperA4: Math.floor(Math.random() * 500),
      paperA3: Math.floor(Math.random() * 500),
      inkLevel: Math.floor(Math.random() * 100),
      status: statuses[Math.floor(Math.random() * statuses.length)],
    });
  }
  return printers;
};

const mockPrinters = generateMockPrinters(50);

// Lọc các máy in
export const fetchPrinters = ({ page, perPage, room, status }) => {
  const filteredPrinters = mockPrinters.filter(
    (printer) =>
      (room === "Toàn bộ" || printer.roomNumber === room) &&
      (status === "Toàn bộ" || printer.status === status)
  );

//Phân trang
  const start = (page - 1) * perPage;
  const paginatedPrinters = filteredPrinters.slice(start, start + perPage);

  return {
    data: paginatedPrinters,
    meta: {
      currentPage: page,
      totalPages: Math.ceil(filteredPrinters.length / perPage),
      total: filteredPrinters.length,
    },
  };
};
