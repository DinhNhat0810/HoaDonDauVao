import React, { useEffect, useMemo, useState } from "react";
import CustomTable from "../../../components/CustomTable/CustomTable";
import { columnsTable } from "./config";
import ViewSupplierModal from "../../../components/CustomModal/ViewSupplierModal";

export default function TableBaoCao({
  loading,
  data,
  handlePageChange,
  total = 0,
  currentPage,
}: {
  loading: boolean;
  data: any;
  handlePageChange: (page: number) => void;
  total: number;
  currentPage: number;
}) {
  const [openModal, setOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState<any>(null);

  const handleOpenModal = (data: any) => {
    setDataModal(data);
    setOpenModal(true);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  const columns: any = useMemo(() => {
    return columnsTable({ handleOpenModal });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CustomTable
        columns={columns}
        data={data}
        loading={loading}
        total={total}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        scroll={{ x: 1600 }}
      />
      <ViewSupplierModal
        open={openModal}
        handleCancel={handleCancel}
        dataModal={dataModal}
      />
    </>
  );
}
