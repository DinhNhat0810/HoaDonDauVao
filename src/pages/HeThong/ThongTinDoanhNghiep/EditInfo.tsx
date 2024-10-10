import { useContext, useState } from "react";
import EditIcon from "../../../components/Icon/edit";
import CustomBtn from "../../../components/CustomBtn";
import CustomInput from "../../../components/CustomInput";
import { AppContext } from "../../../contexts/app.context";
import { Form } from "antd";

export default function EditInfo(data: any) {
  const [isEdit, setIsEdit] = useState(false);
  const { mst, business_name } = useContext(AppContext);
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      await form.validateFields();
      const values = form.getFieldsValue();
      console.log(values);
      setIsEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-4">
      {/* <div>
        <EditIcon
          className="p-2 border border-[#D4D4D6] inline-block rounded-md cursor-pointer"
          onClick={() => setIsEdit(true)}
        />
      </div> */}
      <Form form={form}>
        <div className="flex flex-col items-start relative mt-2">
          <div className="flex items-center justify-between px-4 py-5 self-stretch w-full bg-neutral-50 rounded-[8px_8px_0px_0px] relative flex-[0_0_auto]">
            <p className="relative w-fit font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-neutral-800 text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] whitespace-nowrap [font-style:var(--heading-h3-font-style)]">
              {business_name}
            </p>
            <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1.5 bg-[#9B9B9E] rounded relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-white text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] whitespace-nowrap [font-style:var(--body-large-medium-font-style)]">
                MST: {mst}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-1 px-4 py-3 self-stretch w-full bg-white border border-solid border-neutral-100 relative flex-[0_0_auto]">
            <div className="flex items-center gap-7 self-stretch w-full relative flex-[0_0_auto]">
              <div className="relative w-[78px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                Địa chỉ:
              </div>
              <p className="relative w-[523px] mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-neutral-800 text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]">
                {data?.Diachi}
              </p>
            </div>
            <div className="flex items-center gap-7 self-stretch w-full relative flex-[0_0_auto]">
              <div className="relative w-[78px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                Điện thoại
              </div>
              <div className="relative w-[523px] mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-neutral-800 text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]">
                {data?.Dienthoai}
              </div>
            </div>
            {/* <div className="flex items-center gap-7 self-stretch w-full relative flex-[0_0_auto]">
              <div className="relative w-[78px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                Số Fax
              </div>
              <div className="relative w-[523px] mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-neutral-800 text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]">
                {data?.fax}
              </div>
            </div> */}
            <div className="flex items-center gap-7 self-stretch w-full relative flex-[0_0_auto]">
              <div className="relative w-[78px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                Email
              </div>
              <div className="relative w-[523px] mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-neutral-800 text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]">
                {data?.Email}
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col items-start gap-1 px-4 py-3 self-stretch w-full bg-[${
              isEdit ? "#F6F7F9" : "white"
            }] border border-solid border-neutral-100 relative flex-[0_0_auto]`}
          >
            <div className="flex gap-7 self-stretch w-full relative flex-[0_0_auto] mb-2">
              <div className="relative w-[78px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                Đại diện
              </div>
              <div className="relative flex-1 mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-neutral-800 text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]">
                {isEdit ? (
                  <CustomInput
                    name="representative"
                    type="text"
                    className="w-full border border-solid border-neutral-200 rounded-md px-2 py-1.5"
                  />
                ) : (
                  data?.DaidienPL
                )}
              </div>
            </div>
            <div className="flex gap-7 self-stretch w-full relative flex-[0_0_auto] mb-2">
              <div className="relative w-[78px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                Chức vụ
              </div>
              <div className="relative flex-1 mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-neutral-800 text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]">
                {isEdit ? (
                  <CustomInput
                    name="position"
                    type="text"
                    className="w-full border border-solid border-neutral-200 rounded-md px-2 py-1.5"
                  />
                ) : (
                  data?.Chucvu
                )}
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col items-start gap-1 px-4 py-3 self-stretch w-full bg-[${
              isEdit ? "#F6F7F9" : "white"
            }] border border-solid border-neutral-100 relative flex-[0_0_auto]`}
          >
            <div className="flex gap-7 self-stretch w-full relative flex-[0_0_auto] mb-2">
              <div className="relative w-[78px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                STK
              </div>
              <div className="relative flex-1 mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-neutral-800 text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]">
                {isEdit ? (
                  <CustomInput
                    name="stk"
                    type="text"
                    className="w-full border border-solid border-neutral-200 rounded-md px-2 py-1.5"
                  />
                ) : (
                  data?.Sotaikhoan
                )}
              </div>
            </div>

            {/* <div className="flex gap-7 self-stretch w-full relative flex-[0_0_auto] mb-2">
              <div className="relative w-[78px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                Chủ STK
              </div>
              <div className="relative flex-1 mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-neutral-800 text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]">
                {isEdit ? (
                  <CustomInput
                    name="stkOwner"
                    type="text"
                    className="w-full border border-solid border-neutral-200 rounded-md px-2 py-1.5"
                  />
                ) : (
                  "Nguyễn Văn A"
                )}
              </div>
            </div> */}

            <div className="flex gap-7 self-stretch w-full relative flex-[0_0_auto] mb-2">
              <div className="relative w-[78px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                Ngân hàng
              </div>
              <div className="relative flex-1 mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-neutral-800 text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]">
                {isEdit ? (
                  <CustomInput
                    name="bank"
                    type="text"
                    className="w-full border border-solid border-neutral-200 rounded-md px-2 py-1.5"
                  />
                ) : (
                  data?.Tennganhang
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-1 px-4 py-3 self-stretch w-full bg-white rounded-[0px_0px_8px_8px] border border-solid border-neutral-100 relative flex-[0_0_auto]">
            <div className="flex items-center gap-7 self-stretch w-full relative flex-[0_0_auto]">
              <div className="relative w-fit font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                Cơ quan thuế
              </div>
              <div className="relative w-[523px] mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-neutral-800 text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]">
                {data?.CQThueQL}
              </div>
            </div>
          </div>
        </div>
      </Form>

      {isEdit && (
        <div>
          <CustomBtn
            className="mt-4 w-20 mr-4"
            variant="white"
            title="Đóng"
            onClick={() => setIsEdit(false)}
          />
          <CustomBtn
            className="mt-4 w-20"
            title="Lưu"
            onClick={() => {
              handleSubmit();
            }}
          />
        </div>
      )}
    </div>
  );
}
