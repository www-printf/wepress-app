import React, { useState } from 'react';
import useDrivePicker from 'react-google-drive-picker';
import axios from 'axios';

function Drive({ handleFile }) {
  const [openPicker, authResponse] = useDrivePicker();
  const [fileUrl, setFileUrl] = useState(''); // State để lưu URL của file đã chọn
  const accessToken = "ya29.a0AeDClZBAGS0MUaZ4iYQ5i-10Yfov5MAzadSUCc8WELN7Qc4NJGzoQIWO4OOKMB80emhTrsBY6IyiABLb4_dH-txMe4KzfvMj3XKKQgV0nV3CB2OvsrEDXsFeoxDWJ13rbyzSTCgRG-dvHrbFI76e_redP5O5PLvjxq3qQ_RWaCgYKAZUSARESFQHGX2MiMnDz5q3E3g2yIjlXSWtFtQ0175"
  const handleOpenPicker = () => {
    openPicker({
      clientId: "72426656912-2hv4e253iokq4292gprvebb106rj5th0.apps.googleusercontent.com",
      developerKey: "AIzaSyDkmOqoifI8KZx1C07XpyGKKA8eXJkaxR8",
      viewId: "DOCS",
      token: accessToken,
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: false, // Đặt thành false nếu chỉ muốn chọn một file
      callbackFunction: (data) => {
        console.log(data);
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button');
        } else if (data.docs && data.docs.length > 0) {
          const selectedFile = data.docs[0]; // Lấy file đầu tiên được chọn
          // Automatically download the file
          downloadFile(selectedFile.id);
        }
      },
    });
  };

  
  const downloadFile = async (fileId) => {
    try {
      const response = await axios.post(
        `https://www.googleapis.com/drive/v3/files/${fileId}/download`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            mimeType: "application/pdf", // Specify desired format
          },
          responseType: "json", // Get JSON response directly
        }
      );
  
      // The response will now be directly in JSON format
      const jsonResponse = response.data;
      console.log("Parsed Response:", jsonResponse);
  
      const downloadUri = jsonResponse?.response?.downloadUri;
      if (downloadUri) {
        console.log("Download URI:", downloadUri);
  
        // Fetch the actual file using the `downloadUri`
        const fileResponse = await axios.get(downloadUri, { responseType: "blob" });
  
        // File content is now in `fileResponse.data`
        const pdfFile = fileResponse.data;
        // const pdfFile = new File([pdfBlob], 'converted.pdf', { type: 'application/pdf' });
        console.log("File Blob:", fileResponse.data);
        handleFile(pdfFile);
        const pdfUrl = URL.createObjectURL(pdfFile);
        setFileUrl(pdfUrl); // Lưu URL của file vào state
        // You can now use `pdfFile` as needed
        return pdfFile;
      } else {
        console.error("No download URI found in the response");
      }
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <div>
      <button onClick={() => handleOpenPicker()} className='bg-blue-500 text-white p-2 rounded'>Connect GoogleDrive</button>
    </div>
  );
}

export default Drive;
