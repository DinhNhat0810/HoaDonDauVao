import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { isEmpty } from "lodash";

export default function PrevNextPaginationTest({
  total = 0,
  handleChangePage = () => {},
  stateStack,
  loading,
  currrentPage,
  initialData,
}: {
  total: number | string;
  state: {
    prev: null | string;
    next: null | string;
  };
  handleChangePage: (state: string | null, type: "prev" | "next") => void;
  stateStack: any;
  loading: boolean;
  initialData: any;
  currrentPage: number;
}) {
  const handlePrev = () => {
    if (isEmpty(initialData) || loading || currrentPage === 1) return;
    const newState = stateStack[stateStack.length - 2];
    handleChangePage(
      {
        ...newState,
        page: currrentPage - 1,
      },
      "prev"
    );
  };

  const handleNext = () => {
    const newState = stateStack[stateStack.length - 1];

    if (isEmpty(initialData) || loading || currrentPage * 15 >= +total) return;
    handleChangePage(
      {
        ...newState,
        page: currrentPage + 1,
      },
      "next"
    );
  };

  return (
    <div
      className={`relative bottom-0 left-0 right-0 bg-white z-50 px-2 pt-4 border-t flex justify-between items-center`}
    >
      <p className="text-sm">
        Tất cả <b>{total} dữ liệu phù hợp</b>
      </p>

      <div className="flex items-center gap-2">
        <div
          onClick={handlePrev}
          className={` 
            ${
              !isEmpty(initialData) && currrentPage !== 1 && !loading
                ? "bg-[#F6F7F9] cursor-pointer"
                : "text-[#cecece] cursor-not-allowed"
            }
            w-8 h-8 flex items-center justify-center cursor-pointer translate-y-[1px] 
            text rounded-md`}
        >
          <LeftOutlined />
        </div>

        <div
          onClick={handleNext}
          className={`
            ${
              !isEmpty(initialData) && currrentPage * 15 < +total && !loading
                ? "bg-[#F6F7F9] cursor-pointer"
                : "text-[#cecece] cursor-not-allowed"
            }
            w-8 h-8 flex items-center justify-center cursor-pointer translate-y-[1px] 
            text rounded-md`}
        >
          <RightOutlined />
        </div>
      </div>
    </div>
  );
}
