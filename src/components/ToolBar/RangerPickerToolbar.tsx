import React from "react";
import CustomInput from "../CustomInput";
import { COLORS } from "../../libs/constants";

export default function RangerPickerToolbar({
  onChangeRange,
  disableRange,
}: {
  onChangeRange: (value: any) => void;
  disableRange?: boolean;
}) {
  return (
    <CustomInput
      disabled={disableRange}
      placeholder={["Từ ngày", "Đến ngày"]}
      configBoderRadius={4}
      type="rangePicker"
      className="py-[6px] w-60"
      configComponent={{
        activeBorderColor: COLORS.primary,
        hoverBorderColor: COLORS.primary,
      }}
      config={{
        colorPrimary: COLORS.primary,
      }}
      onChangeRange={onChangeRange}
    />
  );
}
