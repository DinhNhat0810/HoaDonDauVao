export default function CalendarIcon({
  width = 20,
  height = 21,
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
          d="M18 8.33342H3M13.8333 1.66675V5.00008M7.16667 1.66675V5.00008M7 18.3334H14C15.4001 18.3334 16.1002 18.3334 16.635 18.0609C17.1054 17.8212 17.4878 17.4388 17.7275 16.9684C18 16.4336 18 15.7335 18 14.3334V7.33342C18 5.93328 18 5.23322 17.7275 4.69844C17.4878 4.22803 17.1054 3.84558 16.635 3.6059C16.1002 3.33341 15.4001 3.33341 14 3.33341H7C5.59987 3.33341 4.8998 3.33341 4.36502 3.6059C3.89462 3.84558 3.51217 4.22803 3.27248 4.69844C3 5.23322 3 5.93328 3 7.33341V14.3334C3 15.7335 3 16.4336 3.27248 16.9684C3.51217 17.4388 3.89462 17.8212 4.36502 18.0609C4.8998 18.3334 5.59987 18.3334 7 18.3334Z"
          stroke="#344054"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
