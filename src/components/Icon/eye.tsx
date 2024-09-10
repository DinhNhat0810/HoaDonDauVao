export default function EyeIcon({
  width = 36,
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
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="35" height="35" rx="3.5" fill="white" />
        <rect
          x="0.5"
          y="0.5"
          width="35"
          height="35"
          rx="3.5"
          stroke="#9B9B9E"
        />
        <path
          d="M18 12.5C21.79 12.5 25.17 14.63 26.82 18C25.17 21.37 21.8 23.5 18 23.5C14.2 23.5 10.83 21.37 9.18 18C10.83 14.63 14.21 12.5 18 12.5ZM18 10.5C13 10.5 8.73 13.61 7 18C8.73 22.39 13 25.5 18 25.5C23 25.5 27.27 22.39 29 18C27.27 13.61 23 10.5 18 10.5ZM18 15.5C19.38 15.5 20.5 16.62 20.5 18C20.5 19.38 19.38 20.5 18 20.5C16.62 20.5 15.5 19.38 15.5 18C15.5 16.62 16.62 15.5 18 15.5ZM18 13.5C15.52 13.5 13.5 15.52 13.5 18C13.5 20.48 15.52 22.5 18 22.5C20.48 22.5 22.5 20.48 22.5 18C22.5 15.52 20.48 13.5 18 13.5Z"
          fill="#505052"
        />
      </svg>
    </span>
  );
}
