import React, { useEffect, useMemo, useState } from "react";
import { columnsTable, data } from "./config";
import CustomTable from "../../../components/CustomTable/CustomTable";

export default function TableDanhMuc() {
  const columns: any = useMemo(() => {
    return columnsTable;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CustomTable
      columns={columns}
      data={data}
      scroll={{ x: 1000 }}
      rowSelection={{
        type: "checkbox",
        //   ...rowSelection,
      }}
    />
  );
}
