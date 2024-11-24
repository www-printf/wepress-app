import React from "react";

export function CoverImage({ imageSrc, onChangeImage }) {
  return (
    <div className="relative w-full h-[200px]">
      {/* Cover Image */}
      <img
        src={imageSrc}
        alt="Profile cover"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Change Image Button */}
      <button
        onClick={onChangeImage}
        className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow text-gray-800"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e99b718c78703245ed2eabde18e7b9502d653f02a52957b3850274bdbded725?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
          alt=""
          className="w-5 h-5"
        />
        Thay đổi ảnh
      </button>
    </div>
  );
}
