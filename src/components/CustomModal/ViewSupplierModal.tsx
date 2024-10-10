import { Modal } from "antd";
import CustomBtn from "../CustomBtn";
import { TTMST_Options } from "../../libs/constants";

export default function ViewSupplierModal({
  open,
  handleCancel,
  dataModal,
}: {
  open: boolean;
  handleCancel: () => void;
  dataModal: any;
}) {
  const handleOk = () => {
    handleCancel();
  };

  return (
    <Modal
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
      footer={null}
      width={360}
    >
      <h2 className="text-center text-xl mt-2 font-bold">Thông tin đơn vị</h2>
      <div className="flex justify-center my-2">
        <span
          className={`px-4 py-1 rounded-md`}
          style={{
            color:
              TTMST_Options.find(
                (item: any) => item.desc === dataModal?.ttnmuamst
              )?.color || "transparent",
            backgroundColor:
              TTMST_Options.find(
                (item: any) => item.desc === dataModal?.ttnmuamst
              )?.background || "transparent",
          }}
        >
          {
            TTMST_Options.find(
              (item: any) => item.desc === dataModal?.ttnmuamst
            )?.desc
          }
        </span>
      </div>

      <div>
        <div className="border-b border-[#E6E6E8] py-1">
          <p className="text-[13px] font-normal">Tên công ty</p>
          <p className="font-medium">{dataModal?.tenncc}</p>
        </div>
        <div className="border-b border-[#E6E6E8] py-1 mt-1">
          <p className="text-[13px] font-normal">Mã số thuế</p>
          <p className="font-medium">{dataModal?.mstnban}</p>
        </div>
        <div className="border-b border-[#E6E6E8] py-1 mt-1">
          <p className="text-[13px] font-normal">Rủi ro về hoá đơn</p>
          <p className="font-medium">
            {dataModal?.kqKiemTra?.HDRuiro} và hoá đơn theo công văn của CQT
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        <CustomBtn title="Đóng" className="w-8/12" onClick={handleOk} />
      </div>
    </Modal>
  );
}
