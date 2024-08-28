export default function LogoutIcon({
  width = 24,
  height = 24,
  className,
  onClick,
}: {
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div className={className} onClick={onClick}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 21L13.0044 21C14.1144 21 15.0044 20.1 15.0044 19L15.0044 15L13.0044 15L13.0044 19L5 19L5 5L13.0044 5L13.0044 9L15.0044 9L15.0044 5C15.0044 3.9 14.1144 3 13.0044 3L5 3C3.9 3 3 3.9 3 5L3 19C3 20.1 3.9 21 5 21Z"
          fill="black"
          fillOpacity="0.6"
        />
        <path
          d="M22.0044 12.2539L18.0044 8.25391V11.2539H7.00439V13.2539H18.0044V16.2539L22.0044 12.2539Z"
          fill="black"
          fillOpacity="0.6"
        />
      </svg>
    </div>
  );
}
