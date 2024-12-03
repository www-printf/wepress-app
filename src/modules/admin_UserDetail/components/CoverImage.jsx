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

    </div>
  );
}
