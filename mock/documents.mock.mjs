import ENDPOINTS from "../src/constants/apiEndpoints.mjs";

// Tạo dữ liệu mẫu
const generateMockDocuments = (count) => {
    const documents = [];
    const types = ['pdf', 'doc', 'docx', 'txt', 'jpg'];

    for (let i = 1; i <= count; i++) {
        documents.push({
            id: i,
            title: `Tài liệu ${i}`,
            type: types[Math.floor(Math.random() * types.length)],
            size: `${Math.floor(Math.random() * 10)}MB`,
            created_at: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
            thumbnail: `https://picsum.photos/300/400?random=${i}`,
        });
    }
    return documents;
};

const mockDocuments = generateMockDocuments(50);

// Hàm sắp xếp và phân trang
const getDocuments = (page, per_page, sort, order) => {
    let sortedDocs = [...mockDocuments];

    // Sắp xếp
    sortedDocs.sort((a, b) => {
        if (sort === 'name') {
            return order === 'asc' ?
                a.title.localeCompare(b.title) :
                b.title.localeCompare(a.title);
        }
        if (sort === 'date') {
            return order === 'asc' ?
                new Date(a.created_at) - new Date(b.created_at) :
                new Date(b.created_at) - new Date(a.created_at);
        }
        if (sort === 'type') {
            return order === 'asc' ?
                a.type.localeCompare(b.type) :
                b.type.localeCompare(a.type);
        }
        if (sort === 'size') {
            const aSize = parseInt(a.size);
            const bSize = parseInt(b.size);
            return order === 'asc' ? aSize - bSize : bSize - aSize;
        }
        return 0;
    });

    // Phân trang
    const start = (page - 1) * per_page;
    const paginatedDocs = sortedDocs.slice(start, start + per_page);

    return {
        data: paginatedDocs,
        meta: {
            current_page: page,
            per_page: per_page,
            total: mockDocuments.length,
            total_pages: Math.ceil(mockDocuments.length / per_page)
        }
    };
};

export default [
    {
        pattern: "/api/documents",
        method: "GET",
        handle: (req, res) => {
            const url = new URL(req.url, `http://${req.headers.host}`);
            const page = parseInt(url.searchParams.get("page")) || 1;
            const per_page = parseInt(url.searchParams.get("per_page")) || 10;
            const sort = url.searchParams.get("sort") || "name";
            const order = url.searchParams.get("order") || "asc";

            const result = getDocuments(page, per_page, sort, order);

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(result));
        }
    }
]; 