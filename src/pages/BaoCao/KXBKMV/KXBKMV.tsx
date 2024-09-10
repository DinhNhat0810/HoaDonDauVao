import TableBaoCao from "../component/Table";
import ToolBarBaoCao from "../../../components/ToolBar/ToolBarBaoCao";

import { data } from "../component/config";

export default function KXBKMV() {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-semibold">Kết xuất Bảng kê mua vào</h2>
      <ToolBarBaoCao data={data} type="buyin" />
      <TableBaoCao />
    </div>
  );
}
