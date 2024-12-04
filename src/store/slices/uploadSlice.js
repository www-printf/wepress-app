import { createSlice } from '@reduxjs/toolkit';

// Khởi tạo state ban đầu với dữ liệu từ localStorage (nếu có)
const initialState = {
  file: JSON.parse(localStorage.getItem('uploaded_file')) || null,
  content: localStorage.getItem('uploaded_content') || null,
};

const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    setUploadedFile: (state, action) => {
      const file = action.payload.file;
      
      // Lưu thông tin cơ bản của file
      state.file = {
        id: file.id,
        name: file.name,
        size: file.size,
        type: file.type,
        url: file.url,
        metadata: file.metadata,
      };

      // Không tạo URL mới nếu file đã có URL
      if (!file.url && file instanceof Blob) {
        state.content = URL.createObjectURL(file);
      } else {
        state.content = file.url;
      }

      // Lưu vào localStorage
      localStorage.setItem('uploaded_file', JSON.stringify(state.file));
      localStorage.setItem('uploaded_content', state.content);
    },
    clearUploadedFile: (state) => {
      // Giải phóng URL khi xóa tệp
      if (state.content && !state.file?.url) {
        URL.revokeObjectURL(state.content);
      }
      state.file = null;
      state.content = null;

      // Xóa dữ liệu khỏi localStorage
      localStorage.removeItem('uploaded_file');
      localStorage.removeItem('uploaded_content');
    },
  },
});

export const { setUploadedFile, clearUploadedFile } = uploadSlice.actions;
export default uploadSlice.reducer;
