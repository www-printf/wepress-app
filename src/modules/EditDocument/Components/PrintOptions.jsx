import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearUploadedFile } from '../../../store/slices/uploadSlice';
import { ENDPOINTS } from '../../../routes/endPoints';
import { Link } from 'react-router-dom';
const PrintOptions = () => {
    const dispatch = useDispatch();
    const credits = 100;

    const handleCancel = () => {
        dispatch(clearUploadedFile());
    };
    const [isPrint, setIsPrint] = useState(true);  // State theo dõi trạng thái in hay không

    const handleCheckboxChange = (event) => {
      setIsPrint(event.target.checked);  // Cập nhật trạng thái khi checkbox thay đổi
    };

    return (
        <div className="w-1/3 bg-gray-50 p-6 border-l border-gray-300">
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700">In/ Lưu tài liệu</h3>
                {/* <p className="text-right text-gray-500">N tờ giấy</p> */}
            </div>
            <div className="space-y-4">
                <div>
                    <label className="block text-gray-700">Chọn phòng in</label>
                    <select className="w-full border border-gray-300 rounded px-2 py-1 mt-1">
                        <option>Phòng 101</option>
                        <option>Phòng 102</option>
                        <option>Phòng 103</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700">Chọn máy in</label>
                    <select className="w-full border border-gray-300 rounded px-2 py-1 mt-1">
                        <option>Máy in 1</option>
                        <option>Máy in 2</option>
                        <option>Máy in 3</option>
                    </select>
                </div>
                <div className="flex space-x-4">
                    <div>
                        <label className="block text-gray-700">Cỡ giấy</label>
                        <select className="w-full border border-gray-300 rounded px-2 py-1 mt-1">
                            <option>A4</option>
                            <option>A3</option>
                            <option>A5</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Bố cục</label>
                        <select className="w-full border border-gray-300 rounded px-2 py-1 mt-1">
                            <option>Dọc</option>
                            <option>Ngang</option>
                        </select>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div>
                        <label className="block text-gray-700">Số bản sao</label>
                        <input type="number" min="1" defaultValue="1" className="w-full border border-gray-300 rounded px-2 py-1 mt-1" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Số trang mỗi mặt</label>
                        <input type="number" min="1" defaultValue="1" className="w-full border border-gray-300 rounded px-2 py-1 mt-1" />
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700">Phạm vi in</label>
                    <div className="flex items-center space-x-4 mt-1">
                        <label className="flex items-center">
                            <input type="radio" name="printRange" className="mr-2" defaultChecked />
                            Tất cả các trang
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="printRange" className="mr-2" />
                            Chỉ in những trang:
                        </label>
                    </div>
                    <input type="text" placeholder="1, 2, 5-10" className="w-full border border-gray-300 rounded px-2 py-1 mt-1" />
                </div>
                <p className="text-gray-700 text-center mt-4">Bạn hiện có thể in {credits/2} trang giấy</p>

                <div className="flex justify-center mt-4">
                    <label className="flex items-center">
                    <input 
                        type="checkbox" 
                        checked={isPrint} 
                        onChange={handleCheckboxChange} 
                        className="mr-2"
                    />
                    <span>Bạn có muốn in không?</span>
                    </label>
                </div>

                    

                <div className="flex space-x-4 mt-4">
                    {/* Nếu muốn in, giữ nguyên logic */}
                    {isPrint ? (
                    <Link 
                        to={ENDPOINTS.USER.PRINTING_STATUS} 
                        className="w-1/2 bg-blue-500 text-white rounded py-2 text-center"
                    >
                        In
                    </Link>
                    ) : (
                    // Nếu không muốn in, chuyển về trang chủ
                    <Link 
                        to={ENDPOINTS.USER.HOME} 
                        className="w-1/2 bg-blue-500 text-white rounded py-2 text-center"
                    >
                        In
                    </Link>
                    )}                    
                    <Link to={ENDPOINTS.USER.PRINTDOCUMENT} onClick={handleCancel} className="w-1/2 bg-red-500 text-white rounded py-2 text-center">
                    Hủy
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PrintOptions;
