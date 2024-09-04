import React, { memo, useEffect, useMemo, useState } from "react";
import CustomTable from "../../../components/CustomTable/CustomTable";
import { columnsTable } from "./config";

const TableNKTC = ({
  loading,
  data,
}: {
  loading?: boolean;
  data: any[];
  handlePageChange: (newPage: number) => void;
  currentPage: number;
  total: number;
}) => {
  const columns: any = useMemo(() => {
    return columnsTable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CustomTable
      columns={columns}
      data={data}
      loading={loading}
      scroll={{ x: 800 }}
    />
  );
};

const TableNhatKyTruyCap = memo(TableNKTC);

export default TableNhatKyTruyCap;
