export default function ReloadIcon({
  width = 24,
  height = 24,
  className,
  onClick,
  color = "#1E1E1E",
}: {
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
  color?: string;
}) {
  return (
    <span className={className} onClick={onClick}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5V1L7 6L12 11V7C15.31 7 18 9.69 18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13H4C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13C20 8.58 16.42 5 12 5Z"
          fill={color}
        />
      </svg>
    </span>
  );
}
