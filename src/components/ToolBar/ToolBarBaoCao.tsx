import CustomInput from "../CustomInput";
import { SearchOutlined } from "@ant-design/icons";

import CustomBtn from "../CustomBtn";
import { useState } from "react";
import SelectTemplateModal from "../CustomModal/SelectTemplateModal";

type ToolBarProps = {
  className?: string;
  data: any;
  type: string;
};

export default function ToolBarBaoCao({ className, data, type }: ToolBarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-between mt-2">
      <div className="flex">
        <CustomInput
          placeholder="Nhập từ khóa để tìm"
          prefix={<SearchOutlined className="cursor-pointer" />}
          configBoderRadius={4}
          className="w-60 mr-2 py-[6px]"
        />
        <CustomInput
          placeholder={["Từ ngày", "Đến ngày"]}
          configBoderRadius={4}
          type="rangePicker"
          className="py-[6px] w-60"
        />
      </div>

      <div className="">
        <CustomBtn title="Xuất dữ liệu" onClick={handleOpenModal} />
      </div>

      <SelectTemplateModal
        data={data}
        fileName={"fileName"}
        type={type}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
      />
    </div>
  );
}
