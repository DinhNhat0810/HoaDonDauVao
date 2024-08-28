export default function DownloadIcon({
  width = 40,
  height = 36,
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
        width={40}
        height={36}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="39" height="35" rx="3.5" fill="white" />
        <rect
          x="0.5"
          y="0.5"
          width="39"
          height="35"
          rx="3.5"
          stroke="#D4D4D6"
        />
        <path
          d="M27 15H23V9H17V15H13L20 22L27 15ZM19 17V11H21V17H22.17L20 19.17L17.83 17H19ZM13 24H27V26H13V24Z"
          fill="#505052"
        />
      </svg>
    </span>
  );
}
