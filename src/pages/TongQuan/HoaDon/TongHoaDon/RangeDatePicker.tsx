import CustomInput from "../../../../components/CustomInput";
import CalendarIcon from "../../../../components/Icon/calendar";
import { COLORS } from "../../../../libs/constants";

const RangeDatePicker = ({
  isFirstLoad,
  handleSetFirstLoad,
  item,
}: {
  isFirstLoad: any;
  handleSetFirstLoad: () => void;
  item?: any;
}) => {
  return isFirstLoad ? (
    <div
      className="cursor-pointer flex justify-center items-center border border-[#D0D5DD] rounded-[4px] py-[7px] w-48 mb-6"
      onClick={handleSetFirstLoad}
    >
      <CalendarIcon className="mr-2" />
      <span>Tháng {new Date().getMonth() + 1}</span>
    </div>
  ) : (
    <CustomInput
      type={"rangePicker"}
      placeholder={["Từ ngày", "Đến ngày"]}
      configBoderRadius={4}
      configComponent={{
        activeBorderColor: COLORS.primary,
        hoverBorderColor: COLORS.primary,
      }}
      config={{
        colorPrimary: COLORS.primary,
      }}
      formItemStyle={{
        display: "flex",
        justifyContent: "center",
      }}
      className="py-2"
    />
  );
};

export default RangeDatePicker;
