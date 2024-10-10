import React, { memo, useEffect, useMemo, useState } from "react";
import { columnsTableLSGD } from "../config";
import CustomTable from "../../../../components/CustomTable/CustomTable";

const TableLSGD = ({ loading, data }: { loading?: boolean; data: any[] }) => {
  const columns: any = useMemo(() => {
    return columnsTableLSGD();
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

const TableLichSuGiaoDich = memo(TableLSGD);

export default TableLichSuGiaoDich;
