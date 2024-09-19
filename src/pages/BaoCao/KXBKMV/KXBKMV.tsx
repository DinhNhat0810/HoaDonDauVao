import ToolBar from "../../../components/ToolBar";
import TableBaoCao from "../component/Table";

import { data } from "../component/config";

export default function KXBKMV() {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-semibold">Kết xuất Bảng kê mua vào</h2>
      <ToolBar
        data={data}
        type="buyin"
        showRangerPicker={true}
        showExportTemplateBtn={true}
        showFilter={false}
        showSyncBtn={false}
        showSearch={false}
        showExportBtn={false}
      />
      <TableBaoCao />
    </div>
  );
}
