import React, { memo, useEffect, useMemo, useState } from "react";
import { columnsTable } from "./config";
import CustomTable from "../../../components/CustomTable/CustomTable";

const TableHoaDon = ({
  loading,
  data,
  handlePageChange,
  currentPage,
  total,
  handleDownload,
  handleViewInvoice,
}: {
  loading: boolean;
  data: any[];
  handlePageChange: (newPage: number) => void;
  currentPage: number;
  total: number;
  handleDownload: (values: any) => void;
  handleViewInvoice?: (values: any, record: any) => void;
}) => {
  const [openPopover, setOpenPopover] = useState("");

  const handleTogglePopover = (key: string) => {
    if (openPopover === key) {
      setOpenPopover("");
    } else {
      setOpenPopover(key);
    }
  };

  const columns: any = useMemo(() => {
    return columnsTable({
      handleDownload,
      handleTogglePopover,
      openPopover,
      handleViewInvoice,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openPopover]);

  return (
    <CustomTable
      handlePageChange={handlePageChange}
      currentPage={currentPage}
      columns={columns}
      data={data}
      loading={loading}
      rowSelection={{
        type: "checkbox",
        //   ...rowSelection,
      }}
      total={total}
    />
  );
};

const MemoziedTableHoaDon = memo(TableHoaDon);

export default MemoziedTableHoaDon;
