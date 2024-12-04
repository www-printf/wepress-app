function generateRandomTransactionData() {
    const types = ["increase", "decrease"];
    const transactionData = [];

    for (let i = 0; i < 5; i++) {
        const randomDate = `${String(Math.floor(Math.random() * 31 + 1)).padStart(2, '0')}/${String(Math.floor(Math.random() * 12 + 1)).padStart(2, '0')}/2024`; // Ngày tháng ngẫu nhiên
        const randomType = types[Math.floor(Math.random() * types.length)];
        const randomAmount = randomType === "increase" 
            ? `+ ${Math.floor(Math.random() * 100 + 10)} trang giấy` 
            : `- ${Math.floor(Math.random() * 50 + 10)} trang giấy`; // Số trang ngẫu nhiên
        const randomContent = randomType === "increase"
            ? "Mua thêm giấy in"
            : `In tài liệu document${Math.floor(Math.random() * 100 + 1)}.pdf`; // Nội dung ngẫu nhiên

        transactionData.push({
            date: randomDate,
            content: randomContent,
            amount: randomAmount,
            type: randomType
        });
    }

    return transactionData;
}
const transactionData = generateRandomTransactionData();
export { transactionData };