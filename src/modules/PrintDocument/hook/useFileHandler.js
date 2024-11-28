import { useState, useRef } from 'react';

const useFileHandler = () => {
  const [convertApi, setConvertApi] = useState(null); // Instance của ConvertAPI
  const [uploadedFile, setUploadedFile] = useState(null); // File được tải lên
  const [fileContent, setFileContent] = useState(null);  // URL để hiển thị PDF
  const [error, setError] = useState(null);              // Lỗi khi xử lý

  // Tham chiếu để đảm bảo khởi tạo chỉ chạy một lần
  const isMounted = useRef(false);

  // Hàm khởi tạo ConvertAPI
  const initializeConvertApi = async () => {
    if (!isMounted.current) {
      try {
        // Tạo và thêm thẻ <script> vào <head>
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/convertapi-js/lib/convertapi.js';
        script.async = true;

        script.onload = () => {
          if (window.ConvertApi) {
            // Khởi tạo ConvertAPI instance
            const API_SECRET = 'secret_Jnbl9k3JIIpo173u'; // Thay bằng API Secret thật
            const instance = window.ConvertApi.auth({ secret: API_SECRET });
            setConvertApi(instance); // Lưu instance vào state
          } else {
            throw new Error('ConvertApi is not loaded correctly.');
          }
        };

        script.onerror = () => {
          setError('Failed to load ConvertAPI script.');
        };

        document.head.appendChild(script);
      } catch (err) {
        console.error('Error initializing ConvertAPI:', err);
        setError(err.message);
      }

      isMounted.current = true; // Đánh dấu là đã chạy
    }
  };

  // Hàm chuyển đổi file DOCX sang PDF
  const convertDocxToPdf = async (file) => {
    if (!convertApi) {
      setError('ConvertAPI is not initialized.');
      return;
    }

    try {
      const namefile=file.name;
      setError(null);

      // Tạo params và thêm file
      const params = convertApi.createParams();
      params.add('file', file);

      // Gọi API để chuyển đổi DOCX sang PDF
      const result = await convertApi.convert('docx', 'pdf', params);

      if (result.files && result.files.length > 0) {
        const pdfFileUrl = result.files[0].Url;

        // Tải file PDF từ URL trả về
        const response = await fetch(pdfFileUrl);
        const pdfBlob = await response.blob();

        // Tạo File object từ Blob
        const pdfFile = new File([pdfBlob], namefile, { type: 'application/pdf' });

        // Lưu file và URL vào state
        setUploadedFile(pdfFile);
        setFileContent(pdfFileUrl); // URL để hiển thị PDF
      } else {
        setError('No files returned from ConvertAPI.');
      }
    } catch (err) {
      console.error('Error converting DOCX to PDF:', err);
      setError('An error occurred while converting the file.');
    }
  };

  // Hàm chuyển đổi HTML sang PDF
  const convertHtmlToPdf = async (htmlContent) => {
    if (!convertApi) {
      setError('ConvertAPI is not initialized.');
      return;
    }

    try {
      setError(null);

      // Tạo Blob và File từ nội dung HTML
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const file = new File([blob], 'myfile.html');

      const params = convertApi.createParams();
      params.add('file', file);

      const result = await convertApi.convert('html', 'pdf', params);

      if (result.files && result.files.length > 0) {
        const pdfFileUrl = result.files[0].Url;
        const response = await fetch(pdfFileUrl);
        const pdfBlob = await response.blob();

        const pdfFile = new File([pdfBlob], 'converted.pdf', { type: 'application/pdf' });
        setUploadedFile(pdfFile);
        setFileContent(pdfFileUrl);
      } else {
        setError('No files returned from ConvertAPI.');
      }
    } catch (err) {
      console.error('Error converting HTML to PDF:', err);
      setError('An error occurred while converting the HTML content.');
    }
  };
  // Hàm xử lý file upload
  const handleFileFromDevice = async (file) => {
    if (!file) return;
    if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            // Kiểm tra nếu file là DOCX
            await convertDocxToPdf(file);
          } 
          else if (file.type === 'text/html') {
              await convertHtmlToPdf(file); // Chuyển đổi sang PDF
            }
          else if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => setFileContent(e.target.result);
            reader.readAsDataURL(file);
            setUploadedFile(file);
          } else if (file.type === 'text/plain') {
            const reader = new FileReader();
            reader.onload = (e) => setFileContent(e.target.result);
            reader.readAsText(file);
            setUploadedFile(file);
          } else if (file.type === 'application/pdf') {
            const reader = new FileReader();
            reader.onload = (e) => setFileContent(e.target.result);
            reader.readAsDataURL(file);
            setUploadedFile(file);
          } else {
            setError('Unsupported file type');
          }
  };

  // Khởi tạo ConvertAPI khi hook được sử dụng
  initializeConvertApi();

  const handleFileFromLink = (link) => {
    if (!link) {
      setError('Invalid link');
      return;
    }
  
    fetch(link)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch file');
        }
        return response.blob();  // Xử lý file dưới dạng Blob
      })
      .then(blob => {
          const fileType = blob.type;
        if (fileType === 'application/pdf') {
          // Nếu file là PDF, chỉ cần tạo URL cho file PDF
          const url = URL.createObjectURL(blob);
          setUploadedFile({
            blob,
          });
        }
       else {
          const pdfFile = new File([pdfBlob], 'converted.pdf', { type: 'application/pdf' });

          // Tạo URL cho file PDF
          const pdfUrl = URL.createObjectURL(pdfFile);
          setUploadedFile({
            pdfFile,
          });
        
      }}).catch(error => {
        setError(error.message);  // Hiển thị lỗi nếu có
      });
  };

  const handleFileFromGoogleDrive = async (googleDriveData) => {
    if (!googleDriveData) {
      setError('Google Drive data is missing');
      return;
    }
    setUploadedFile(googleDriveData);
    setError(null);
  };

  return {
    uploadedFile,
    fileContent,
    error,
    handleFileFromDevice,
    handleFileFromLink,
    handleFileFromGoogleDrive,
  };
};

export default useFileHandler;

