import React from 'react';
import DocumentPreview from '../Components/DocumentPreview';
import PrintOptions from '../Components/PrintOptions';

const EditPrintFormat = ({ error }) => {
    return (
        <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8">
            {/* Tiêu đề */}
            <div className="text-center mb-6">
                <h1 className="text-3xl font-semibold text-gray-800">In tài liệu</h1>
                <h2 className="text-lg text-gray-600">Chỉnh sửa định dạng cho bản in</h2>
            </div>

            {/* Bố cục chính */}
            <div className="flex bg-white shadow-lg rounded-lg max-w-7xl w-full overflow-hidden">
                {/* Phần xem trước tài liệu */}
                <DocumentPreview error={error} />

                {/* Phần tùy chọn in */}
                <PrintOptions />
            </div>
        </div>
    );
};

export default EditPrintFormat;
