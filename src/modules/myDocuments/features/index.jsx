import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Select, Pagination, Spinner, Modal } from "flowbite-react";
import {
  HiViewGrid,
  HiViewList,
  HiArrowUp,
  HiArrowDown,
  HiEye,
  HiDownload,
  HiDotsVertical,
  HiX,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../../../routes/endPoints";
import request from "../../../utils/request";

const fetchDocuments = async ({ page, per_page, sort, order }) => {
  const response = await request.get(
    `/documents?page=${page}&per_page=${per_page}&sort=${sort}&order=${order}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const MyDocuments = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  // const [showModal, setShowModal] = useState(false);
  // const [selectedDoc, setSelectedDoc] = useState(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["documents", currentPage, sortBy, sortOrder],
    queryFn: () =>
      fetchDocuments({
        page: currentPage,
        per_page: 10,
        sort: sortBy,
        order: sortOrder,
      }),
  });

  const navigate = useNavigate();

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  // const handleViewDocument = (doc) => {
  //     setSelectedDoc(doc);
  //     setShowModal(true);
  // };

  // const handleDownload = (doc) => {
  //     const link = document.createElement('a');
  //     link.href = doc.url;
  //     link.download = doc.title; // Tên file khi tải về
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  // };

  if (error) {
    return (
      <div className="text-red-500">Đã có lỗi xảy ra: {error.message}</div>
    );
  }

  return (
    <div className="bg-[#e5e5e5] p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sắp xếp theo</span>
          <div className="flex items-center">
            <Select
              id="sortBy"
              value={sortBy}
              onChange={(e) => handleSort(e.target.value)}
              className="w-32 rounded-r-none"
            >
              <option value="name">Tên</option>
              <option value="date">Ngày tạo</option>
              <option value="size">Kích thước</option>
              <option value="type">Loại file</option>
            </Select>
            <button
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className="p-2.5 bg-white border border-l-0 border-gray-200 rounded-r-lg hover:bg-gray-100"
            >
              {sortOrder === "asc" ? (
                <HiArrowUp className="h-4 w-4" />
              ) : (
                <HiArrowDown className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded ${
              viewMode === "grid" ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            <HiViewGrid className="h-5 w-5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded ${
              viewMode === "list" ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            <HiViewList className="h-5 w-5" />
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Spinner size="xl" />
        </div>
      ) : (
        <div
          className={
            viewMode === "list"
              ? "space-y-2"
              : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4"
          }
        >
          {viewMode === "list" && (
            <div className="flex items-center bg-white p-4 rounded-lg font-medium text-gray-700">
              <div className="flex-1">Tên tài liệu</div>
              <div className="flex-1">Loại</div>
              <div className="flex-1">Tác giả</div>
              <div className="flex-1">Phiên bản</div>
              <div className="flex-1">Năm xuất bản</div>
              <div className="w-[24px]"></div>
            </div>
          )}
          {data?.data.map((doc) => (
            <div
              key={doc.id}
              className={`bg-white ${
                viewMode === "list"
                  ? "p-4 flex justify-between items-center"
                  : "p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
              }`}
            >
              {viewMode === "list" ? (
                <>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{doc.title}</h3>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-gray-600">
                      {doc.type.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-gray-600">{doc.author}</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-gray-600">{doc.version}</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-gray-600">
                      {doc.created_at.slice(0, 4)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="p-1 hover:bg-gray-100 rounded"
                      onClick={() => navigate(ENDPOINTS.USER.EDITDOCUMENT)}
                    >
                      <HiEye className="h-4 w-4 text-gray-600" />
                    </button>
                    {/* <button
                                            className="p-1 hover:bg-gray-100 rounded"
                                            onClick={() => handleDownload(doc)}
                                        >
                                            <HiDownload className="h-4 w-4 text-gray-600" />
                                        </button> */}
                    {/* <button className="p-1 hover:bg-gray-100 rounded">
                                            <HiDownload className="h-4 w-4 text-gray-600" />
                                        </button> */}
                    {/* <a
                                            href={doc.url}
                                            download={doc.title}
                                            className="p-1 hover:bg-gray-100 rounded"
                                        >
                                            <HiDownload className="h-4 w-4 text-gray-600" />
                                        </a> */}
                    {/* <button className="p-1 hover:bg-gray-100 rounded">
                                            <HiDotsVertical className="h-4 w-4 text-gray-600" />
                                        </button> */}
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="aspect-[3/4] mb-2 overflow-hidden rounded-md cursor-pointer"
                    onClick={() => navigate(ENDPOINTS.USER.EDITDOCUMENT)}
                  >
                    <img
                      src={doc.thumbnail}
                      alt={doc.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-medium truncate">{doc.title}</h3>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{doc.type.toUpperCase()}</span>
                    <span>{doc.size}</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    {"Tác giả: " + doc.author}
                  </div>
                  <div className="text-xs text-gray-500">
                    {"Phiên bản: " + doc.version}
                  </div>
                  <div className="text-xs text-gray-500">
                    {"Năm xuất bản: " + doc.created_at.slice(0, 4)}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {data && (
        <div className="flex justify-center mt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={data.meta.total_pages}
            onPageChange={setCurrentPage}
            showIcons
          />
        </div>
      )}
      {/* 
            <Modal
                show={showModal}
                onClose={() => setShowModal(false)}
                size="7xl"
            >
                <Modal.Header>
                    {selectedDoc?.title}
                    <button
                        onClick={() => setShowModal(false)}
                        className="absolute top-4 right-4"
                    >
                    </button>
                </Modal.Header>
                <Modal.Body className="overflow-hidden">
                    <div className="relative w-full h-[80vh] overflow-auto">
                        <iframe
                            src={selectedDoc?.url}
                            title={selectedDoc?.title}
                            className="w-full h-full"
                            frameBorder="0"
                            scrolling="no"
                            style={{
                                overflow: 'hidden'
                            }}
                        />
                    </div>
                </Modal.Body>
            </Modal> */}
    </div>
  );
};

export default MyDocuments;
