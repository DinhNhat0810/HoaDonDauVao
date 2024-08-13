import { Button, ConfigProvider, Modal, Radio } from "antd";
import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
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
import { saveAs } from "file-saver";
import ExcelJS from "exceljs";

import usePopupWindow from "../../hooks/usePopupWindow";
import ReactDOM from "react-dom";
import { DownloadOutlined, EyeOutlined } from "@ant-design/icons";
import {
  viewTemplateMuaVaoFAST,
  viewTemplateMuaVaoMISA,
  viewTemplateMuaVaoTCT,
  viewTemplateMuaVaoTongHop,
} from "../../libs/common/view-template-buyin";
import {
  viewTemplateBanRaFAST,
  viewTemplateBanRaMISA,
  viewTemplateBanRaTCT,
  viewTemplateBanRaTongHop,
} from "../../libs/common/view-template-soldout";

export default function SelectTemplateModal({
  data,
  fileName,
  type,
}: {
  data: any;
  fileName: string;
  type: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [value, setValue] = useState(1);
  const { container, openPopup } = usePopupWindow();

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

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (value: number, action: string) => {
    let templates: any;

    if (action === "view") {
      templates = {
        buyin: {
          1: viewTemplateMuaVaoTongHop,
          2: viewTemplateMuaVaoTCT,
          3: viewTemplateMuaVaoFAST,
          4: viewTemplateMuaVaoMISA,
        },
        sell: {
          1: viewTemplateBanRaTongHop,
          2: viewTemplateBanRaTCT,
          3: viewTemplateBanRaFAST,
          4: viewTemplateBanRaMISA,
        },
      };
    }

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
    const templateFunction = templates[prefix][value];
    const baseFileName = fileNames[prefix][value];

    if (templateFunction && baseFileName) {
      templateFunction({
        data,
        fileName: `${baseFileName}_${fileName}`,
      });
    }

    // setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // const handleChangeTemplate = (e: RadioChangeEvent) => {
  //   setValue(e.target.value);
  // };

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
        // onOk={handleOk}
        onCancel={handleCancel}
        // okText="Tải xuống"
        footer={null}
      >
        {/* <Radio.Group
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
        </Radio.Group> */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 0",
                borderBottom: "1px solid #f0f0f0",
                fontSize: "14px",
              }}
            >
              <p style={{}}>{option.label}</p>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <EyeOutlined
                  style={{
                    cursor: "pointer",
                    color: "#1677ff",
                    fontSize: "20px",
                  }}
                  onClick={() => handleOk(option.value, "view")}
                />
                <DownloadOutlined
                  onClick={() => handleOk(option.value, "download")}
                  style={{
                    cursor: "pointer",
                    color: "green",
                    fontSize: "20px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              marginTop: "20px",
            }}
            onClick={handleCancel}
          >
            Đóng
          </Button>
        </div>
      </Modal>
    </>
  );
}
