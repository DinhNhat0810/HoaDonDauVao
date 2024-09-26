import React, { memo, useEffect, useMemo, useState } from "react";
import { columnsTable } from "./config";
import CustomTable from "../../../components/CustomTable/CustomTable";
import CustomPagination from "../../../components/CustomPagination";
import PrevNextPagination from "../../../components/CustomPagination/PrevNextPagination";
import PrevNextPagination1 from "../../../components/CustomPagination/PrevNextPagination1";

const TableHoaDon = ({
  loading,
  data,
  handleChangePage,
  total,
  onRow,
  rowClassName,
  state,
  stateStack,
  initialData,
  currentPage,
}: {
  loading: boolean;
  data: any[];
  handleChangePage: (state: string | null, type: "prev" | "next") => void;
  currentPage: number;
  total: number;
  onRow?: (record: any) => any;
  rowClassName?: (record: any) => string;
  state: {
    prev: null | string;
    next: null | string;
  };
  stateStack: any;
  initialData: any;
  currrentPage: number;
}) => {
  const columns: any = useMemo(() => {
    return columnsTable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <PrevNextPagination1
        handleChangePage={handleChangePage}
        total={total}
        state={state}
        stateStack={stateStack}
        loading={loading}
        initialData={initialData}
        currrentPage={currentPage}
      />
      <CustomTable
        columns={columns}
        data={data}
        loading={loading}
        onRow={onRow}
        total={total}
        rowClassName={rowClassName}
        showPagination={false}
      />
    </div>
  );
};

const MemoziedTableHoaDon = memo(TableHoaDon);

export default MemoziedTableHoaDon;
