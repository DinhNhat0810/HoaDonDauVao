import { Form, Modal } from "antd";

import {
  templateBanRaTCT,
  templateBanRaTongHop,
  templateDauRaFAST,
  templateDauRaMISA,
  templateDauVaoFAST,
  templateDauVaoMISA,
  templateMuaVaoTCT,
  templateMuaVaoTongHop,
} from "../../libs/common/excel-template";

import { CaretDownOutlined } from "@ant-design/icons";
import CustomInput from "../CustomInput";
import CustomBtn from "../CustomBtn";

export default function SelectTemplateModal({
  excelData,
  fileName,
  type,
  isModalOpen,
  handleCancel = () => {},
}: {
  excelData: any;
  fileName: string;
  type: string;
  isModalOpen: boolean;
  handleCancel?: () => void;
}) {
  const [form] = Form.useForm();

  const options = [
    {
      label: "Template Tổng hợp",
      value: 1,
    },
    {
      label: "Template TCT",
      value: 2,
    },
    {
      label: "Template FAST",
      value: 3,
    },
    {
      label: "Template MISA",
      value: 4,
    },
  ];

  const handleOk = async () => {
    const action = "download";
    try {
      const validate = await form.validateFields();

      if (validate.format) {
        let templates: any;

        if (action === "download") {
          templates = {
            buyin: {
              1: templateMuaVaoTongHop,
              2: templateMuaVaoTCT,
              3: templateDauVaoFAST,
              4: templateDauVaoMISA,
            },
            sell: {
              1: templateBanRaTongHop,
              2: templateBanRaTCT,
              3: templateDauRaFAST,
              4: templateDauRaMISA,
            },
          };
        }

        const fileNames: any = {
          buyin: {
            1: "Bảng kê hóa đơn mua vào - tổng hợp",
            2: "Bảng kê hóa đơn mua vào theo TCT",
            3: "Bảng kê hóa đơn đầu vào theo FAST",
            4: "Bảng kê hóa đơn đầu vào theo MISA",
          },
          sell: {
            1: "Bảng kê hóa đơn bán ra - tổng hợp",
            2: "Bảng kê hóa đơn bán ra theo TCT",
            3: "Bảng kê hóa đơn đầu ra theo FAST",
            4: "Bảng kê hóa đơn đầu ra theo MISA",
          },
        };

        const prefix = type === "buyin" ? "buyin" : "sell";
        const templateFunction = templates[prefix][validate.format];
        const baseFileName = fileNames[prefix][validate.format];

        if (templateFunction && baseFileName) {
          templateFunction({
            data: excelData,
            fileName: `${baseFileName}`,
          });
        }

        handleCancel();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={null}
        width={360}
      >
        <h2 className="text-center text-xl mt-2 font-bold">Xuất dữ liệu</h2>
        <p className="text-center font-normal">
          Quý khách vui lòng chọn kiểu xuất dữ liệu.
        </p>

        <Form form={form}>
          <CustomInput
            placeholder="Định dạng file"
            className="mt-4"
            type="select"
            configBoderRadius={4}
            options={options}
            suffixIcon={<CaretDownOutlined />}
            rules={[
              { required: true, message: "Vui lòng chọn định dạng file" },
            ]}
            name="format"
          />
        </Form>

        <div className="flex justify-center">
          <CustomBtn
            title="Xuất dữ liệu"
            className="w-8/12"
            onClick={handleOk}
          />
        </div>
      </Modal>
    </>
  );
}
