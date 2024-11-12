import React from 'react';
import { useSelector } from 'react-redux';

const DocumentPreview = ({ error }) => {
    const { file, content } = useSelector((state) => state.upload);

    return (
        <div className="flex-grow bg-gray-100 p-4">
            <div className="border-b border-gray-300 mb-4 bg-gray-300 flex items-center justify-center py-2">
                <span className="text-gray-700 font-semibold text-center">
                    {file ? file.name : 'Tên tài liệu'}
                </span>
            </div>
            <div className="flex justify-center items-center h-[600px] bg-white shadow-inner rounded-md overflow-auto">
                {error ? (
                    <p className="text-red-500">{error}</p>
                ) : content ? (
                    file.type === "application/pdf" ? (
                        <iframe
                            src={content}
                            title="PDF Preview"
                            className="w-full h-full"
                            frameBorder="0"
                        />
                    ) : file.type && file.type.startsWith("image/") ? (
                        <img src={content} alt="Preview" className="object-contain h-full w-full" />
                    ) : (
                        <pre className="whitespace-pre-wrap break-words overflow-auto p-4">{content}</pre>
                    )
                ) : (
                    <p className="text-gray-500">[Preview of the Document]</p>
                )}
            </div>
            <div className="flex items-center justify-center bg-gray-800 text-white p-2 mt-4 rounded-md">
                <span>Trang 1 / [N]</span>
                <div className="flex ml-4 space-x-2">
                    <button className="bg-gray-700 px-2 rounded">-</button>
                    <button className="bg-gray-700 px-2 rounded">+</button>
                </div>
            </div>
        </div>
    );
};

export default DocumentPreview;
