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
import { setUploadedFile } from "../../../store/slices/uploadSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../../../routes/endPoints";
import request from "../../../utils/request";

const fetchDocuments = async ({ page, per_page }) => {
  //, sort, order }) => {
  const { documents: data } = await request.get(`/documents/download`, {
    params: {
      page,
      per_page,
      // sort,
      // order,
    },
  });

  return data;
};

const MyDocuments = () => {
  const [viewMode, setViewMode] = useState("list");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const dispatch = useDispatch();

  // const [showModal, setShowModal] = useState(false);
  // const [selectedDoc, setSelectedDoc] = useState(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["documents", currentPage], //, sortBy, sortOrder],
    queryFn: () =>
      fetchDocuments({
        page: currentPage,
        per_page: 10,
        // sort: sortBy,
        // order: sortOrder,
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

  const handleViewDocument = (doc) => {
    fetch(doc.url)
      .then((res) => res.blob())
      .then((blob) => {
        let docFile = new File([blob], doc.metadata.name, {
          ...doc.metadata,
          type: doc.metadata.mime_type,
        });
        dispatch(setUploadedFile({ file: docFile }));
        navigate(ENDPOINTS.USER.EDITDOCUMENT);
      });
  };

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
          {data?.map((doc) => (
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
                    <h3 className="text-sm font-medium">{doc.metadata.name}</h3>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-gray-600">
                      {doc.metadata.extension.toUpperCase()}
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
                      onClick={() => handleViewDocument(doc)}
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
                    onClick={() => handleViewDocument(doc)}
                  >
                    <img
                      src={`https://picsum.photos/300/400?random=${
                        Math.floor(Math.random() * 100) + 1
                      }`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* <h3 className="text-sm font-medium truncate">{doc.title}</h3> */}
                  {/* <div className="mt-2 text-xs text-gray-500">
                    {doc.metadata.name.replace(/\.[^/.]+$/, '')}
                  </div> */}
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{doc.metadata.extension.toUpperCase()}</span>
                    <span>{(doc.metadata.size / 1024).toFixed(2) + " KB"}</span>
                  </div>
                  {/* <div className="mt-2 text-xs text-gray-500">
                    {"Tác giả: " + doc.author}
                  </div>
                  <div className="text-xs text-gray-500">
                    {"Phiên bản: " + doc.version}
                  </div>
                  <div className="text-xs text-gray-500">
                    {"Năm xuất bản: " + doc.created_at.slice(0, 4)}
                </div> */}
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
            totalPages={currentPage + 1}
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
