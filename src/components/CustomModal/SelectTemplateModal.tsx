import { Button, ConfigProvider, Modal, Radio } from "antd";
import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import {
  templateDauVaoFAST,
  templateMuaVaoTCT,
  templateMuaVaoTongHop,
} from "../../libs/common/excel-template";

export default function SelectTemplateModal({
  data,
  fileName,
}: {
  data: any;
  fileName: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState(1);
  const options = [
    {
      label: "Hóa đơn mua vào - tổng hợp",
      value: 1,
    },
    {
      label: "Hóa đơn mua vào theo TCT",
      value: 2,
    },
    {
      label: "Hóa đơn đầu vào theo FAST",
      value: 3,
    },
    {
      label: "Hóa đơn đầu vào theo MISA",
      value: 4,
    },
  ];

  console.log(data);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    switch (value) {
      case 1:
        templateMuaVaoTongHop({
          data,
          fileName: "Bảng kê hóa đơn mua vào - tổng hợp_" + fileName,
        });
        break;

      case 2:
        templateMuaVaoTCT({
          data,
          fileName: "Bảng kê hóa đơn mua vào theo TCT_" + fileName,
        });
        break;

      case 3:
        templateDauVaoFAST({
          data,
          fileName: "Bảng kê hóa đơn đầu vào theo FAST_" + fileName,
        });
    }

    // setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChangeTemplate = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 4,
          },
        }}
      >
        <Button
          style={{
            backgroundColor: "#1ba466",
          }}
          type="primary"
          onClick={showModal}
        >
          Xuất Excel
        </Button>
      </ConfigProvider>

      <Modal
        title="Chọn template"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Tải xuống"
      >
        <Radio.Group
          onChange={handleChangeTemplate}
          value={value}
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "20px",
            marginTop: "20px",
            marginBottom: "40px",
          }}
        >
          {options.map((option) => (
            <Radio
              key={option.value}
              value={option.value}
              style={{
                padding: "8px 0",
              }}
            >
              {option.label}
            </Radio>
          ))}
        </Radio.Group>
      </Modal>
    </>
  );
}
