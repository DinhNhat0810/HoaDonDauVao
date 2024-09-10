// components/LineChart.js
import { Chart } from "chart.js";
import { useEffect, useRef } from "react";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

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
        elements: { point: { radius: 0 } },
        plugins: {
          title: {
            display: true,
          },
          legend: {
            display: false,
          },
          datalabels: {
            color: "black",
            font: {
              size: 14,
              weight: "bold",
            },
            anchor: "end",
            align: "right",
            formatter: function (value) {
              if (value == 0 || !value) {
                return "";
              }
              return value;
            },
          },
        },
        scales: {
          x: {
            ticks: {
              autoSkip: false,
              maxRotation: 90,
              minRotation: 45,
            },
          },
          y: {},
        },
      },
      plugins: [ChartDataLabels],
    });
  }, [chartData]);

  return (
    <div className="chart-container flex justify-center">
      <canvas ref={chartReff} className="!w-[90%] !h-[45%]" />
    </div>
  );
}
export default LineChart;
