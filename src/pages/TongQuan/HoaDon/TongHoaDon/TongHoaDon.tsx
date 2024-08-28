import CustomInput from "../../../../components/CustomInput";
import { COLORS } from "../../../../libs/constants";

export default function TongHoaDon() {
  const data = [
    {
      label: "Tổng hóa đơn đã xử lý",
      value: "200",
      children: [
        {
          label: "Trước thuế GTGT",
          value: "2.000.000",
        },
        {
          label: "Thuế GTGT",
          value: "2.000.000",
        },
        {
          label: "Lệ phí",
          value: "2.000.000",
        },
        {
          label: "Giảm trừ khác",
          value: "2.000.000",
        },
        {
          label: "Tổng tiền TT",
          value: "2.000.000",
        },
      ],
    },
    {
      label: "Tổng hóa đơn hợp lệ",
      value: "0",
      children: [
        {
          label: "Trước thuế GTGT",
          value: "2.000.000",
        },
        {
          label: "Thuế GTGT",
          value: "2.000.000",
        },
        {
          label: "Lệ phí",
          value: "2.000.000",
        },
        {
          label: "Giảm trừ khác",
          value: "2.000.000",
        },
        {
          label: "Tổng tiền TT",
          value: "2.000.000",
        },
      ],
    },
    {
      label: "Tổng hóa đơn không hợp lệ",
      value: "200",
      children: [
        {
          label: "Trước thuế GTGT",
          value: "2.000.000",
        },
        {
          label: "Thuế GTGT",
          value: "2.000.000",
        },
        {
          label: "Lệ phí",
          value: "2.000.000",
        },
        {
          label: "Giảm trừ khác",
          value: "2.000.000",
        },
        {
          label: "Tổng tiền TT",
          value: "2.000.000",
        },
      ],
    },
  ];

  return (
    <div className="flex gap-4">
      {data.map((item, index) => (
        <div key={index} className="p-4 rounded-lg shadow-custom flex-1">
          <h2 className="text-center font-semibold">{item.label}</h2>
          <div className="mt-2">
            <CustomInput
              type="rangePicker"
              placeholder={["Từ ngày", "Đến ngày"]}
              configBoderRadius={4}
              configComponent={{
                activeBorderColor: COLORS.primary,
                hoverBorderColor: COLORS.primary,
              }}
              config={{
                colorPrimary: COLORS.primary,
              }}
            />
          </div>
          <div className="flex justify-center my-4">
            <div className="bg-[#F6F7F9] rounded-full flex flex-col items-center w-24 h-24 justify-center shadow-lg">
              <p className="font-bold text-3xl text-primary-color">
                {item.value}
              </p>
              <p>Hóa đơn</p>
            </div>
          </div>

          <div className="pt-2">
            {item.children.map((ele, i) => (
              <div
                key={i}
                className="flex justify-between items-center pb-2 text-[13px]"
              >
                <p className="">{ele.label}</p>
                <p className="font-bold text-[#343436]">{ele.value}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
