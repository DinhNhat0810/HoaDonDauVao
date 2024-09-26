import { ConfigProvider, Table } from "antd";
import React from "react";
import CustomPagination from "../CustomPagination";

type CustomTableProps = {
  columns: any;
  data: any;
  rowSelection?: any;
  scroll?: any;
  loading?: boolean;
  handlePageChange?: (newPage: number) => void;
  currentPage?: number;
  total?: number;
  showPagination?: boolean;
  onRow?: (record: any) => any;
  rowClassName?: (record: any) => string;
  [key: string]: any;
};

export default function CustomTable(props: CustomTableProps) {
  const {
    columns,
    data,
    rowSelection,
    loading,
    scroll = {
      x: 1800,
    },
    handlePageChange = () => {},
    currentPage = 1,
    total,
    showPagination = true,
    onRow,
    rowClassName,
    pagination,
    ...rest
  } = props;
  return (
    <div className="table-invoice flex-1 flex flex-col justify-between">
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "#F6F7F9",
              borderColor: "#E6E6E8",
              rowSelectedBg: "#D4D4D6",
              rowSelectedHoverBg: "#D4D4D6",
            },
          },
          token: {
            colorPrimary: "#FA4E19",
            padding: 8,
          },
        }}
      >
        <Table
          columns={columns}
          dataSource={data}
          bordered
          scroll={scroll}
          rowSelection={rowSelection}
          pagination={false}
          className="mb-16 flex-1"
          loading={loading}
          onRow={onRow}
          rowClassName={rowClassName}
          {...rest}
        />
      </ConfigProvider>
      {showPagination && (
        <CustomPagination
          data={data}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          total={total}
        />
      )}
    </div>
  );
}
