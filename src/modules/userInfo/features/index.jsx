import React, { useState } from "react";
import { InfoCard } from "../components/InfoCard";
import { ProfileTab } from "../components/ProfileTab";
import { CoverImage } from "../components/CoverImage";
import { ProfileAvatar } from "../components/ProfileAvatar";
import { HistoryPage } from "../components/HistoryPage";
import {userData} from "../../../../mock/user.mock.mjs";
const userInfo = () => {
    const [activeTab, setActiveTab] = useState("info");
  const [imageSrc, setImageSrc] = useState();
  const user = userData[0]; // Giả sử userData chứa một mảng các người dùng
  const contactInfo = {
    title: "Thông tin liên lạc",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2720eac2783f7399e5eaeed8eec9ab6110ec43094a97d7e50eefe77e678633aa?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104",
    items: [
      { label: "Email sinh viên", value: user.studentEmail },  // Lấy email sinh viên từ userData
      { label: "Email liên lạc", value: user.contactEmail || "example@mail.com" },  // Nếu không có email liên lạc, dùng mặc định
      { label: "Số điện thoại", value: user.phone || "0123456789" }
    ]
  };

  const personalInfo = {
    title: "Thông tin cá nhân",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/29c9d84370cb2ef30d17b84692faf34ccb12c28af86845fcbc628f1ba254e0f4?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104",
    items: [
      { label: "Mã số sinh viên", value: user.studentId },  // Lấy mã số sinh viên từ userData
      { label: "Ngày sinh", value: user.birthDate },  // Lấy ngày sinh từ userData
      { label: "Giới tính", value: user.gender },  // Lấy giới tính từ userData
      { label: "Khoa", value: user.faculty },  // Lấy khoa từ userData
    ]
  };

  const educationInfo = {
    title: "Thông tin đào tạo",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/29c9d84370cb2ef30d17b84692faf34ccb12c28af86845fcbc628f1ba254e0f4?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104",
    items: [
      { label: "Khoa", value: user.faculty },  // Lấy khoa từ userData
      { label: "Lớp", value: user.class },  // Lấy lớp từ userData
      { label: "Khóa đào tạo", value: user.academicYear },  // Lấy khóa đào tạo từ userData
      { label: "Tình trạng sinh viên", value: user.status || "Đang học" }  // Lấy tình trạng sinh viên, mặc định là "Đang học"
    ]
  };

  const handleChangeImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setImageSrc(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  return (
    
    <main className="flex overflow-hidden flex-col justify-center items-center py-8 text-center bg-gray-100">
      <div className="flex overflow-hidden flex-col mb-36 ml-14 max-w-full w-[1300px]">
        <section className="flex overflow-hidden relative flex-col w-full bg-white rounded-md max-w-[1299px] max-md:max-w-full">
          <CoverImage 
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/571349c7d72cbad3511c5404f06af03037a9804e73fe326423b4fd39533de6e7?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
            onChangeImage={handleChangeImage}
          />
          <ProfileAvatar 
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6c7ada2fcbf018d6f5bc1e6beab357467186586cb4d0aab5035882e5c2a54942?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
            alt="Profile avatar"
          />
          <div className="flex overflow-hidden z-0 gap-2.5 items-center px-8 pt-9 pb-2.5 w-full text-sm text-black bg-white max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col justify-center items-start self-stretch my-auto">
              <h1 className="font-semibold tracking-tight">{user.fullName}</h1>
              <p className="mt-1.5">Sinh viên</p>
            </div>
          </div>
          <nav className="flex overflow-hidden z-0 flex-wrap gap-2.5 justify-center items-center w-full text-sm font-semibold tracking-tight bg-white text-zinc-800 max-md:max-w-full">
            <ProfileTab 
              label="Thông tin cá nhân" 
              isActive={String(activeTab) === "info"}
              onClick={() => setActiveTab("info")}
            />
            <ProfileTab 
              label="Lịch sử hoạt động" 
              isActive={String(activeTab) === "history"}
              onClick={() => setActiveTab("history")}
            />
          </nav>
        </section>
        {String(activeTab) === "info" && (
          <section className="flex overflow-hidden flex-wrap gap-10 justify-between items-start mt-8 w-full text-sm text-black">
            <InfoCard {...contactInfo} />
            <InfoCard {...personalInfo} />
            <InfoCard {...educationInfo} />
          </section>
        )}
        {String(activeTab) === "history" && (
          <HistoryPage />
        )}
      </div>
    </main>

  );
};

export default userInfo;
