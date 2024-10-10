import React, { useEffect, useMemo, useState } from "react";
import { columnsTableKhachHang, columnsTableNCC } from "./config";
import CustomTable from "../../../components/CustomTable/CustomTable";

export default function TableDanhMuc({
  loading,
  data,
  loaiHD,
}: {
  loading: boolean;
  data: any;
  loaiHD: string;
}) {
  const columns: any = useMemo(() => {
    return loaiHD === "1" ? columnsTableNCC : columnsTableKhachHang;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CustomTable
      loading={loading}
      columns={columns}
      data={data}
      scroll={{ x: 1000 }}
      total={data?.length}
    />
  );
}
