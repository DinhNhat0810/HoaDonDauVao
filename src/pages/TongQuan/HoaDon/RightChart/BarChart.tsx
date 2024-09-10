// components/LineChart.js
import { Chart, ChartData, Plugin } from "chart.js";
import { useEffect, useRef } from "react";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { convertToVnd } from "../../../../libs/common";

interface DonutChartProps {
  chartData: ChartData;
  innerText: string;
}

function BarChart({ chartData }: { chartData: any }) {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);

        gradient.addColorStop(0, "rgba(255, 177, 104, 1)");
        gradient.addColorStop(1, "rgba(255, 120, 79, 1)");

        const gradient1 = ctx.createLinearGradient(0, 0, 0, 300);

        gradient1.addColorStop(0, "rgba(212, 212, 214, 1)");
        gradient1.addColorStop(1, "rgba(212, 212, 214, 0.6)");

        const newData = chartData?.datasets?.map((data: any) => ({
          ...data,
          backgroundColor: [gradient, gradient1],
        }));

        const donutChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: chartData.labels,
            datasets: newData,
          },
          options: {
            plugins: {
              legend: {
                display: true,
                position: "bottom",
                labels: {
                  usePointStyle: true,
                  boxHeight: 10,
                  padding: 20,
                  generateLabels: (chart: any) => {
                    const visibility: any = [];
                    for (let i = 0; i < chart.data.labels.length; i++) {
                      if (chart.getDataVisibility(i)) {
                        visibility.push(false);
                      } else {
                        visibility.push(true);
                      }
                    }

                    return chart.data.labels.map((label: any, index: any) => {
                      return {
                        text: label,
                        fillStyle:
                          chart.data.datasets[0].backgroundColor[index],
                        strokeStyle:
                          chart.data.datasets[0].backgroundColor[index],
                        hidden: visibility[index],
                      };
                    });
                  },
                },
                onClick: (event: any, legendItem: any, legend: any) => {
                  const index = legend.chart.data.labels.indexOf(
                    legendItem.text
                  );
                  legend.chart.toggleDataVisibility(index);
                  legend.chart.update();
                },
                onHover: (event: any) => {
                  event.native.target.style.cursor = "pointer";
                },
                onLeave: (event: any) => {
                  event.native.target.style.cursor = "default";
                },
              },
              tooltip: {
                enabled: true,
              },
              // Custom plugin to draw text in the center
              title: {
                display: false,
              },
              datalabels: {
                color: "#000",
                font: {
                  weight: "bold",
                  size: 12,
                },
                anchor: "end",
                align: "top",
                formatter: function (value) {
                  return convertToVnd(value);
                },
              },
            },

            scales: {
              x: {},
              y: {
                display: false,
                min: 0,
                max: 2000000000,
              },
            },
          },
          plugins: [ChartDataLabels],
        });

        return () => {
          donutChart.destroy();
        };
      }
    }
  }, [chartData]);

  return (
    <div className="chart-container flex justify-center">
      <canvas ref={chartRef} width="200" height="200" />
    </div>
  );
}
export default BarChart;
