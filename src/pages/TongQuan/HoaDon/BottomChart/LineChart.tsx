// components/LineChart.js
import { Chart } from "chart.js";
import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

function LineChart({ chartData }: { chartData: any }) {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const chartReff: any = chartRef.current?.getContext("2d");

    const gradient = chartReff.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "rgba(255, 0, 0, 0.3)");
    gradient.addColorStop(1, "rgba(255, 0, 0, 0.1)");

    new Chart(chartReff, {
      type: "line",
      data: chartData,
      options: {
        plugins: {
          title: {
            display: true,
          },
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
          x: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [chartData]);

  return (
    <div className="chart-container">
      {/* <Line
        ref={chartRef}
        data={chartData}
        // options={{
        //   plugins: {
        //     title: {
        //       display: true,
        //     },
        //     legend: {
        //       display: false,
        //     },
        //   },
        // }}
      /> */}
      <canvas ref={chartRef} />
    </div>
  );
}
export default LineChart;
