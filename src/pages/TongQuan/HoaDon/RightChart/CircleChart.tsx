// components/LineChart.js
import { Chart, ChartData, Plugin } from "chart.js";
import { useEffect, useRef } from "react";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { isEmpty } from "lodash";
import { convertToVnd } from "../../../../libs/common";

interface DonutChartProps {
  chartData: any;
}

Chart.register(ChartDataLabels);

function CircleChart({ chartData }: DonutChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      // let selectedDatasetIndex: any = undefined;
      // let selectedIndex: any = undefined;

      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const background_1 = ctx.createLinearGradient(0, 0, 0, 300);
        background_1.addColorStop(0, "rgba(255, 177, 104, 1)");
        background_1.addColorStop(1, "rgba(255, 120, 79, 1)");

        const background_2 = ctx.createLinearGradient(0, 0, 0, 600);
        background_2.addColorStop(0, "rgba(189, 189, 191, 1)");
        background_2.addColorStop(1, "rgba(189, 189, 191, 1)");

        const background_3 = ctx.createLinearGradient(0, 0, 0, 600);
        background_3.addColorStop(0, "rgba(212, 212, 214, 1)");
        background_3.addColorStop(1, "rgba(212, 212, 214, 1)");

        const newData = chartData?.datasets?.map((data: any) => ({
          ...data,
          backgroundColor: [background_3, background_2, background_1],
        }));

        const donutChart = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: chartData.labels,
            datasets: newData,
          },
          options: {
            plugins: {
              legend: {
                display: true,
                fullSize: false,
                maxWidth: 40,
                position: "bottom",
                align: "start",

                labels: {
                  usePointStyle: true,
                  padding: 20,
                  boxHeight: 10,
                  generateLabels: (chart: any) => {
                    const visibility: any = [];

                    // Đảm bảo có ít nhất 3 nhãn
                    const labels =
                      chart.data.labels.length < 3
                        ? [
                            ...chart.data.labels,
                            ...Array(3 - chart.data.labels.length).fill(
                              ".................................................................."
                            ),
                          ]
                        : chart.data.labels;

                    for (let i = 0; i < labels.length; i++) {
                      if (chart.getDataVisibility(i)) {
                        visibility.push(false);
                      } else {
                        visibility.push(true);
                      }
                    }

                    return labels.map((label: any, index: any) => {
                      return {
                        text: label,
                        fillStyle:
                          chart.data.datasets[0].backgroundColor[index] ||
                          "transparent",
                        strokeStyle:
                          chart.data.datasets[0].backgroundColor[index] ||
                          "transparent",
                        hidden: visibility[index],
                        id: index,
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
                display: true,
              },

              datalabels: {
                color: "#fff",
                font: {
                  weight: "bold",
                  size: 12,
                },
                formatter: function (value, context) {
                  if (value == 0 || !value) {
                    return "";
                  }

                  const total = context?.dataset?.data?.reduce(
                    (a: any, b: any) => {
                      return a + b;
                    },
                    0
                  );
                  return `${((value / total) * 100).toFixed(2)}%`;
                },
              },
            },
          },
          plugins: [
            {
              id: "textInsideDoughnut",
              afterDraw: function (chart: any) {
                const width = chart.width,
                  height = chart.height,
                  ctx = chart.ctx;
                ctx.restore();

                const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                gradient.addColorStop(0, "rgba(250,174,50,1)");
                gradient.addColorStop(1, "rgba(250,174,50,0)");

                const fontSize = (height / 420).toFixed(2);
                ctx.font = `${fontSize}em sans-serif`;
                ctx.textBaseline = "middle";

                if (!isEmpty(chartData?.datasets)) {
                  const text =
                      convertToVnd(
                        chartData?.datasets[0].data?.reduce(
                          (a: any, b: any) => a + b,
                          0
                        )
                      ) || 0,
                    textX = Math.round(
                      (width - ctx.measureText(text).width) / 2
                    ),
                    textY = height / 2.45;

                  ctx.fillText(text, textX, textY);
                  ctx.save();
                }
              },
            },
            ChartDataLabels,
          ],
        });

        return () => {
          donutChart.destroy();
        };
      }
    }
  }, [chartData]);

  return (
    <>
      <div className="chart-container flex justify-center">
        <canvas
          ref={chartRef}
          width="360"
          height="360"
          className="!w-[360px] !h-[360px]"
        />
      </div>
    </>
  );
}
export default CircleChart;
