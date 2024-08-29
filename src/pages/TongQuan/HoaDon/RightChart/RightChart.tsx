import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import CircleChart from "./CircleChart";
import { COLORS } from "../../../../libs/constants";
import RangeDatePicker from "../TongHoaDon/RangeDatePicker";

const Data = [
  {
    id: 1,
    name: "Công ty cổ phần công nghệ Nacencomm 1",
    total: 8000000,
    color: COLORS.primary,
  },
  {
    id: 2,
    name: "Công ty cổ phần công nghệ Nacencomm 2",
    total: 4567777,
    color: COLORS.infor,
  },
  {
    id: 3,
    name: "Công ty cổ phần công nghệ Nacencomm 3",
    total: 7888888,
    color: COLORS.success,
  },
];

export default function RightChart() {
  const [isFirstLoad, setIsFirstLoad] = useState<any>(true);

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.name),
    datasets: [
      {
        label: "Tổng giá trị hóa đơn",
        data: Data.map((data) => data.total),
        backgroundColor: Data.map((data) => data.color),
        hoverOffset: 4,
        fillColor: "rgba(255, 108, 35, 0.1)",
      },
    ],
  });

  Chart.register(CategoryScale);

  return (
    <div className="p-4 rounded-lg shadow-custom">
      <div className="flex flex-col items-center">
        <RangeDatePicker
          isFirstLoad={isFirstLoad}
          handleSetFirstLoad={() => setIsFirstLoad(false)}
        />
        <h2 className="text-xl font-semibold text-center">
          Tổng giá trị hóa đơn
        </h2>
        <span className="text-sm mb-2">
          Biểu đồ thống kê top 3 nhà cung cấp lớn
        </span>
      </div>

      <CircleChart chartData={chartData} />

      <div className="px-8 py-2">
        {Data.map((item, index) => (
          <div key={index} className="flex items-center mt-4">
            <div
              className="w-4 h-4 rounded-full mr-2"
              style={{ backgroundColor: item.color }}
            ></div>
            <p className="flex-1 text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
