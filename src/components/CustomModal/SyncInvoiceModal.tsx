import { Form, Modal } from "antd";
import CustomInput from "../CustomInput";
import CustomBtn from "../CustomBtn";

export default function SyncInvoiceModal({
  open,
  handleCancel,
  handleFinish,
  setQuery,
  refetch,
}: {
  open: boolean;
  handleCancel: () => void;
  handleFinish: (values: any, callback: () => void) => void;
  setQuery: (query: any, callback: () => void) => void;
  refetch: () => void;
}) {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const validate = await form.validateFields();

      if (validate.date) {
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={() => {
        handleCancel();
        form.resetFields();
      }}
      centered
      footer={null}
      width={360}
    >
      <h2 className="text-center text-xl mt-2 font-bold">Cập nhật hóa đơn</h2>

      <div className="w-full">
        <Form form={form}>
          <CustomInput
            rules={[{ required: true, message: "Vui lòng chọn ngày" }]}
            placeholder="Chọn ngày"
            className="mt-4 w-full"
            type="rangePicker"
            name="date"
            configBoderRadius={4}
            onCalendarChange={(value: any) => {
              setQuery(
                {
                  ...value,
                },
                () => {
                  handleCancel();
                  form.resetFields();
                }
              );
            }}
          />
        </Form>
      </div>

      <div className="flex justify-center gap-2">
        <CustomBtn
          title="Hủy bỏ"
          className="w-4/12"
          onClick={() => {
            handleCancel();
            form.resetFields();
          }}
          variant="white"
        />
        <CustomBtn title="Đồng bộ" className="w-4/12" onClick={handleSubmit} />
      </div>
    </Modal>
  );
}
