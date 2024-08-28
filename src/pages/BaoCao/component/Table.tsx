import React, { useEffect, useMemo, useState } from "react";
import CustomTable from "../../../components/CustomTable/CustomTable";
import { columnsTable, data } from "./config";
import ViewSupplierModal from "../../../components/CustomModal/ViewSupplierModal";

export default function TableBaoCao() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
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
        // rowSelection={{
        //   type: "checkbox",
        //   //   ...rowSelection,
        // }}
      />
      <ViewSupplierModal open={openModal} handleCancel={handleCancel} />
    </>
  );
}
