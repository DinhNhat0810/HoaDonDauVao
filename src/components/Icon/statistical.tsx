export default function StatisticalIcon({
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
          d="M15.8333 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5ZM15.8333 15.8333H4.16667V4.16667H15.8333V15.8333ZM5.83333 8.33333H7.5V14.1667H5.83333V8.33333ZM9.16667 5.83333H10.8333V14.1667H9.16667V5.83333ZM12.5 10.8333H14.1667V14.1667H12.5V10.8333Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
