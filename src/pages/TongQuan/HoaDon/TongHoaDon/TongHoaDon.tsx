import { useContext, useEffect, useState } from "react";
import CustomInput from "../../../../components/CustomInput";
import { COLORS } from "../../../../libs/constants";
import CalendarIcon from "../../../../components/Icon/calendar";
import RangeDatePicker from "./RangeDatePicker";
import {
  TongHDDaxuly,
  TongHDHople,
  TongHDKhonghople,
} from "../../../../services/dashboard";
import { convertToVnd } from "../../../../libs/common";
import dayjs from "dayjs";
import { NotificationContext } from "../../../../contexts/notification.context";
import { AppContext } from "../../../../contexts/app.context";

type InvoiceFunction = (params: {
  madonvi: string;
  tungay: string;
  denngay: string;
}) => Promise<any>;

export default function TongHoaDon() {
  const [isFirstLoad, setIsFirstLoad] = useState<any>({
    part1: true,
    part2: true,
    part3: true,
  });
  const { handleOpenNotification } = useContext(NotificationContext);
  const { mst } = useContext(AppContext);

  const [data, setData] = useState([
    {
      label: "Tổng hóa đơn đã xử lý",
      value: "0",
      key: "part1",
      children: [
        {
          label: "Trước thuế GTGT",
          value: "0",
        },
        {
          label: "Thuế GTGT",
          value: "0",
        },
        {
          label: "Lệ phí",
          value: "0",
        },
        {
          label: "Giảm trừ khác",
          value: "0",
        },
        {
          label: "Tổng tiền TT",
          value: "0",
        },
      ],
    },
    {
      label: "Tổng hóa đơn hợp lệ",
      value: "0",
      key: "part2",
      children: [
        {
          label: "Trước thuế GTGT",
          value: "0",
        },
        {
          label: "Thuế GTGT",
          value: "0",
        },
        {
          label: "Lệ phí",
          value: "0",
        },
        {
          label: "Giảm trừ khác",
          value: "0",
        },
        {
          label: "Tổng tiền TT",
          value: "0",
        },
      ],
    },
    {
      label: "Tổng hóa đơn không hợp lệ",
      value: "0",
      key: "part3",
      children: [
        {
          label: "Trước thuế GTGT",
          value: "0",
        },
        {
          label: "Thuế GTGT",
          value: "0",
        },
        {
          label: "Lệ phí",
          value: "0",
        },
        {
          label: "Giảm trừ khác",
          value: "0",
        },
        {
          label: "Tổng tiền TT",
          value: "0",
        },
      ],
    },
  ]);

  useEffect(() => {
    const start = dayjs().startOf("month").format("YYYY-MM-DD");
    const end = dayjs().endOf("month").format("YYYY-MM-DD");

    const fetchData = async () => {
      try {
        if (mst) {
          Promise.all([
            TongHDDaxuly({
              madonvi: mst,
              tungay: start,
              denngay: end,
            }),
            TongHDHople({
              madonvi: mst,
              tungay: start,
              denngay: end,
            }),
            TongHDKhonghople({
              madonvi: mst,
              tungay: start,
              denngay: end,
            }),
          ]).then((res) => {
            setData(
              data.map((item) => {
                if (item.key === "part1") {
                  return {
                    ...item,
                    value: res[0]?.TongSL || 0,
                    children: [
                      {
                        label: "Trước thuế GTGT",
                        value: res[0]?.Tongchuathue || 0,
                      },
                      {
                        label: "Thuế GTGT",
                        value: res[0]?.Tongthue || 0,
                      },
                      {
                        label: "Lệ phí",
                        value: res[0]?.Tongphi || 0,
                      },
                      {
                        label: "Giảm trừ khác",
                        value: res[0]?.Tongkhac || 0,
                      },
                      {
                        label: "Tổng tiền TT",
                        value: res[0]?.TongTT || 0,
                      },
                    ],
                  };
                }

                if (item.key === "part2") {
                  return {
                    ...item,
                    value: res[1]?.TongSL || 0,
                    children: [
                      {
                        label: "Trước thuế GTGT",
                        value: res[1]?.Tongchuathue || 0,
                      },
                      {
                        label: "Thuế GTGT",
                        value: res[1]?.Tongthue || 0,
                      },
                      {
                        label: "Lệ phí",
                        value: res[1]?.Tongphi || 0,
                      },
                      {
                        label: "Giảm trừ khác",
                        value: res[1]?.Tongkhac || 0,
                      },
                      {
                        label: "Tổng tiền TT",
                        value: res[1]?.TongTT || 0,
                      },
                    ],
                  };
                }

                if (item.key === "part3") {
                  return {
                    ...item,
                    value: res[2]?.TongSL || 0,
                    children: [
                      {
                        label: "Trước thuế GTGT",
                        value: res[2]?.Tongchuathue || 0,
                      },
                      {
                        label: "Thuế GTGT",
                        value: res[2]?.Tongthue || 0,
                      },
                      {
                        label: "Lệ phí",
                        value: res[2]?.Tongphi || 0,
                      },
                      {
                        label: "Giảm trừ khác",
                        value: res[2]?.Tongkhac || 0,
                      },
                      {
                        label: "Tổng tiền TT",
                        value: res[2]?.TongTT || 0,
                      },
                    ],
                  };
                }

                return item;
              })
            );
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetData = async (
    part: string,
    tungay: string,
    denngay: string
  ) => {
    try {
      if (!tungay || !denngay) {
        return [];
      }

      if (tungay > denngay) {
        handleOpenNotification({
          type: "error",
          message: "Lỗi",
          description: "Ngày bắt đầu không được lớn hơn ngày kết thúc",
        });
        return [];
      }

      const oneMonthAfterTungay = dayjs(tungay)
        .add(1, "month")
        .subtract(1, "day")
        .endOf("day");
      if (dayjs(denngay).isAfter(oneMonthAfterTungay)) {
        handleOpenNotification({
          type: "error",
          message: "Lỗi",
          description: "Khoảng thời gian tìm kiếm không được vượt quá 1 tháng",
        });

        return [];
      }

      // Function to select the correct invoice function based on part
      const selectInvoiceFunction = (part: string): InvoiceFunction => {
        switch (part) {
          case "part1":
            return TongHDDaxuly;
          case "part2":
            return TongHDHople;
          case "part3":
            return TongHDKhonghople;
          default:
            throw new Error(`Invalid part: ${part}`);
        }
      };

      // Select the correct function based on part and call it with parameters
      const invoiceFunction = selectInvoiceFunction(part);
      if (mst) {
        const res = await invoiceFunction({
          madonvi: mst,
          tungay: tungay,
          denngay: denngay,
        });

        setData(
          data.map((item) => {
            if (item.key === part) {
              return {
                ...item,
                value: res?.TongSL || 0,
                children: [
                  {
                    label: "Trước thuế GTGT",
                    value: res?.Tongchuathue || 0,
                  },
                  {
                    label: "Thuế GTGT",
                    value: res?.Tongthue || 0,
                  },
                  {
                    label: "Lệ phí",
                    value: res?.Tongchuathue || 0,
                  },
                  {
                    label: "Giảm trừ khác",
                    value: res?.Tongchuathue || 0,
                  },
                  {
                    label: "Tổng tiền TT",
                    value: res?.TongTT || 0,
                  },
                ],
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="flex gap-4">
      {data.map((item, index) => (
        <div key={index} className="p-4 rounded-lg shadow-custom flex-1">
          <h2 className="text-center font-semibold">{item.label}</h2>
          <div className="mt-2 flex justify-center">
            <RangeDatePicker
              isFirstLoad={isFirstLoad[item.key]}
              handleSetFirstLoad={() =>
                setIsFirstLoad({ ...isFirstLoad, [item.key]: false })
              }
              item={item}
              onChangeRange={(value: any) => {
                if (value) {
                  handleGetData(
                    item.key,
                    dayjs(value[0]).format("YYYY-MM-DD"),
                    dayjs(value[1]).format("YYYY-MM-DD")
                  );
                }
              }}
            />
          </div>
          <div className="flex justify-center my-4">
            <div className="bg-[#F6F7F9] rounded-full flex flex-col items-center w-24 h-24 justify-center shadow-lg">
              <p className="font-bold text-3xl text-primary-color">
                {item.value}
              </p>
              <p>Hóa đơn</p>
            </div>
          </div>

          <div className="pt-2">
            {item.children.map((ele, i) => (
              <div
                key={i}
                className="flex justify-between items-center pb-2 text-[13px]"
              >
                <p className="">{ele.label}</p>
                <p className="font-bold text-[#343436]">
                  {convertToVnd(ele.value)}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
