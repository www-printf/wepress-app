import React, { useState } from 'react';
import useDrivePicker from 'react-google-drive-picker';

function Drive() {
  const [openPicker, authResponse] = useDrivePicker();
  const [fileUrl, setFileUrl] = useState(''); // State để lưu URL của file đã chọn

  const handleOpenPicker = () => {
    openPicker({
      clientId: "72426656912-2hv4e253iokq4292gprvebb106rj5th0.apps.googleusercontent.com",
      developerKey: "AIzaSyDkmOqoifI8KZx1C07XpyGKKA8eXJkaxR8",
      viewId: "DOCS",
      token: "ya29.a0AeDClZDLCdkQAbF1skJDAV9hBW-CKSsoxNm7URha4RlbxsY6H1crljvKfFb-uZwxN1IQ-to9nh4gSmq-B0ad0L_twv30YeX4TFX8vaIkL2B209K3ZN5fYQrGxjpnwNHX7S-H2zz1LhEnawa9_Ns7HKmhLDTiNl4yNZIMlBgQaCgYKAcgSARESFQHGX2Mi1wfZ9rVqLmDY8XxHulVg0w0175",
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
          setFileUrl(selectedFile.embedUrl || selectedFile.url); // Lưu URL của file vào state
          console.log("Selected file:", selectedFile);
        }
      },
    });
  };

  return (
    <div>
      <button onClick={() => handleOpenPicker()}>Open Picker</button>
      
      {fileUrl && (
        <div>
          <h3>Xem trước file đã chọn:</h3>
          <iframe
            src={fileUrl}
            title="Google Drive File"
            width="100%"
            height="600px"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}

export default Drive;
