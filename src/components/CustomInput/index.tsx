import { ConfigProvider, DatePicker, Form, Input, Select } from "antd";
import locale from "antd/locale/vi_VN";
import { useState } from "react";

const { RangePicker } = DatePicker;

const CustomInput = ({
  value,
  onChange,
  label,
  labelHorizontal,
  name,
  placeholder,
  size,
  configBoderRadius,
  config,
  configComponent,
  type = "text",
  rules,
  formItemStyle,
  labelInside,
  className,
  ...inputProps
}: {
  value?: string;
  onChange?: (value: string) => void;
  [key: string]: any;
}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="relative">
      {isFocus && labelInside && (
        <p className="absolute z-20 top-2 left-[11px] text-[#9B9B9E] text-xs">
          {labelInside}
        </p>
      )}
      <ConfigProvider
        locale={locale}
        theme={{
          token: {
            borderRadius: configBoderRadius,
            ...config,
          },
          components: {
            Input: {
              /* here is your component tokens */
              ...configComponent,
            },
          },
        }}
      >
        {label && <p>{label}</p>}

        <Form.Item
          style={formItemStyle}
          rules={rules}
          name={name}
          label={labelHorizontal}
        >
          {type === "text" && (
            <Input
              placeholder={placeholder}
              size={size}
              name={name}
              {...inputProps}
              onChange={(e) => {
                if (e.target.value) {
                  setIsFocus(true);
                } else {
                  setIsFocus(false);
                }
                onChange && onChange(e.target.value);
              }}
              className={`${className} ${
                isFocus && labelInside ? "pt-6 pb-2" : ""
              }`}
            />
          )}
          {type === "password" && (
            <Input.Password
              name={name}
              placeholder={placeholder}
              size={size}
              {...inputProps}
              onChange={(e) => {
                if (e.target.value) {
                  setIsFocus(true);
                } else {
                  setIsFocus(false);
                }
              }}
              className={`${className} ${isFocus ? "pt-6 pb-2" : ""}`}
            />
          )}
          {type === "date" && (
            <DatePicker
              className={className}
              placeholder={placeholder}
              format={{
                format: "DD-MM-YYYY",
                type: "mask",
              }}
              name={name}
              {...inputProps}
            />
          )}

          {type === "rangePicker" && (
            <RangePicker
              className={className}
              placeholder={placeholder}
              format={{
                format: "DD-MM-YYYY",
                type: "mask",
              }}
              name={name}
              {...inputProps}
            />
          )}
          {type === "select" && (
            <Select
              placeholder={placeholder}
              className={className}
              {...inputProps}
            />
          )}
        </Form.Item>
      </ConfigProvider>
    </div>
  );
};

export default CustomInput;
