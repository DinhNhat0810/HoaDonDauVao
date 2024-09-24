import React from "react";

type Props = {
  className?: string;
  title: string;
  onClick?: () => void;
  variant?: "primary" | "white";
  prefix?: React.ReactNode;
  loading?: boolean;
};

export default function CustomBtn({
  className,
  title,
  onClick,
  variant = "primary",
  prefix,
  ...props
}: Props) {
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
      {prefix}
      {title}
    </button>
  );
}
