export default function ExpandIcon({
  width = 44,
  height = 44,
  className,
  onClick,
}: {
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
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
          d="M13 28H26V26H13V28ZM13 23H23V21H13V23ZM13 16V18H26V16H13ZM31 25.59L27.42 22L31 18.41L29.59 17L24.59 22L29.59 27L31 25.59Z"
          fill="white"
        />
      </svg>
    </span>
  );
}
