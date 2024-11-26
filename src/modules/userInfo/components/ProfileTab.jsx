import React from "react";

export function ProfileTab({ label, isActive, onClick }) {
    console.log("ProfileTab props:", { label, isActive });
  return (
    <button 
      onClick={onClick}
      className={`flex gap-2.5 justify-center items-center self-stretch p-2.5 my-auto bg-white ${
        isActive ? "border-b-2 border-sky-500" : ""
      }`}
      aria-pressed={isActive}
    >
      <span className="gap-2.5 self-stretch my-auto">{label}</span>
    </button>
  );
}