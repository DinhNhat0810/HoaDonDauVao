export default function ResetIcon({
  className,
  onClick,
}: {
  className?: string;

  onClick?: () => void;
}) {
  return (
    <span className={className} onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_150_5624)">
          <path
            d="M16.7734 7.49077L13.4401 10.8241H15.9401C15.9401 13.5824 13.6984 15.8241 10.9401 15.8241C10.0984 15.8241 9.29844 15.6158 8.60677 15.2408L7.3901 16.4574C8.4151 17.1074 9.63177 17.4908 10.9401 17.4908C14.6234 17.4908 17.6068 14.5074 17.6068 10.8241H20.1068L16.7734 7.49077ZM5.9401 10.8241C5.9401 8.06577 8.18177 5.82411 10.9401 5.82411C11.7818 5.82411 12.5818 6.03244 13.2734 6.40744L14.4901 5.19077C13.4651 4.54077 12.2484 4.15744 10.9401 4.15744C7.25677 4.15744 4.27344 7.14077 4.27344 10.8241H1.77344L5.10677 14.1574L8.4401 10.8241H5.9401Z"
            fill="#505052"
          />
        </g>
        <defs>
          <clipPath id="clip0_150_5624">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(0.940063 0.824097)"
            />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
}
