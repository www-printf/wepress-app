function generateRandomPrintData() {
    const statuses = ["printing", "completed", "interrupted"];
    const printData = [];

    for (let i = 0; i < 5; i++) {
        const randomDate = `0${Math.floor(Math.random() * 12) + 1}/0${Math.floor(Math.random() * 28) + 1}/202${Math.floor(Math.random() * 10) + 1}`;
        const randomDocument = `document_${Math.floor(Math.random() * 1000)}.pdf`;
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

        printData.push({
            date: randomDate,
            document: randomDocument,
            status: randomStatus
        });
    }

    return printData;
}
const printData = generateRandomPrintData();

export { printData };
