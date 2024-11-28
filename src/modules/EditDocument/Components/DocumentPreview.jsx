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
        </div>
    );
};

export default DocumentPreview;
