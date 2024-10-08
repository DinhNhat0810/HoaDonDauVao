import React, { memo, useEffect, useMemo, useState } from "react";
import { columnsTableQLTN } from "../config";
import CustomTable from "../../../../components/CustomTable/CustomTable";

const TableQLTN = ({ loading, data }: { loading?: boolean; data: any[] }) => {
  const columns: any = useMemo(() => {
    return columnsTableQLTN();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CustomTable
      showPagination={false}
      columns={columns}
      data={data}
      loading={loading}
      scroll={{ x: 800 }}
    />
  );
};

const TableQuanLyTaiNguyen = memo(TableQLTN);

export default TableQuanLyTaiNguyen;
