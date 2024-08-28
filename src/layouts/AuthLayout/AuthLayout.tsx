import EmailIcon from "../../components/Icon/email";
import LocationIcon from "../../components/Icon/location";
import PhoneIcon from "../../components/Icon/phone";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-auth-bg min-h-screen bg-no-repeat bg-center bg-cover flex flex-col justify-between">
      {children}

      <div className="bg-black-color text-white flex flex-col items-center">
        <div className="flex justify-between items-center container">
          <div className="py-4">
            <div className="flex gap-2 items-center mb-2">
              <LocationIcon />
              <p className="text-[13px]">
                Địa chỉ: Tầng 3, Tòa nhà Bohemia, Số 25 Nguyễn Huy Tưởng, Phường
                Thanh Xuân Trung, Quận Thanh Xuân, Thành phố Hà Nội, Việt Nam
              </p>
            </div>
            <div className="flex gap-2  items-center">
              <LocationIcon />
              <p className="text-[13px]">
                Chi nhánh: 346/63 Bình Lợi, Phường 13, Quận Bình Thạch, Tp, Hồ
                Chí Minh
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center mb-2">
              <EmailIcon />
              <p className="text-[13px]">Email: support@cavn.vn</p>
            </div>
            <div className="flex gap-2 items-center">
              <PhoneIcon />
              <p className="text-[13px]">Hotline: 1900 5454 07</p>
            </div>
          </div>
        </div>
        <hr className="bg-white w-full"></hr>
        <div className="container">
          <p className="text-center text-[13px] py-4">
            Bản quyền thuộc Công ty Cổ phần Công nghệ thẻ Nacencomm
          </p>
        </div>
      </div>
    </div>
  );
}
