import React, { useState } from "react";
import TableBaoCao from "../component/Table";
import ToolBarBaoCao from "../../../components/ToolBar/ToolBarBaoCao";
import { Modal } from "antd";
import CustomInput from "../../../components/CustomInput";
import { CaretDownOutlined } from "@ant-design/icons";
import CustomBtn from "../../../components/CustomBtn";

const options = [
  {
    label: "MISA",
    value: 1,
  },
  {
    label: "FAST",
    value: 2,
  },
  {
    label: "TCT",
    value: 3,
  },
  {
    label: "Tổng hợp",
    value: 4,
  },
];

export default function KXBKMV() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-semibold">Kết xuất Bảng kê mua vào</h2>
      <ToolBarBaoCao handleOpenModal={handleOpenModal} />
      <TableBaoCao />

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

        <CustomInput
          placeholder="Định dạng file"
          className="mt-4"
          type="select"
          configBoderRadius={4}
          options={options}
          suffixIcon={<CaretDownOutlined />}
        />

        <div className="flex justify-center">
          <CustomBtn
            title="Xuất dữ liệu"
            className="w-8/12"
            onClick={handleOk}
          />
        </div>
      </Modal>
    </div>
  );
}
