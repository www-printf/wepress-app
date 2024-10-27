import React, { useState } from "react";
import icon_file from "../../assets/icons/icon_file.png";
import icon_close from "../../assets/icons/icon_close.png";

function UserInfoPageContent33() {

    const [isUploaded, setIsUploaded] = useState(false);
    const [fileName, setFileName] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            setIsUploaded(true);
        }
    }

    return (
        <React.Fragment>
            {isUploaded ? (
                <div className="Rectangle23 w-[858px] h-[247px] bg-[#bbdefb] shadow-xl flex flex-col items-center justify-center space-y-8">
                    <div className="Group36 w-[645px] h-[76px] shadow-xl flex items-center justify-between">
                        <div className="flex items-center space-x-8 ml-2">
                            <img src={icon_file} alt="icon_file" className="File px-2 py-1 inline-flex" />
                            <div className="TNFileDocs text-black text-base font-medium font-['Roboto'] leading-normal tracking-tight">{fileName}</div>
                        </div>
                        <img src={icon_close} alt="icon_close" className="X w-[42px] h-[42px] p-[10.50px] inline-flex mr-2" onClick={() => setIsUploaded(false)} />
                    </div>
                    <div className="w-[645px] h-min flex items-end justify-end">
                        <div className="RectangleButton w-[143px] h-12 p-2.5 bg-[#575757] rounded-lg border border-[#fff5ea] justify-center items-center gap-2.5 inline-flex">
                            <div className="Frame35 justify-center items-center gap-2.5 flex">
                                <div className="Button text-center text-neutral-100 text-[28px] font-normal font-['Roboto'] leading-9">Xác nhận</div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="Rectangle21 w-[858px] h-[420px] bg-[#bbdefb] shadow-xl flex items-center justify-center">
                    <div className="Group31 w-[313px] h-[179px] flex flex-col items-center justify-center space-y-8">
                        <div className="ChNMTTP left-[89px] top-0 text-center text-black text-[22px] font-normal font-['Roboto'] leading-7">Chọn một tệp</div>
                        <div className="RectangleButton w-[310px] h-12 p-2.5 bg-[#575757] rounded-lg justify-center items-center gap-2.5 inline-flex" onClick={() => document.getElementById('fileInput').click()}>
                            <div className="Frame35 justify-center items-center gap-2.5 flex">
                                <div className="Button text-center text-neutral-100 text-[28px] font-normal font-['Roboto'] leading-9">Duyệt qua các tệp</div>
                            </div>
                        </div>
                        <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileChange} />
                        <div className="CCLoITPCHTrDocxPdfPptxXlsx text-center text-black text-sm font-normal font-['Merriweather']">Các loại tệp được hỗ trợ: .docx, .pdf, .pptx, .xlsx.</div>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}

export default UserInfoPageContent33;
