// Hàm tạo thời gian ngẫu nhiên
const getRandomTime = () => {
    const hours = Math.floor(Math.random() * 9) + 8;
    const minutes = Math.floor(Math.random() * 60);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};

// Hàm tạo ngày ngẫu nhiên
const getRandomDate = () => {
    const start = new Date(2024, 0, 1);
    const end = new Date();
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate;
};

// Hàm format ngày thành chuỗi DD/MM/YYYY
const formatDate = (date) => {
    return date.toLocaleDateString("en-GB");
};

// Tạo dữ liệu giao dịch mẫu
const generateTransactions = (count) => {
    const transactions = [];
    const packages = ["Basic", "Premium", "VIP", "Enterprise"];

    for (let i = 0; i < count; i++) {
        const date = getRandomDate();
        transactions.push({
            id: i + 1,
            time: getRandomTime(),
            date: formatDate(date),
            rawDate: date, // Lưu ngày gốc để tính toán
            userId: Math.floor(Math.random() * 10000).toString().padStart(4, '0'),
            package: packages[Math.floor(Math.random() * packages.length)],
            amount: Math.floor(Math.random() * 900000) + 100000 // Số tiền từ 100,000 đến 1,000,000
        });
    }
    return transactions;
};

// Tạo dữ liệu biểu đồ từ transactions
const generateChartData = (transactions) => {
    const months = [
        'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
        'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
    ];

    // Tính tổng doanh thu theo tháng
    const monthlyRevenue = new Array(12).fill(0);

    transactions.forEach(transaction => {
        const month = transaction.rawDate.getMonth();
        monthlyRevenue[month] += transaction.amount;
    });

    return {
        labels: months,
        data: monthlyRevenue
    };
};

// Tạo dữ liệu mẫu một lần và sử dụng lại
const mockTransactions = generateTransactions(50);
const mockChartData = generateChartData(mockTransactions);

// Định dạng số tiền thành chuỗi tiền tệ VND
const formatCurrency = (amount) => {
    return amount.toLocaleString("vi-VN") + "đ";
};

// API endpoints
export const getTransactions = async (page = 1, perPage = 10) => {
    const start = (page - 1) * perPage;
    const end = start + perPage;

    // Format lại số tiền trước khi trả về
    const formattedTransactions = mockTransactions.map(t => ({
        ...t,
        amount: formatCurrency(t.amount)
    }));

    return {
        data: formattedTransactions.slice(start, end),
        meta: {
            currentPage: page,
            perPage: perPage,
            total: mockTransactions.length,
            totalPages: Math.ceil(mockTransactions.length / perPage)
        }
    };
};

export const getChartData = async () => {
    return mockChartData;
};