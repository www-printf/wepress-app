import { faker } from '@faker-js/faker';

// Tạo danh sách tài liệu mẫu
const generateDocuments = (count) => {
    return Array.from({ length: count }, () => ({
        id: faker.string.uuid(),
        title: faker.system.fileName(),
        author: faker.person.fullName(),
        version: faker.number.int({ min: 1, max: 5 }),
        publish_year: faker.date.future().getFullYear(),
        type: faker.helpers.arrayElement(['PDF', 'DOC', 'DOCX', 'TXT', 'JPG']),
        size: faker.number.int({ min: 100, max: 10000 }) + 'KB',
        thumbnail: faker.image.url(),
        created_at: faker.date.past()
    }));
};

const documents = generateDocuments(50);

export default [
    {
        pattern: '/api/documents',
        method: 'GET',
        handle: (req, res) => {
            const page = parseInt(req.query.page) || 1;
            const per_page = parseInt(req.query.per_page) || 10;
            const sort = req.query.sort || 'name';
            const order = req.query.order || 'asc';

            let filteredDocs = [...documents];

            // Sắp xếp tài liệu
            filteredDocs.sort((a, b) => {
                let compareResult = 0;
                switch (sort) {
                    case 'name':
                        compareResult = a.title.localeCompare(b.title);
                        break;
                    case 'date':
                        compareResult = new Date(a.created_at) - new Date(b.created_at);
                        break;
                    case 'size':
                        compareResult = parseInt(a.size) - parseInt(b.size);
                        break;
                    case 'type':
                        compareResult = a.type.localeCompare(b.type);
                        break;
                    default:
                        compareResult = 0;
                }
                return order === 'asc' ? compareResult : -compareResult;
            });

            // Phân trang
            const startIndex = (page - 1) * per_page;
            const endIndex = startIndex + per_page;
            const paginatedDocs = filteredDocs.slice(startIndex, endIndex);

            return {
                data: paginatedDocs,
                meta: {
                    current_page: page,
                    per_page,
                    total_pages: Math.ceil(filteredDocs.length / per_page),
                    total_items: filteredDocs.length
                }
            };
        }
    }
]; 