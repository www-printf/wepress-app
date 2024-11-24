import React from "react";

export function ProfileAvatar({ imageSrc, alt }) {
  return (
    <div className="absolute z-20 top-[80px] left-[30px] flex flex-col items-center">
      {/* Avatar */}
      <div className="w-[150px] h-[150px] rounded-full border-4 border-white bg-gray-300 overflow-hidden relative">
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover"
        />
        {/* Camera Icon */}
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 cursor-pointer">
          <svg>
            <path d="M4 5a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-2.586l-.707-.707A1 1 0 0012.586 4H7.414a1 1 0 00-.707.293L6 5H4zm5 3a3 3 0 110 6 3 3 0 010-6z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
