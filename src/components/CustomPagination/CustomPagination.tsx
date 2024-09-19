import { ConfigProvider } from "antd/lib";
import React, { useEffect, useMemo, useState } from "react";
import { COLORS } from "../../libs/constants";
import { Pagination } from "antd";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";

type CustomPaginationProps = {
  data: any[];
  handlePageChange: (newPage: number) => void;
  currentPage: number;
  total?: number;
};

export default function CustomPagination(props: CustomPaginationProps) {
  const { data, handlePageChange = () => {}, currentPage, total = 0 } = props;
  const [page, setPage] = useState({
    pageSize: 10,
    currentPage: 1,
  });

  useEffect(() => {
    setPage({
      ...page,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const maxPage = useMemo(() => {
    return Math.ceil(total / page.pageSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div
      className={`relative bottom-0 left-0 right-0 bg-white z-50 px-2 pt-4 border-t flex justify-between items-center`}
    >
      <p className="text-sm">
        Tất cả <b>{total} dữ liệu phù hợp</b>
      </p>

      <div className="flex items-center">
        <DoubleLeftOutlined
          className={`w-8 h-8 flex items-center justify-center cursor-pointer translate-y-[1px] ${
            currentPage === 1 ? "text-[#cecece]" : ""
          }`}
          disabled={currentPage === 1}
          onClick={() => {
            currentPage !== 1 && handlePageChange(1);
          }}
          style={{
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
          }}
        />
        <ConfigProvider
          theme={{
            components: {
              Pagination: {
                itemActiveBg: COLORS.primary,
              },
            },

            token: {
              colorPrimary: COLORS.primary,
            },
          }}
        >
          <Pagination
            total={total}
            onChange={handlePageChange}
            current={currentPage}
            pageSize={page.pageSize}
          />
        </ConfigProvider>
        <DoubleRightOutlined
          className={`w-8 h-8 flex items-center justify-center cursor-pointer translate-y-[1px] ${
            currentPage === maxPage || maxPage === 0 ? "text-[#cecece]" : ""
          }`}
          disabled={currentPage === maxPage || maxPage === 0}
          onClick={() => {
            currentPage !== maxPage &&
              maxPage !== 0 &&
              handlePageChange(maxPage);
          }}
          style={{
            cursor:
              currentPage === maxPage || maxPage === 0
                ? "not-allowed"
                : "pointer",
          }}
        />
      </div>
    </div>
  );
}
