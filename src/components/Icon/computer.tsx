export default function ComputerIcon({
  width = 20,
  height = 20,
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
          d="M17.4999 1.66675H2.49992C1.58325 1.66675 0.833252 2.41675 0.833252 3.33341V13.3334C0.833252 14.2501 1.58325 15.0001 2.49992 15.0001H8.33325V16.6667H6.66658V18.3334H13.3333V16.6667H11.6666V15.0001H17.4999C18.4166 15.0001 19.1666 14.2501 19.1666 13.3334V3.33341C19.1666 2.41675 18.4166 1.66675 17.4999 1.66675ZM17.4999 13.3334H2.49992V3.33341H17.4999V13.3334Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
