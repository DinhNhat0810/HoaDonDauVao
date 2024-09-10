import { useContext, useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import CircleChart from "./CircleChart";
import { COLORS } from "../../../../libs/constants";
import RangeDatePicker from "../TongHoaDon/RangeDatePicker";
import BarChart from "./BarChart";
import { AppContext } from "../../../../contexts/app.context";
import {
  BieudoSSGTHDon,
  BieudoSSTongGTHDon_NCC,
} from "../../../../services/dashboard";
import { NotificationContext } from "../../../../contexts/notification.context";
import dayjs from "dayjs";
import { Skeleton } from "antd";

const TopData = [
  {
    id: 1,
    total: 0,
    color: COLORS.primary,
    name: "Nhà cung cấp",
  },
  {
    id: 2,
    total: 0,
    color: COLORS.infor,
    name: "Nhà cung cấp",
  },
  {
    id: 3,
    total: 0,
    color: COLORS.success,
    name: "Nhà cung cấp",
  },
];

const BottomData = [
  {
    id: 1,
    name: "Hóa đơn đầu vào",
    color: COLORS.primary,
    backgroundColor: COLORS.primary,
  },
  {
    id: 2,
    name: "Hóa đơn đầu ra",
    color: COLORS.infor,
    backgroundColor: COLORS.infor,
  },
];

export default function RightChart() {
  const [isFirstLoad, setIsFirstLoad] = useState<any>(true);
  const { mst } = useContext(AppContext);
  const [circleChartData, setCircleChartData] = useState({
    labels: TopData.map((data) => data?.name),
    datasets: [
      {
        label: "Tổng giá trị",
        data: TopData.map((data: any) => data?.total),
        backgroundColor: TopData.map((data) => data?.color),
        hoverOffset: 4,
        fillColor: "rgba(255, 108, 35, 0.1)",
      },
    ],
  });
  const [barChartData, setBarChartData] = useState({
    labels: BottomData.map((data) => data?.name),
    datasets: [
      {
        label: "",
        data: BottomData.map((data: any) => data?.total),
        backgroundColor: BottomData.map((data) => data?.color),
        hoverOffset: 4,
        fillColor: "rgba(255, 108, 35, 0.1)",
        barPercentage: 0.4,
      },
    ],
  });
  const { handleOpenNotification } = useContext(NotificationContext);

  Chart.register(CategoryScale);

  const fetchData = async (tungay: string, denngay: string) => {
    try {
      if (mst) {
        Promise.all([
          BieudoSSGTHDon({
            madonvi: mst,
            tungay: tungay,
            denngay: denngay,
          }),
          BieudoSSTongGTHDon_NCC({
            madonvi: mst,
            tungay: tungay,
            denngay: denngay,
          }),
        ]).then((res) => {
          setBarChartData({
            labels: BottomData.map((data) => data.name),
            datasets: [
              {
                label: "Tổng giá trị",
                data: [res[0].TongHDDauvao, res[0].TongHDDaura],
                backgroundColor: BottomData.map((data) => data.color),
                hoverOffset: 4,
                fillColor: "rgba(255, 108, 35, 0.1)",
                barPercentage: 0.4,
              },
            ],
          });

          setCircleChartData({
            labels: res[1]?.map((data: any) => data.TenNCC),
            datasets: [
              {
                label: "Tổng giá trị hóa đơn",
                data: res[1]?.map((data: any) => data.TongtienTTHD),
                backgroundColor: [COLORS.primary, COLORS.infor, COLORS.success],
                hoverOffset: 4,
                fillColor: "rgba(255, 108, 35, 0.1)",
              },
            ],
          });
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(
      dayjs().startOf("month").format("YYYY-MM-DD"),
      dayjs().endOf("month").format("YYYY-MM-DD")
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <div className="p-4 rounded-lg shadow-custom">
      <div className="border-b border-[#e2e2e7] pb-6">
        <div className="flex flex-col items-center">
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
          <h2 className="text-xl font-semibold text-center">
            Tổng giá trị hóa đơn
          </h2>
          <span className="text-sm mb-2 mt-2">
            Biểu đồ thống kê top 3 nhà cung cấp lớn
          </span>
        </div>

        <CircleChart chartData={circleChartData} />
      </div>

      <div className=" mt-6">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold text-center">
            So sánh tổng giá trị
          </h2>
          <p className="text-sm mb-2 text-center mt-2">
            Biểu đồ so sánh tổng giá trị hóa đơn đầu vào/ đầu ra tính theo{" "}
            <span className="text-primary-color">đơn vị vnđ</span>
          </p>
        </div>

        <BarChart chartData={barChartData} />
      </div>
    </div>
  );
}
