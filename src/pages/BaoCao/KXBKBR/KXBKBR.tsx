import TableBaoCao from "../component/Table";
import ToolBarBaoCao from "../../../components/ToolBar/ToolBarBaoCao";

import { data } from "../component/config";

export default function KXBKBR() {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-semibold">Kết xuất Bảng kê bán ra</h2>
      <ToolBarBaoCao data={data} type="sell" />
      <TableBaoCao />
    </div>
  );
}
