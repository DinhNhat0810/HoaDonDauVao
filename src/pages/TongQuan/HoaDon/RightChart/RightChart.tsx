import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import CircleChart from "./CircleChart";
import { COLORS } from "../../../../libs/constants";
import RangeDatePicker from "../TongHoaDon/RangeDatePicker";
import BarChart from "./BarChart";

const Data = [
  {
    id: 1,
    name: "Công ty cổ phần công nghệ Nacencomm 1",
    total: 8000000,
    color: COLORS.primary,
    gradientFrom: "rgba(212, 212, 214, 1)",
    gradientTo: "rgba(212, 212, 214, 1)",
  },
  {
    id: 2,
    name: "Công ty cổ phần công nghệ Nacencomm 2",
    total: 2000000,
    color: COLORS.infor,
    gradientFrom: "rgba(255, 177, 104, 1)",
    gradientTo: "rgba(255, 120, 79, 1)",
  },
  {
    id: 3,
    name: "Công ty cổ phần công nghệ Nacencomm 3",
    total: 7888888,
    color: COLORS.success,
    gradientFrom: "rgba(255, 177, 104, 1)",
    gradientTo: "rgba(255, 120, 79, 1)",
  },
];

const BottomData = [
  {
    id: 1,
    name: "Hóa đơn đầu vào",
    total: 100,
    color: COLORS.primary,
  },
  {
    id: 2,
    name: "Hóa đơn đầu ra",
    total: 3000,
    color: COLORS.infor,
  },
];

export default function RightChart() {
  const [isFirstLoad, setIsFirstLoad] = useState<any>(true);

  const [circleChartData, setCircleChartData] = useState({
    labels: Data.map((data) => data.name),
    datasets: [
      {
        label: "Tổng giá trị hóa đơn",
        data: Data.map((data) => data.total),
        backgroundColor: Data.map((data) => data.color),
        hoverOffset: 4,
        fillColor: "rgba(255, 108, 35, 0.1)",
        gradientFrom: Data.map((data) => data.gradientFrom),
        gradientTo: Data.map((data) => data.gradientTo),
      },
    ],
  });

  const [barChartData, setBarChartData] = useState({
    labels: BottomData.map((data) => data.name),
    datasets: [
      {
        label: "Tổng giá trị",
        data: BottomData.map((data) => data.total),
        backgroundColor: BottomData.map((data) => data.color),
        hoverOffset: 4,
        fillColor: "rgba(255, 108, 35, 0.1)",
      },
    ],
  });

  Chart.register(CategoryScale);

  return (
    <div className="p-4 rounded-lg shadow-custom">
      <div className="border-b border-[#e2e2e7] pb-6">
        <div className="flex flex-col items-center">
          <RangeDatePicker
            isFirstLoad={isFirstLoad}
            handleSetFirstLoad={() => setIsFirstLoad(false)}
          />
          <h2 className="text-xl font-semibold text-center">
            Tổng giá trị hóa đơn
          </h2>
          <span className="text-sm mb-2 mt-2">
            Biểu đồ thống kê top 3 nhà cung cấp lớn
          </span>
        </div>

        <CircleChart chartData={circleChartData} />

        <div className="px-8 py-2">
          {Data.map((item, index) => (
            <div key={index} className="flex items-center mt-4">
              <div
                className="w-4 h-4 rounded-full mr-6"
                style={{ backgroundColor: item.color }}
              ></div>
              <p className="flex-1 text-sm">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=" mt-6">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold text-center">
            So sánh tổng giá trị
          </h2>
          <p className="text-sm mb-2 text-center mt-2">
            Biểu đồ so sánh tổng giá trị hóa đơn đầu vào/ đầu ra tính theo{" "}
            <span className="text-primary-color">đơn vị triệu vnđ</span>
          </p>
        </div>

        <BarChart chartData={barChartData} />

        <div className="px-8 py-2">
          {BottomData.map((item, index) => (
            <div key={index} className="flex items-center mt-4">
              <div
                className="w-4 h-4 rounded-full mr-6"
                style={{ backgroundColor: item.color }}
              ></div>
              <p className="flex-1 text-sm">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
