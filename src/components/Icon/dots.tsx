export default function DotsIcon({
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
        <path
          d="M15.2 26.4C16.4151 26.4 17.4 25.4151 17.4 24.2C17.4 22.985 16.4151 22 15.2 22C13.985 22 13 22.985 13 24.2C13 25.4151 13.985 26.4 15.2 26.4Z"
          fill="#343436"
        />
        <path
          d="M24 26.4C25.215 26.4 26.2 25.4151 26.2 24.2C26.2 22.985 25.215 22 24 22C22.785 22 21.8 22.985 21.8 24.2C21.8 25.4151 22.785 26.4 24 26.4Z"
          fill="#343436"
        />
        <path
          d="M32.8 26.4C34.015 26.4 35 25.4151 35 24.2C35 22.985 34.015 22 32.8 22C31.585 22 30.6 22.985 30.6 24.2C30.6 25.4151 31.585 26.4 32.8 26.4Z"
          fill="#343436"
        />
      </svg>
    </span>
  );
}
