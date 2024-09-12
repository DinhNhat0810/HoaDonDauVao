import React, { memo, useEffect, useMemo, useState } from "react";
import { columnsTable } from "./config";
import CustomTable from "../../../components/CustomTable/CustomTable";

const TableHoaDon = ({
  loading,
  data,
  handlePageChange,
  currentPage,
  total,
  onRow,
  rowClassName,
}: {
  loading: boolean;
  data: any[];
  handlePageChange: (newPage: number) => void;
  currentPage: number;
  total: number;
  onRow?: (record: any) => any;
  rowClassName?: (record: any) => string;
}) => {
  const columns: any = useMemo(() => {
    return columnsTable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CustomTable
      handlePageChange={handlePageChange}
      currentPage={currentPage}
      columns={columns}
      data={data}
      loading={loading}
      onRow={onRow}
      total={total}
      rowClassName={rowClassName}
    />
  );
};

const MemoziedTableHoaDon = memo(TableHoaDon);

export default MemoziedTableHoaDon;
