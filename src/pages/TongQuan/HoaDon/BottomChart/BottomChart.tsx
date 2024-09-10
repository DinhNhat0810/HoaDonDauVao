import { useContext, useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "./LineChart";
import { COLORS } from "../../../../libs/constants";
import RangeDatePicker from "../TongHoaDon/RangeDatePicker";
import { NotificationContext } from "../../../../contexts/notification.context";
import dayjs from "dayjs";
import { AppContext } from "../../../../contexts/app.context";
import { BieudonhanHD } from "../../../../services/dashboard";
import ChartDataLabels from "chartjs-plugin-datalabels";

const Data = [
  {
    id: 1,
    day: 2016,
    SoluongHD: 100,
  },
];

export default function BottomChart() {
  const [isFirstLoad, setIsFirstLoad] = useState<any>(true);
  const { handleOpenNotification } = useContext(NotificationContext);
  const { mst } = useContext(AppContext);
  const [xAxis, setXAxis] = useState<string[]>([]);

  const [chartData, setChartData] = useState({
    labels: xAxis,
    datasets: [
      {
        label: "Số lượng hóa đơn",
        data: Data.map((data) => data.SoluongHD),
        backgroundColor: COLORS.primary,
        borderWidth: 2,
        borderColor: COLORS.primary,
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
        pointRadius: 3,
      },
    ],
  });

  Chart.register(CategoryScale);
  Chart.register(ChartDataLabels);

  const fetchData = async (tungay: string, denngay: string) => {
    try {
      if (mst) {
        const res = await BieudonhanHD({
          madonvi: mst,
          tungay: tungay,
          denngay: denngay,
        });

        const start = dayjs(tungay);
        const end = dayjs(denngay);
        const days: string[] = [];
        const formatedDays = [];

        let current = start;

        while (current <= end) {
          days.push(current.format("DD/MM"));
          formatedDays.push(current.format("DD-MM-YYYY"));
          current = current.add(1, "day");
        }

        const newRes = res.map((data: any) => data?.Ngaytao);

        const newData = formatedDays.map((data: any) => {
          if (newRes.includes(data)) {
            return res.find((item: any) => item?.Ngaytao === data)?.SoluongHD;
          }

          return 0;
        });

        console.log(res);

        setChartData({
          labels: days,
          datasets: [
            {
              label: "Số lượng hóa đơn",
              data: newData,
              backgroundColor: COLORS.primary,
              borderWidth: 2,
              borderColor: COLORS.primary,
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
              pointRadius: 3,
            },
          ],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetData = async (tungay: string, denngay: string) => {
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

      // Select the correct function based on part and call it with parameters
      fetchData(tungay, denngay);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const start = dayjs().startOf("month");
    const end = dayjs().endOf("month");

    setXAxis([
      ...Array.from({ length: end.diff(start, "day") + 1 }, (_, i) =>
        start.add(i, "day").format("DD/MM/YYYY")
      ),
    ]);

    fetchData(
      dayjs().startOf("month").format("YYYY-MM-DD"),
      dayjs().endOf("month").format("YYYY-MM-DD")
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-4 rounded-lg shadow-custom">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">
          Tình hình nhận hóa đơn đầu vào
        </h2>

        <RangeDatePicker
          isFirstLoad={isFirstLoad}
          handleSetFirstLoad={() => setIsFirstLoad(false)}
          onChangeRange={(values) => {
            if (values) {
              handleGetData(
                dayjs(values[0]).format("YYYY-MM-DD"),
                dayjs(values[1]).format("YYYY-MM-DD")
              );
            }
          }}
        />
      </div>

      <LineChart chartData={chartData} />
    </div>
  );
}
