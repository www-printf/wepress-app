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
      state.file = {
        name: file.name,
        size: file.size,
        type: file.type,
      };
      // Tạo URL từ file để xem trước
      state.content = URL.createObjectURL(file);

      // Lưu file và content vào localStorage
      localStorage.setItem('uploaded_file', JSON.stringify(state.file));
      localStorage.setItem('uploaded_content', state.content);
    },
    clearUploadedFile: (state) => {
      // Giải phóng URL khi xóa tệp
      if (state.content) {
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
