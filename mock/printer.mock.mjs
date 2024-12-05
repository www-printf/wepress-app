//Mock các thông số máy in
export const generateMockPrinters = (count) => { 
  const printers = [];
  const locations = ["Cơ sở Lý Thường Kiệt", "Cơ sở Dĩ An"];
  const statuses = ["Sẵn sàng để in", "Đang bảo trì", "Đang in"];

  const manufacturer = ["Canon", "HP","Brother", "Epson"];
  const modelsByManufacturer = {
    "Canon": ["PIXMA GM2070", "LBP2900", "LBP 6230DN"],
    "HP": ["107a","107w", "LaserJet MFP M236sdw", "LaserJet 135w MFP" ],
    "Brother": ["DCP-B7535DW", "DCP-T720DW", "HL-L2321D"],
    "Epson": ["EcoTank L3250", "L4160 Duplex", "L120"],
  };
  const roomsByLocation = {
    "Cơ sở Lý Thường Kiệt": ["A1 - 101", "A1 - 102", "A2 - 101", "A2 - 102", "A3 - 101", "A3 - 102", "A4 - 101",
      "B1 - 101", "B1 - 102", "B2 - 101", "B2 - 102","B3 - 101", "B3 - 102","B4 - 101", "B4 - 102","C1 - 101", "C1 - 102", "C2 - 101", "C2 - 102", "C3 - 101", "C3 - 102"],
    "Cơ sở Dĩ An": ["H1 - 101", "H1 - 102", "H2 - 101", "H2 - 102", "H3 - 102","H3 - 101", "H6 - 101", "H6 - 102"],
  };
  
  for (let i = 1; i <= count; i++) {
    const locationName = locations[Math.floor(Math.random() * locations.length)];
    const rooms = roomsByLocation[locationName]; // Lấy phong in phù hợp với location
    const manufacturerName = manufacturer[Math.floor(Math.random() * manufacturer.length)];
    const modelOptions = modelsByManufacturer[manufacturerName]; // Lấy mẫu mã phù hợp với hãng sản xuất
    printers.push({
      id: i,
      printerName: `Máy in ${i}`,
      printerID: `PT${i.toString().padStart(4, "0")}`,
      locationName: locationName,
      roomNumber: rooms[i % rooms.length],
      // roomNumber: rooms[Math.floor(Math.random() * rooms.length)],
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

export const mockPrinters = generateMockPrinters(100);

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
