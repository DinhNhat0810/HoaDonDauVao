import { ConfigProvider, DatePicker, Form, Input } from "antd";

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
  type = "text",
  rules,
  formItemStyle,
  ...inputProps
}: {
  value?: string;
  onChange?: (value: string) => void;
  [key: string]: any;
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: configBoderRadius,
          ...config,
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
          <Input placeholder={placeholder} size={size} {...inputProps} />
        )}
        {type === "password" && (
          <Input.Password
            placeholder={placeholder}
            size={size}
            {...inputProps}
          />
        )}
        {type === "date" && (
          <DatePicker placeholder={placeholder} {...inputProps} />
        )}
      </Form.Item>
    </ConfigProvider>
  );
};

export default CustomInput;
