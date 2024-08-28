import NotifyIcon from "../../../components/Icon/notify";
import LogoutIcon from "../../../components/Icon/logout";

export default function Header({ collapsed }: { collapsed: boolean }) {
  return (
    <div
      className={`flex justify-between p-4 bg-[#EFF0F2] fixed top-0 ${
        collapsed ? "left-[88px]" : "left-[288px]"
      } right-0  transition-all duration-200 ease-in-out z-50
       
      `}
    >
      <div>
        <p className="font-bold text-[#1E1E1E]">
          Công ty Cổ phần Công nghệ Long Hoàng Phát
        </p>
        <p className="text-[13px] text-[#7C7C7E]">
          Mã số thuế{" "}
          <span className="ml-1 text-sm font-medium text-[#1E1E1E]">
            01234567890
          </span>
        </p>
      </div>

      <div className="flex items-center gap-4">
        <NotifyIcon className="cursor-pointer" />
        <LogoutIcon className="cursor-pointer" />
      </div>
    </div>
  );
}
