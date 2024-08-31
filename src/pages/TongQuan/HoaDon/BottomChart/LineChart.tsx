// components/LineChart.js
import { Chart } from "chart.js";
import { useEffect, useRef } from "react";
import "chart.js/auto";

function LineChart({ chartData }: { chartData: any }) {
  const chartReff = useRef<any>(null);
  const chartInstance = useRef<any>(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(chartReff.current, {
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
    <div className="chart-container flex justify-center">
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
      <canvas ref={chartReff} className="!w-[90%] !h-[45%]" />
    </div>
  );
}
export default LineChart;
