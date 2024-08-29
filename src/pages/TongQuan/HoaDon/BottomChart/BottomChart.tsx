import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "./LineChart";
import { COLORS } from "../../../../libs/constants";
import RangeDatePicker from "../TongHoaDon/RangeDatePicker";

const Data = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];

export default function BottomChart() {
  const [isFirstLoad, setIsFirstLoad] = useState<any>(true);

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: COLORS.primary,
        borderWidth: 2,
        borderColor: COLORS.primary,
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
      },
    ],
  });

  Chart.register(CategoryScale);

  return (
    <div className="p-4 rounded-lg shadow-custom">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">
          Tình hình nhận hóa đơn đầu vào
        </h2>

        <RangeDatePicker
          isFirstLoad={isFirstLoad}
          handleSetFirstLoad={() => setIsFirstLoad(false)}
        />
      </div>

      <LineChart chartData={chartData} />
    </div>
  );
}
