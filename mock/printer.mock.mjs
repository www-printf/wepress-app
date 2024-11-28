//Mock các thông số máy in
export const generateMockPrinters = (count) => { 
  const printers = [];
  const locations = ["Cơ sở Lý Thường Kiệt", "Cơ sở Dĩ An"];
  const statuses = ["Sẵn sàng để in", "Đang bảo trì", "Đang in"];
  const rooms = ["Phòng 101", "Phòng 102", "Phòng 103"];

  const manufacturer = ["Canon", "HP","Brother", "Epson"];
  const modelsByManufacturer = {
    "Canon": ["PIXMA GM2070", "LBP2900", "LBP 6230DN"],
    "HP": ["107a","107w", "LaserJet MFP M236sdw", "LaserJet 135w MFP" ],
    "Brother": ["DCP-B7535DW", "DCP-T720DW", "HL-L2321D"],
    "Epson": ["EcoTank L3250", "L4160 Duplex", "L120"],
  };
  const buildingsByLocation = {
    "Cơ sở Lý Thường Kiệt": ["A2", "A3", "A4", "A5", "B1", "B2", "B3", "B4", "C1", "C2", "C3", "C4"],
    "Cơ sở Dĩ An": ["H1", "H2", "H3", "H6"],
  };
  const locationName = locations[Math.floor(Math.random() * locations.length)];
  const buildingOptions = buildingsByLocation[locationName]; // Lấy tòa nhà phù hợp với location
  const manufacturerName = manufacturer[Math.floor(Math.random() * manufacturer.length)];
  const modelOptions = modelsByManufacturer[manufacturerName]; // Lấy mẫu mã phù hợp với hãng sản xuất

  for (let i = 1; i <= count; i++) {
    printers.push({
      id: i,
      printerName: `Máy in ${i}`,
      printerID: `PRT-${i}`,
      locationName: locationName,
      roomNumber: rooms[i % rooms.length],
      building: buildingOptions[Math.floor(Math.random() * buildingOptions.length)],
      paperA5: Math.floor(Math.random() * 500),
      paperA4: Math.floor(Math.random() * 500),
      paperA3: Math.floor(Math.random() * 500),
      inkLevel: Math.floor(Math.random() * 100),
      manufacturer: manufacturerName,
      model: modelOptions[Math.floor(Math.random() * modelOptions.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],

      //Dành cho status Đang in:
      queueCount: Math.floor(Math.random() * 5), // Số tài liệu trong hàng đợi
      totalPagesInQueue: Math.floor(Math.random() * 50), // Tổng số trang
      currentPages: Math.floor(Math.random() * 30), // Số trang tài liệu đang in
      printProgress: Math.floor(Math.random() * 100), // Tiến trình in
    });
  }
  return printers;
};

export const mockPrinters = generateMockPrinters(40);

// Lọc các máy in
export const fetchPrinters = ({ page, perPage, location, room, status }) => {
  const filteredPrinters = mockPrinters.filter(
    (printer) =>
      (location === "Tất cả" || printer.locationName === location) &&
      (room === "Tất cả" || printer.roomNumber === room) &&
      (status === "Tất cả" || printer.status === status)
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
