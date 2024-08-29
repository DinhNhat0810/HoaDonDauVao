export default function ErrorIcon({
  width = 25,
  height = 24,
  className,
  onClick,
  classNameSVG,
}: {
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
  classNameSVG?: string;
}) {
  return (
    <span className={className} onClick={onClick}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classNameSVG}
      >
        <path
          d="M24.5 12C24.5 18.617 19.117 24 12.5 24C5.883 24 0.5 18.617 0.5 12C0.5 5.383 5.883 0 12.5 0C19.117 0 24.5 5.383 24.5 12ZM22.5 12C22.5 6.486 18.014 2 12.5 2C6.986 2 2.5 6.486 2.5 12C2.5 17.514 6.986 22 12.5 22C18.014 22 22.5 17.514 22.5 12Z"
          fill="#DE3F0F"
        />
        <path
          d="M16.6909 9.30664L13.9976 11.9999L16.6909 14.6932L15.1933 16.1907L12.5 13.4975L9.80676 16.1907L8.3092 14.6932L11.0025 11.9999L8.3092 9.30664L9.80676 7.80908L12.5 10.5024L15.1933 7.80908L16.6909 9.30664Z"
          fill="#DE3F0F"
        />
      </svg>
    </span>
  );
}
