import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { setUploadedFile, clearUploadedFile } from '../store/slices/uploadSlice';
import axios from 'axios';
import endpoints from '../constants/apiEndpoints';
import request from '../utils/request';
export const useFileUpload = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { file, content } = useSelector((state) => state.upload);

  // Gửi yêu cầu đến API để lấy Presigned URL
  const getPresignedUrl = async (file) => {
    try {
      // Gửi yêu cầu POST đến endpoint yêu cầu Presigned URL
      console.log(endpoints.UPLOAD.PRESIGNED_URL);
      console.log(file.size);
      const response = await request.post(endpoints.UPLOAD.PRESIGNED_URL, {
        size: file.size, // API yêu cầu thông số "size" của file
      });
  
      // Lấy dữ liệu trả về từ API
      const { url, fields, object_key } = response;
      // Trả về dữ liệu cần thiết cho quá trình upload
      return { presignedUrl: url, fields, objectKey: object_key };
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Error getting presigned URL:', error);
      throw error; // hoặc có thể return null hoặc một lỗi tùy ý
    }
  };

  const uploadFiletobackend = async (file, object_key) => {
    try {
      // Gửi yêu cầu POST đến endpoint upload file
      const response = await request.post(endpoints.UPLOAD.UPLOAD, {
        key: object_key, // Thay đổi object_key thành tham số truyền vào hàm
        metadata: {
          extension: "pdf", // Lấy phần mở rộng của file từ tên file
          mime_type: file.type, // Lấy MIME type của file
          name: file.name, // Tên file
          size: file.size, // Kích thước file
        },
      });
  
      // Xử lý kết quả trả về nếu cần
      return response; // Giả sử bạn muốn trả về dữ liệu phản hồi từ API
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Error uploading file:', error);
      throw error; // Hoặc có thể trả về null hoặc giá trị lỗi tùy ý
    }
  };

  // Mutation để tải file lên S3
  const uploadMutation = useMutation({
    mutationFn: async (file) => {
      const { presignedUrl, fields, objectKey } = await getPresignedUrl(file);

      // Chuẩn bị FormData để tải file lên
      const formData = new FormData();
      formData.append('key', objectKey);
      Object.entries(fields).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append('file', file);

      // Tải file lên S3
      await axios.post(presignedUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return { file, presignedUrl, objectKey };
    },
    onSuccess: async (data) => {
      try {
        // Gọi hàm uploadFiletobackend để tải metadata lên backend
        await uploadFiletobackend(data.file, data.objectKey);
      } catch (error) {
        console.error("Error uploading file to backend:", error);
      }
      // Lưu trạng thái file vào Redux khi upload thành công
      dispatch(setUploadedFile({ file: data.file }));
      queryClient.invalidateQueries({ queryKey: ['uploadedFiles'] });
    },
    onError: (error) => {
      console.error('Upload failed:', error.message);
    },
  });

  // Hàm để thực hiện upload file
  const uploadFiletosever = (file) => {
    if (!file) {
      console.error('No file selected for upload.');
      return;
    }

    // Đảm bảo không gọi mutate khi đã có request đang diễn ra
    if (uploadMutation.isLoading) {
      console.warn('File upload is already in progress.');
      return;
    }

    uploadMutation.mutate(file);
  };

  // Hàm để xóa file khỏi Redux store
  const clearFile = () => {
    dispatch(clearUploadedFile());
    queryClient.invalidateQueries({ queryKey: ['uploadedFiles'] });
  };

  return {
    file,
    content,
    uploadFiletosever,
    clearFile,
    isUploading: uploadMutation.isPending,
    uploadError: uploadMutation.error,
  };
};

