import React from "react";

type Props = {
  className?: string;
  title: string;
  onClick?: () => void;
  variant?: "primary" | "white"; // Thêm một thuộc tính mới để xác định biến thể của nút
};

export default function CustomBtn({
  className,
  title,
  onClick,
  variant = "primary", // Mặc định là biến thể "primary"
  ...props
}: Props) {
  // Xác định className dựa trên biến thể
  const buttonClass =
    variant === "primary"
      ? `bg-primary-color text-white border-none hover:bg-opacity-60`
      : `bg-white text-[#1E1E1E] border border-[#D4D4D6] hover:bg-opacity-90`;

  return (
    <button
      onClick={onClick}
      className={`${buttonClass} py-[8px] px-4 rounded-md text-sm ${className}`}
      {...props}
    >
      {title}
    </button>
  );
}
