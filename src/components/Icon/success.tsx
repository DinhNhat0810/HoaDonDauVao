export default function SuccessIcon({
  width = 25,
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
    <span className={className} onClick={onClick}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.798 8.288L18.202 9.713L12.409 15.42C12.0334 15.7925 11.5255 16.0011 10.9965 16.0002C10.4674 15.9992 9.96032 15.7888 9.586 15.415L6.804 12.719L8.197 11.282L10.99 13.989L16.798 8.288ZM24.5 12C24.5 18.617 19.117 24 12.5 24C5.883 24 0.5 18.617 0.5 12C0.5 5.383 5.883 0 12.5 0C19.117 0 24.5 5.383 24.5 12ZM22.5 12C22.5 6.486 18.014 2 12.5 2C6.986 2 2.5 6.486 2.5 12C2.5 17.514 6.986 22 12.5 22C18.014 22 22.5 17.514 22.5 12Z"
          fill="#4CAF4E"
        />
      </svg>
    </span>
  );
}
